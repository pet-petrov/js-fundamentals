function solve(input) {

    let citiesArr = input.slice(0, input.indexOf('Sail'))
    let commands = input.slice(input.indexOf('Sail') + 1, input.indexOf('End'))
    let cities = {}
    for (const element of citiesArr) {
        let [city, population, gold] = element.split('||');
        let prop = [Number(population), Number(gold)]
        if (!cities.hasOwnProperty(city)) {
            cities[city] = prop;
        }
        else {
            cities[city][0] += prop[0]
            cities[city][1] += prop[1]
        }
    }
    for (const element of commands) {

        let [command, town, arg1, arg2] = element.split('=>');
        switch (command) {
            case 'Plunder':
                plunder(town, +arg1, +arg2);

                break;
            case 'Prosper':
                prosper(town, +arg1)

                break;
            default:
                break;
        }
    }

    function plunder(city, people, gold) {
        let killed = people;
        let stolen = gold;
        if (cities[city][0] > people) {
            cities[city][0] -= people;
        }
        else {
            killed = cities[city][0]
            cities[city][0] = 0

        }
        if (cities[city][1] > gold) {
            cities[city][1] -= gold
        }
        else {
            stolen = cities[city][1];
            cities[city][1] = 0;
        }

        console.log(`${city} plundered! ${stolen} gold stolen, ${killed} citizens killed.`)
        if (cities[city][0] <= 0 || cities[city][1] <= 0) {
            delete cities[city];
            console.log(`${city} has been wiped off the map!`);
        }

    }
    function prosper(city, gold) {
        if(cities.hasOwnProperty(city)){
        if (gold < 0) {
            console.log('Gold added cannot be a negative number!')
        }
        else {
            cities[city][1] += gold;
            console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city][1]} gold.`)
        }
    }
    }
    let townArray = Object.entries(cities);
    let sortedTown = townArray.sort(sortTown);
    function sortTown(t1, t2) {
        let gold1 = t1[1][1];
        let gold2 = t2[1][1];
        let name1 = t1[0];
        let name2 = t2[0];
        if (gold1 === gold2) {
            return name1.localeCompare(name2);
        }
        else {
            return gold2 - gold1;
        }
    }

    if (townArray.length > 0) {
        console.log(`Ahoy, Captain! There are ${sortedTown.length} wealthy settlements to go to:`)
        for (const element of sortedTown) {
            console.log(`${element[0]} -> Population: ${element[1][0]} citizens, Gold: ${element[1][1]} kg`)
        }
    }
    else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

solve(
    [
        'Tortuga||345000||1250',
        'Anto Domingo||240000||1100',
        'Havana||410000||1100',
        'Sail',
        'Plunder=>Tortuga=>75000=>380',
        'Prosper=>Santo Domingo=>180',
        'End'
    ]

)