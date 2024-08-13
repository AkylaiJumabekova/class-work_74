import fs from 'fs';

const fileName = './test.txt'

fs.writeFile(fileName, "Hello, world!", (err) => {
    if (err) {
        console.error(err);
    }

    console.log("file created!");
})