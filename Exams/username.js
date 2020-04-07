function solve(input) {
    let username = input.shift();
    input.pop()

    for (const line of input) {
        let [command, arg1, arg2] = line.split(' ');
        switch (command) {
            case 'Case':
                if (arg1 === 'lower') {
                    username = username.toLowerCase();
                } else if (arg1 === 'upper') {
                    username = username.toUpperCase();
                }
                console.log(username)
                break;
            case 'Reverse':
                reverse(+arg1, +arg2);
                break;
            case 'Cut':
                cutSubString(arg1);
                console.log(username)
                break;
            case 'Replace':
                username=username.split(arg1).join('*');
                console.log(username);

                break;
            case 'Check':
                if(username.indexOf(arg1)<0){
                    console.log(`Your username must contain ${arg1}.`)
                }
                else{
                    console.log('Valid')
                }
                break;
            default:
                break;
        }
    }
    function reverse(startIndex, endIndex) {
        if ((startIndex >= 0 && startIndex < username.length) &&
            (endIndex >= 0 && endIndex < username.length) &&
            (endIndex >= startIndex)) {
            let subString = username.substring(startIndex, endIndex + 1).split('');
            let reversedStr = subString.reverse().join('');
            console.log(reversedStr) ;
        }

    }

    function cutSubString(subStr) {
        let index = username.indexOf(subStr);
        if (index < 0) {
            console.log(`The word ${username} doesn't contain ${subStr}.`)
        }
        else {
            username = username.split(subStr).join('');
        }
    }

   
}

solve(
    [ 'ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Check !', 'Sign up' ]
)