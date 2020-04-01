function solve(input){
    function takeResource(arr){
        let resourceObj={}
        for(let i=0;i<arr.length-1;i+=2 ){
            if (!resourceObj.hasOwnProperty(arr[i])){
                resourceObj[arr[i]]=Number(arr[i+1]);
            }
            else{
                resourceObj[arr[i]]+=Number(arr[i+1]);
            }
        }
        return resourceObj;
    }
    function   formatOutput(obj){
        let outputStr="";
       for ( key in obj) {
           outputStr += key + ' -> '+obj[key]+'\n';
       } 
       return outputStr;
    }
    let objResource=takeResource(input);
    let output=formatOutput(objResource);
    console.log(output);
}
solve(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
        ]
        
        )