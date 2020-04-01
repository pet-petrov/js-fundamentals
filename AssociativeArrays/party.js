function solve(input){
    let party=input.indexOf('PARTY');

    function getList(input){
    let guestList={};
        for(let i=0;i<party;i++){
        if(! isNaN(Number(input[i].slice(0,1)))){
            guestList[input[i]]='VIP';
        }else{
            guestList[input[i]]='REG';
        }
    }
           return guestList;
    }

    function getArrived(input){
        let arrivedGuest=[];
        for(let i =party+1;i<input.length;i++){
            arrivedGuest.push(input[i]);
        }
        return arrivedGuest;
    }
    function checkList(list,arrived){
        let missingvip=[];
        let missingreg=[];
        let counter=0;
       for (const key in list) {
           if (arrived.indexOf(key)<0) {
               if(list[key]==="VIP"){
               missingvip.unshift(key) ;
               }
               else{
                missingreg.push(key)
               }
               
           }
       }
       missingvip.sort((a,b)=>a.localeCompare(b))
       missingreg.sort((a,b)=>a.localeCompare(b))
       for(let i=0;i<missingreg.length;i++){
           missingvip.push(missingreg[i]);
       }
       return missingvip;
    }

let guests=getList(input);
let arrived=getArrived(input);
let missed=checkList(guests,arrived);
console.log(missed.length);
console.log(missed.join('\n'));
}

solve(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'11111111',
'PARTY',

'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)
