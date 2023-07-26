const timeInput = document.getElementById("time-input");

timeInput.addEventListener("change", (event) => {
    const val = event.target.value;
    if(val < 1 || val > 60) {
        timeInput.value = 25;
    }
})

const saveOptionsBtn = document.getElementById("save-options-btn");

saveOptionsBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        timer: 0,
        isRunning: false,
        timeInput: timeInput.value,
    })
})

chrome.storage.local.get(["timeInput"], (res) => {
    timeInput.value = res.timeInput;
})