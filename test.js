const pronote = require('pronote-api');
const fs = require('fs');

let file1 = fs.readFileSync('json/pronote-account.json');
let account = JSON.parse(file1);
// Exemple
const url = account.url;
const username = account.username;
const password = account.password;
const cas = account.cas;
async function main()
{
    const session = await pronote.login(url, username, password, cas);
    const user = session.user;
    console.log("Bravo vos codes marchent "+user.name)
}
main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
});
