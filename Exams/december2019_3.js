function solve(input) {
    input.pop()
    let emails = {}
    for (const line of input) {
        let [command, user, message] = line.split('->');
        switch (command) {
            case 'Add':
                addUser(user);
                break;
            case 'Send':
                sendMail(user, message)
                break;
            case 'Delete':

                break;

        }
    }
    function addUser(userName) {
        if (emails.hasOwnProperty(userName)) {
            console.log(`"${userName} is already registered`);
        }
        else {
            emails[userName] = [];
        }
        console.log(emails);
        
    }

    function sendMail(userName, mail) {
        emails[userName].push(mail);
    }

    function deleteUser(userName) {
        if (emails[userName]) {
            delete emails[username];
        }
        else {
            console.log(`${userName} not found!`)
        }
    }
    let usersArray=Object.entries(emails);
    let sortedUsers=usersArray.sort(sortUsers);

    function sortUsers(userA,userB){
       let userNameA=userA[0];
       let emailsA=userA[1];
       let lengthA=emailsA.length
       let userNameB=userB[0];
       let emailsB=userB[1];
       let lengthB=emailsB.length
       if(lengthA==lengthB){
           return userNameA.localeCompare(userNameB);
       }
       else{
           return lengthB-lengthA;
       }
    }
     console.log(sortedUsers);
}

solve(
    [
        'Add->Mike',
        'Add->George',
        'Send->George->Hello World',
        'Send->George->Some random test mail',
        'Send->Mike->Hello, do you want to meet up tomorrow?',
        'Send->George->It would be a pleasure',
        'Send->Mike->Another random test mail',
        'Send->Mike->Hello, do you want to meet up tomorrow?',
        'Statistics'
    ]

)