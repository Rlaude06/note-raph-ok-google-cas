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
    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }
    var from = new Date;
    var to = addDays(from, 3);
    const session = await pronote.login(url, username, password, cas);
    const marks = await session.marks();


let mat = [
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0},
    {"name": "suppr", "id": 0}
];
a=0;
while (a<marks.subjects.length) {
    mat[a].name = marks.subjects[a].name;
    mat[a].id = a;
    a=a+1;
}
  console.log(mat);
  let matiere = JSON.stringify(mat)
  fs.writeFileSync('json/matière.json', matiere);

    return;
}

main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
});
