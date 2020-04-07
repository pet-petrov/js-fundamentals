function solve(input) {
    let field = input.shift().split('|');
    field = field.map(x => x = Number(x));
    let commands = input;
    let points = 0;
    for (const line of commands) {
        let command = line.split('@');
        let index = Number(command[1]);
        let shootLength = Number(command[2]);
        let commandParts = command[0].split(' ');
        if(commandParts[0]=== 'Game')
        break;
        switch (commandParts[0]) {
            
            case 'Shoot':
                if (index >= 0 && index < field.length) {
                    let target =0;
                    let range=0;
                    if (commandParts[1] === 'Left') {
                        range = index - shootLength;
                        target=range
                        if (range < 0) {
                            while (target < 0) {
                                target = field.length + range;
                                range=target;
                            }
                        }
                        
                    }
                    else if (commandParts[1] === 'Right') {
                        range = index + shootLength
                        target=range;
                        if (range > field.length) {
                            while(target>field.length){
                            target = range - field.length;
                            range=target;
                        }
                        }
                    }
                    if (field[target] >= 5) {
                        points += 5;
                        field[target] -= 5;
                    }
                    else {
                        points += field[target];
                        field[target] = 0;
                    }
                }
                break;
            case 'Reverse':
                field = field.reverse();
                break;

        }
    }
    field = field.join(' - ');
    console.log(field);
    console.log(`Iskren finished the archery tournament with ${points} points!`)

}

solve(
    [
        '20|27|40|50|60',
        'Shoot Left@0@12',
        'Shoot Right@1@0',
        'Shoot Left@6@5',
        'Shoot Right@1@0',
        'Shoot Right@1@0',
        'Shoot Right@1@0',
        'Shoot Right@1@0',
        'Shoot Right@1@0',
        'Shoot Right@1@5',
        'Reverse',
        'Game over',
        ''
    ]

)