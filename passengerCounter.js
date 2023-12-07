let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let checkEl = document.getElementById("check-el");
let listEl = document.getElementById("list");
let closeEl = document.getElementById("close");
function increment(){
    count += 1;
    countEl.textContent = count;
}
var passengerArray = [];
let x = 0;
let y = 0;
function save(){
    passengerArray[x] = count;
    //let countStr = count + " - ";
    //saveEl.textContent += countStr;
    let w = passengerArray.length;
    if(w<4){
        saveEl.textContent += passengerArray[w-1] + " - ";
    } else{
        saveEl.textContent = "Previous entries: " + passengerArray[w-4] + " - " + passengerArray[w-3] + " - " + passengerArray[w-2] + " - " + passengerArray[w-1];
    }
    x += 1;
    w += 1;
    countEl.textContent = 0;
    count = 0;
    console.log(passengerArray.join("-"));
    checkEl.style.visibility = "visible";
}
function check(){
    listEl.style.visibility = "visible";
    closeEl.style.visibility = "visible";
    listEl.textContent = passengerArray.join(" - ");
}
function closeList(){
    listEl.style.visibility = "hidden";
    closeEl.style.visibility = "hidden";
}

