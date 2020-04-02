function solve(input) {
    input.shift();
    let pattern = /\|(?<name>[A-Z]{3,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g

    for (const line of input) {
        let match = pattern.exec(line);

        if (match) {
            let bossName = match.groups.name
            let title=match.groups.title
            let strength = bossName.length;
            let armour = title.length;
            console.log(`${bossName}, The ${title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armour: ${armour}`);
        }
        else {
            console.log('Access denied!');
        }

    }
}
solve(
    [
        '3',
        '|PETER|:#H1gh Overseer#',
        '|IVAN|:#Master detective#',
        '|KARL|: #Marketing lead#'
      ]
)