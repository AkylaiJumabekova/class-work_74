import {promises as fs} from 'fs';
const fileName = './test.txt'

const run = async () => {
    try {
        await fs.writeFile(fileName, "s!")
        console.log("Successfully written!")
    } catch (e) {
        console.error(e)
    }
}

run().catch(console.error)