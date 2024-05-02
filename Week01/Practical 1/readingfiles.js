const fs = require ('node:fs')

fs.readFile('C:/Users/ngkai/.vscode/BED-Practicals/test.txt', 'utf-8', (err,data) =>{
    if(err){
        console.error(err);
        return;
    }
    
    console.log(data);
})