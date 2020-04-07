function solve(input){
let cost=input[0]
let months=Number(input[1]);
let saved=cost*0.25;
let money=0;
let spent=0;
for(let i=2;i<=months;i++){ 
    if(i%2!==0)
    {spent=saved*0.16;
        saved-=spent;
    }
    if(i%4==0){
        saved+=saved*0.25;
    }

    saved+=cost*0.25; 

   

}
money=saved-cost;
if(money>=0){
    console.log(`Bravo! You can go to Disneyland and you will have ${money.toFixed(2)}lv. for souvenirs.`)
}
else{
    console.log(`Sorry. You need ${Math.abs(money).toFixed(2)}lv. more.`)
}
}


solve(
    [ '3265',
    '3' ]
)