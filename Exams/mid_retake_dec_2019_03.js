function solve(input){
let shelf=input.shift().split('&');
let commandList=input;
for (const line of commandList) {
    let [command,arg1,arg2]=line.split(' | ');
    if(command==='Done') break;
    let parts=command.split(' ');
    let part = parts[0];
    switch (part) {
        case 'Add':
            if(shelf.indexOf(arg1)<0){
            shelf.unshift(arg1)
            }
            break;
            case 'Take':
                if(shelf.indexOf(arg1)>=0){
                    shelf.splice(shelf.indexOf(arg1),1);
                }
            break;
            case 'Swap':
                let index1=shelf.indexOf(arg1);
                let index2=shelf.indexOf(arg2);
                if(index1>=0 && index2>=0){
                let temp=shelf[index1];
                shelf[index1]=shelf[index2];
                shelf[index2]=temp;
                }
            
            break;
            case 'Insert':
            shelf.push(arg1)
            break;
            case 'Check':
                arg1=Number(arg1)
                if(arg1>0 && arg1<shelf.length){
                    console.log(shelf[arg1]);
                }
            break;
 
    }
}
let books=shelf.join(', ');
console.log(books)
}
solve(
    [
        'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
        'Add Book | The Odyssey',
        'Take Book | Don Quixote',
        "Insert Book | Alice's Adventures in Wonderland",
        'Check Book | 3',
        'Done',
        '',
        '',
        ''
      ]
      
)