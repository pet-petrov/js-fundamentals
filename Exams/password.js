function solve(input){
    let pattern=/(\S+)\>(?<password>\d{3}\|[a-z]{3}\|[A-Z]{3}\|[^<>]{3})\<(\1)/
    input.shift();
    for (const line of input) {
       let match=pattern.exec(line);
        if(match){
            let pass=match.groups.password;
            pass=pass.split('|').join('');
            console.log(`Password: ${pass}`);
        }
        else{
            console.log('Try another password!');
        }
    }
}
solve(
    [
        '5',
        'aa>111|mqu|BAU|mqu<aa',
        '()>111!aaa!AAA!^&*<()',
        'o>088|abc|AAA|***<o',
        'asd>asd|asd|ASD|asd<asd',
        '*>088|zzzz|ZzZ|123<*'
      ]
      
)