let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");



function convertToSeconds(){
    if(hoursInputEl.value==="" && minutesInputEl.value===""){
        errorMsgEl.textContent = "Please Enter a Valid Minutes and Seconds";
        errorMsgEl.style.color = 'White';
        errorMsgEl.style.fontWeight = "bold";
    }
    else if(hoursInputEl.value==="" || minutesInputEl.value===""){
        errorMsgEl.textContent = "Please Enter a Valid Minutes/Seconds";
        errorMsgEl.style.color = 'White';
        errorMsgEl.style.fontWeight = "bold";  
    }
    else{
        let numberofseconds = (hoursInputEl.value*60*60)+(minutesInputEl.value*60);
        timeInSecondsEl.textContent = numberofseconds+"sec";
        timeInSecondsEl.classList.add("timeInSeconds")
    }
}

convertBtnEl.addEventListener("click", convertToSeconds);