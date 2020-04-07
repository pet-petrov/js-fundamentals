function solve(input) {
    let targets = input.shift()
        .split(' ')
        .map(x => x = Number(x));
    input.pop();
    for (const line of input) {
        let [command, index, arg] = line.split(' ');
        switch (command) {
            case 'Shoot':
                shootTarget(+index, +arg)
                break;
            case 'Add':
                addTarget(+index, +arg)
                break;
            case 'Strike':
                strikeTarget(+index, +arg)
                break;
        }
    }
    function shootTarget(position, value) {
        if (position >= 0 && position < targets.length) {
            targets[position] -= value;
            if (targets[position] <= 0) {
                targets.splice(position, 1)
            }
        }
    }
    function addTarget(position, value) {
        if (position >= 0 && position < targets.length) {
            targets.splice(position, 0, value)
        }
        else {
            console.log('Invalid placement!')
        }
    }
    function strikeTarget(position, value) {
        if ((position >= 0 && position <= targets.length) &&
            (position - value >= 0) && (position + value < targets.length)) {
            let zone = value * 2 + 1;
            targets.splice(position - value, zone);
        }
        else {
            console.log('Strike missed!');
        }
    }
    targets = targets.join('|');
    console.log(targets);
}

solve(
    [
        '47 55 10 78 99 20',
        'Shoot 1 55',
        'Shoot 8 15',
        'Strike 2 3',
        'Add 0 20',
        'Add 2 40',
        'Add 8 50',
        'Shoot 0 15',
        'Strike 1 2',
    
        'End'
    ]

)