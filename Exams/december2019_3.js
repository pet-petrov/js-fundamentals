function solve(input) {
    input.pop()
    let count = 0
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
                deleteUser(user)
                break;

        }
    }
    function addUser(userName) {
        if (emails.hasOwnProperty(userName)) {
            console.log(`${userName} is already registered`);
        }
        else {
            emails[userName] = [];
            count++;
        }
    }

    function sendMail(userName, mail) {
        emails[userName].push(mail);

    }

    function deleteUser(userName) {
        if (emails[userName]) {
            delete emails[userName];
            count--;
        }
        else {
            console.log(`${userName} not found!`)
        }
    }
    let usersArray = Object.entries(emails);
    let sortedUsers = usersArray.sort(sortUsers);

    function sortUsers(userA, userB) {
        let userNameA = userA[0];
        let emailsA = userA[1];
        let lengthA = emailsA.length
        let userNameB = userB[0];
        let emailsB = userB[1];
        let lengthB = emailsB.length
        if (lengthA == lengthB) {
            return userNameA.localeCompare(userNameB);
        }
        else {
            return lengthB - lengthA;
        }
    }
    function output(users) {

        for (const user of users) {
            console.log(user[0]);
            let emails = user[1];
            for (let i = 0; i < emails.length; i++) {
                console.log(` - ${emails[i]}`)
            }
        }

    }
    console.log(`Users count: ${count}`);


    output(sortedUsers)
}

solve(
    [
        "Add->George",
        "Send->George->Hello World",
        "Add->Mike",
        "Send->George->Your loan is overdue",
        "Add->Mike",
       " Send->Mike->Hello, do you want to meet up tomorrow?",
        "Delete->Peter",
        "Send->George->I'm busy",
        "Send->Mike->Another random test mail",
        "Delete->George",
        "Statistics"

    ]

)