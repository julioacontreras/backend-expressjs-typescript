const fs = require('fs');

export function loadJson(filepath:string) {
    try {
        const rawdata = fs.readFileSync(filepath);
        return JSON.parse(rawdata);       
    } catch (err) {
        return null
    }
}
