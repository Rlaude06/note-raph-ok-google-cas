const pronote = require('pronote-api');
const mysql = require('mysql');
const request = require('request');
const fs = require('fs');

let file1 = fs.readFileSync('json/pronote-account.json');
let account = JSON.parse(file1);
let file2 = fs.readFileSync('json/matière.json');
let mat = JSON.parse(file2);
let file3 = fs.readFileSync('json/languages.json');
let lang = JSON.parse(file3);
let file4 = fs.readFileSync('json/edt.json');
let edt = JSON.parse(file4);

//SET SESSION Values
const url = account.url;
const username = account.username;
const password = account.password;
const cas = account.cas;