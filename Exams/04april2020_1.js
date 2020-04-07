function solve(input) {
    let rawKey = input.shift();
    input.pop();
    for (const line of input) {
        let [command, arg1, arg2, arg3] = line.split('>>>');
        switch (command) {
            case 'Contains':
                if (rawKey.indexOf(arg1) < 0) {
                    console.log('Substring not found!');
                }
                else {
                    console.log(`${rawKey} contains ${arg1}.`);
                }
                break;
            case 'Flip':
                flipCommand(arg1, arg2, arg3)
                console.log(rawKey);
                break;
            case 'Slice':
                sliceCommand(arg1, arg2);
                console.log(rawKey)
                break;
        }

    }

    function flipCommand(comm, start, end) {
       
            let begining = rawKey.slice(0, +start);
            let mid = rawKey.slice(+start, +end);
            let final = rawKey.slice(+end);
            if (comm === "Upper") {
                mid = mid.toUpperCase()
            } else if (comm === "Lower") {
                mid = mid.toLowerCase();
            }
            rawKey = begining + mid + final;
       
    }

    function sliceCommand(start, end) {
       
            let begining = rawKey.slice(0, +start);
            let mid = rawKey.slice(+start, +end);
            let final = rawKey.slice(+end);
            rawKey = begining + final;
      
    }
    console.log(`Your activation key is: ${rawKey}`)
}

solve(
    [
        'a34softsf5FTuni2020rockz4A',
        'Slice>>>0>>>26',
        'Contains>>>-rock',
        'Contains>>>-uni-',
        'Contains>>>-rocks',
        'Flip>>>Upper>>>0>>>26',
        'Flip>>>Lower>>>0>>>26',
        'Generate'
    ]


)