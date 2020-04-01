function solve(x,y,z){
    function sum(a,b){
        return a+b;
    }
    function subtract(a,b){
        return a-b;
    }
    let s=sum(x,y);
    console.log(subtract(s,z));
}
solve(42,
    58,
    100
    );