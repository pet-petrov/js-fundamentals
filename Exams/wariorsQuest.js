function solve(input) {
    let stringForDecipherment = input.shift();
    input.pop();
    let commands = input;
    for (const line of commands) {
        let [command, arg1, arg2, arg3] = line.split(' ');

        switch (command) {
            case "GladiatorStance":
                stringForDecipherment = stringForDecipherment.toUpperCase();
                console.log(stringForDecipherment);
                break;
            case "DefensiveStance":
                stringForDecipherment = stringForDecipherment.toLowerCase();
                console.log(stringForDecipherment);
                break;
            case "Dispel":
                if (arg1 >= 0 && arg1 < stringForDecipherment.length) {
                    stringForDecipherment = dispel(stringForDecipherment, arg1, arg2);
                    console.log('Success!')
                }
                else {
                    console.log('Dispel too weak.');
                }
                break;
            case "Target":
                stringForDecipherment = target(stringForDecipherment, arg1, arg2, arg3);
                console.log(stringForDecipherment);
                break;
            default:
                console.log("Command doesn't exist!")
                break;
        }
    }

    function dispel(str, index, char) {
        index = Number(index)
        let newString1 = str.substring(0, index);
        let newString2 = str.substring(index + 1);
        let newString = newString1 + char + newString2;
        return newString;
    }

    function target(str, commandType, subStr1, subStr2) {
        let result = str;
        while (result.indexOf(subStr1) >= 0) {
            if (commandType === 'Change') {
                result = result.replace(subStr1, subStr2);
            }
            else if(commandType==="Remove"){
                result = result.split(subStr1).join('');
            }
        }
        return result
    }

}


solve(
    [
        'DYN4MICNIC',
        'Target Remove NIC',
        'Dispel 3 A',
        'DefensiveStance',
        'Target Change d D',
        'target change D d',
        'For Azeroth'
    ]

) 