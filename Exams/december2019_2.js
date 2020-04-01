function solve(input){
let pattern=/U\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[A-Za-z]{5,}\d+)P@\$/
input.shift();
let count=0;
let registrations=input;
for (const line of registrations) {
    if(line.trim().length<1){
        continue;
    }
    let match=pattern.exec(line);
    if(match){
        count++;
        console.log('Registration was successful');
        console.log(`Username: ${match.groups.username}, Password: ${match.groups.password}`);
    }
    else{
        console.log('Invalid username or password');
     }
}
console.log(`Successful registrations: ${count}`);
}

solve(
    [ '2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412' ]
)