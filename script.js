let time = new Date();

time.setFullYear(2020)
time.setDate(2)

time.setDate(time.getDate() + 243);
time.setDate(time.getMonth() + 1);
time.setHours(time.getHours() + 12)

let year = time.getFullYear();
let month = time.getMonth();
let day = time.getDate();
let weekday = time.getDay();

let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let mili = time.getMilliseconds();

if(minutes <10){
    minutes ='0' + minutes
}

let hora = hours+ ":"+minutes


console.log(year, month, day)
console.log(hours, minutes, seconds)