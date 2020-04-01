function solution(input) {
    function takeCompany(input) {
        let companies = new Map();

        for (element of input) {
            let [company, id] = element.split(' -> ');
            if (!companies.has(company)) {
                let ids = new Set();
                ids.add(id);
                companies.set(company, ids);
            }
            else {
                let tempIds = companies.get(company);
                tempIds.add(id);
                companies.set(company, tempIds)
            }

        };
        return companies;
    }
    function formatOutput(companies) {
        let output = "";
        for (const company of companies) {
            output += (company + '\n');
            for (const id of companies.get(company)) {
                output += ('--' + id);

            }
        }
        return output;
    }
    let comp = takeCompany(input);
    let output = formatOutput(comp)
    console.log(output)
}
solution(
    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
    ]

)