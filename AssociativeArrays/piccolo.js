function solve(input){
let parking={};
let carsIn=[];
input.forEach(element => {
    let car=element.split(', ');
    parking[car[1]]=car[0];
});
for(key in parking){
    if(parking[key]==="IN"){
     carsIn.push(key);
    }
}
carsIn.length===0
? console.log('Parking Lot is Empty')
:  console.log(carsIn.sort((a,b)=>a.localeCompare(b)).join('\n'));
}
solve([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA',
'IN, CA1234AA']

);