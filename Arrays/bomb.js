function solve(sequence,bomb){
let field=sequence.splice(0);
let bombPosition=field.indexOf(bomb[0])
let startIndex=-1;
let detonatedField=0;
while(bombPosition>=0){
    bombPosition-bomb[1]<0 ? startIndex= 0: startIndex=bombPosition-bomb[1];
    detonatedField=bombPosition-startIndex+bomb[1]+1;
    field.splice(startIndex,detonatedField);
    bombPosition=field.indexOf(bomb[0])

}
console.log(field.reduce((a,b)=>a+b,0));
}
solve([1, 7, 7, 1, 2, 3],
    [1, 7]
    
    
    
    )