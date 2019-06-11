const inputAmt = <HTMLInputElement>document.getElementById("inputBillAmt");
const buttons = document.querySelectorAll(".tipBtn");
const billAmt = document.getElementById('spanBillAmt');
const tipPercent = document.getElementById("spanPercent");
const tipAmount = document.getElementById("spanTip");
const total = document.getElementById("spanTotal");


export function runApp() {
    buttons.forEach((btn: HTMLDivElement) => {
        btn.addEventListener('click', Calculate);
    })
}

function Calculate() {
    buttons.forEach((btn: HTMLDivElement) => {
        btn.classList.remove('tipBtnSelected');
    })
    this.classList.add('tipBtnSelected');

    let numBillAmt = parseFloat(inputAmt.value);

    if (numBillAmt > 0) {
        inputAmt.classList.remove('invalid');
        let calculatedTip = parseFloat(this.dataset.value) * parseFloat(inputAmt.value);
        let numTotal = calculatedTip + numBillAmt;

        billAmt.innerText = "$" + inputAmt.value;
        tipPercent.innerText = this.innerText;
        tipAmount.innerText = "$" + calculatedTip.toFixed(2);
        total.innerText = "$" + numTotal.toFixed(2);
    }
    else {
        inputAmt.classList.add('invalid');
        billAmt.innerText = "";
        tipPercent.innerText = "";
        tipAmount.innerText = "";
        total.innerText = "";
    }
}