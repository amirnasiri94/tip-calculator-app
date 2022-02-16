// Elements
const billInput = document.querySelector("#bill");
const buttons = document.querySelectorAll(".btn");
const customInput = document.querySelector("#custom");
const peopleInput = document.querySelector("#people");
const peopleLable = document.querySelector(".people-lable");
const amount = document.querySelector("#amount");
const total = document.querySelector("#total");
const reset = document.querySelector(".btn-reset");

// Defult Value
let bill = 0;
let percent = 5;
let people = 1;


// Result Calculator
function calculatResult(bill,percent,people) {
    const calculAtamount = (bill*(percent/100))/people;
    const calculatTotal = (bill*(percent/100)+bill)/people;
    amount.textContent = `$${calculAtamount.toFixed(2)}`;
    total.textContent = `$${calculatTotal.toFixed(2)}`;
}

// Events
billInput.addEventListener("input", () => {
    reset.disabled = false;
    bill = Number(billInput.value);
    calculatResult(bill,percent,people);
});

for (const elem of buttons) {
    elem.addEventListener("click", () => {
        for (const elem of buttons) {
            elem.classList.remove("btn--select");
        }
        elem.classList.add("btn--select");
        customInput.value = "";
        switch (elem) {
            case buttons[0]:
                percent = 5;
                break;
            case buttons[1]:
                percent = 10;
                break;
            case buttons[2]:
                percent = 15;
                break;
            case buttons[3]:
                percent = 25;
                break;
            case buttons[4]:
                percent = 50;
                break;
            default:
                break;
        }
        calculatResult(bill,percent,people);
    });
}

customInput.addEventListener("input", () => {
    reset.disabled = false;
    for (const elem of buttons) {
        elem.classList.remove("btn--select");
    }
    percent = Number(customInput.value);
    calculatResult(bill,percent,people);
});

peopleInput.addEventListener("input", () => {
    reset.disabled = false;
    if(peopleInput.value > 0) {
        peopleLable.classList.remove("error");
        people = Number(peopleInput.value);
    } else {
        peopleLable.classList.add("error");
    }
    calculatResult(bill,percent,people);
});

reset.addEventListener("click", () => {
    reset.disabled = true;
    bill = 0;
    percent = 5;
    people = 1;
    calculatResult(bill,percent,people);
    billInput.value = "";
    for (const elem of buttons) {
        elem.classList.remove("btn--select");
    }
    buttons[0].classList.add("btn--select");
    customInput.value = "";
    peopleInput.value = "";
    peopleLable.classList.remove("error");
});