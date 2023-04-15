const fetch = require("node-fetch")
const fs = require('fs')

async function main(){

    try {
        const data = await fetch('https://check.torproject.org/torbulkexitlist')
        const text = await data.text()

        fs.writeFileSync('ips.txt', text)
    } catch (error) {
        
    }
    
}


main()