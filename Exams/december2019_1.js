function solve(input) {
    let email = input.shift();
    let line = input.shift();
    while (line !== 'Complete') {
        let arr = line.split(' ');
        let command = arr[0].toLowerCase();
        let argument = arr[1];
        switch (command) {
            case "make": console.log(make(argument));
                break;
            case "getdomain": console.log(getDomain(argument));
                break;
            case "getusername":  console.log(getUserName());
                break;
            case "replace": console.log(replace(argument));
                break;
            case "encrypt": console.log(encrypt());
                break;

        }
        line=input.shift();

    }
    function make(arg) {
        let reult = '';
        if (arg === 'Upper')
            email = email.toUpperCase()
        else
            email = email.toLowerCase()
        return email;
    }
    function getDomain(len) {
        let result = email.substr(email.length - len);
        return result
    }
    function getUserName() {
        let result = ''
        let index = email.indexOf('@');
        if (index > 0)
            result = email.substring(0, index);
        else
            result = `The email ${email} doesn't contain the @ symbol.`;
        return result;
    }
    function replace(char) {
        result = email.split(char).join('-')
        return result;
    }
    function encrypt() {
        result = '';
        let ascii = -1;
        for (let i = 0; i < email.length; i++) {
            ascii = email.charCodeAt(i);
            result += ascii + ' ';
        }
        return result;
    }


}
solve([
    'Another@Mail.com',
    'Make Lower',
    'GetUsername',
    'GetDomain 3',
    'Encrypt',
    'Complete'
  ]
)