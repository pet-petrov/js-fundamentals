function solution(input) {
    function takeCompany(input) {
        let companies = {};

        input.forEach(element => {
            
       
       // (element of input) {
            let [company, id] = element.split(' -> ');
            if (!companies[company]) {
                let ids = new Set();
                ids.add(id);
                companies[company]= ids;
            }
            else {
                let tempIds = companies[company];
                tempIds.add(id);
                companies[company]= tempIds
            }
        });
      //  };
        return companies;
    }
    function sortObj(obj){
        let sorted={};
        let sortedKeys=Object.keys(obj).sort((a,b)=>a.localeCompare(b));
        sortedKeys.forEach(key => {
            sorted[key]=obj[key];
        });
        return sorted;
    }
    function formatOutput(companies) {
        let output = "";
    
        for ( company in companies) {
            output += (company + '\n');
            for ( id of companies[company]) {
                output += ('-- ' + id) +'\n';

           } 
     
        }
        return output;
    }
    let comp = takeCompany(input);
    let sorted=sortObj(comp)
    let output = formatOutput(sorted);
    console.log(output)
}
solution(
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
        ]
        )