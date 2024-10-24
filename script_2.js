const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of rows ', (rows) => {
    for(let i = 1; i <= rows; i++) {
        let pattern = '';
        for(let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
    rl.close();
});