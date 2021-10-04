import fs from 'fs';


export default function jsonToCvs(json) {
    fs.open('persons.csv', 'w', (err) => {
        if(err) throw err;
        console.log('File data.csv created')
    }) 
    let string = (json)
    console.log(string.length)
    for(let i = 0; i < string.length; ++i) {
        let str = '"' + string[i].id + '","' +  string[i].first_name + '","' +  string[i].last_name + '","' +  string[i].email + '"\n';
        fs.appendFile('persons.csv', str, err => {
            if(err) throw err
            console.log("Data added " + str)
        })
    }
}