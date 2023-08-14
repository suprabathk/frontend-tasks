const handleSubmit = (e) => {
    e.preventDefault();
    const amount = document.getElementById("amount").value;
    const tipPercentage = document.getElementById("tip").value;
    const tip = tipPercentage / 100 * amount;
    if (amount < 0 || tipPercentage < 0) {
        return document.getElementById("result").innerHTML = "Amount or Tip cannot be negative"
    }
    if (amount && tipPercentage) {
        document.getElementById("result").innerHTML = `The total bill is ${Number.parseFloat(amount) + Number.parseFloat(tip)}`
    } else {
        if (!amount && !tipPercentage) {
            return document.getElementById("result").innerHTML = "Please enter Amount and Tip"
        }
        if (!amount) {
            return document.getElementById("result").innerHTML = "Please enter Amount"
        }
        if (!tipPercentage) {
            return document.getElementById("result").innerHTML = "Please enter Tip"
        }
    }
}

document.getElementById("my-form").addEventListener("submit", handleSubmit);