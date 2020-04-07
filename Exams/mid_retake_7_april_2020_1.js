function solve(input){
let energy=Number(input.shift());
let distances=input.map(x=>x=Number(x));
let wins=0;
for (let i =0;i<distances.length;i++) {
    if(isNaN(distances[i])){
        console.log(`Won battles: ${wins}. Energy left: ${energy}` )
        break
    }
    if(energy>=distances[i]){
        energy-=distances[i];
        wins++;
        if(wins%3===0){
            energy+=wins
        }
    }else{
        console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
     break}
}


}
solve(
    [ '200', '54', '14', '28', '13', 'End of battle' ]
)