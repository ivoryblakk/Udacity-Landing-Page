let body = document.getElementsByTagName('body');
let p = document.createElement("p")
let firstDiv = document.getElementById('firstDiv')
let sportsList = document.getElementById('sportsList')
const sportTypes = ['Basketball', 'Tennis', 'Baseball', 'Soccer', 'Football']
let liList;

for( let index = 0; index < sportTypes.length; index++){
    sportsList.innerHTML += '<li>' +  sportTypes[index] +'</li>'
}



















