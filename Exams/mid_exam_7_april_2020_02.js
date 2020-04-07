function solve(input) {
    let target = input.shift().split(' ');
    target = target.map(x => x = Number(x));
    input.pop()
    let shoots = input.map(x => x = Number(x))
    let count=0;
    for (const shoot of shoots) {
        if(shoot<0 || shoot>target.length-1){
            continue;
        }
        let aimed = target[shoot]
        if (aimed > -1) {
            for (let i = 0; i < shoot; i++) {
                if(target[i]<0){
                    continue
                }
                target[i] <= aimed
                    ? target[i] += aimed
                    : target[i] -= aimed
            }
            for (let i = shoot + 1; i < target.length; i++) {
                if(target[i]<0){
                    continue
                }
                target[i] <= aimed
                    ? target[i] += aimed
                    : target[i] -= aimed
            }
            target[shoot]=-1;
            count++;
        }
    }
    target=target.join(' ');
    console.log(`Shot targets: ${count} -> ${target}`)
}

solve(
    [ '30 30 12 60 54 66', '5', '2', '4', '0', 'End' ]
)