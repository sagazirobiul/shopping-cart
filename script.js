// products Count
const productsCount = (id, isIncrease, price, totalPrice) => {
    const inputValue = document.getElementById(id).value;
    const newInputValue = parseInt(inputValue);
    let countValue = 0;
    if( isIncrease == true){
        countValue = newInputValue + 1;
        console.log(countValue);
    }
    if( isIncrease == false && newInputValue > 0){
        countValue = newInputValue - 1;
    }
    const increasePrice = countValue * price;
    document.getElementById(id).value = countValue;
    document.getElementById(totalPrice).innerText = increasePrice;
    const subtotal = getSubtotal();
    document.getElementById('subtotal').innerText = subtotal;
    const tax = parseFloat(subtotal * 0.1).toFixed(2);
    document.getElementById('tax').innerText = tax;
    const grandtotal = subtotal + parseFloat(tax);
    document.getElementById('grandtotal').innerText = grandtotal;
}


// get subtotal
const getSubtotal = () => {
    const priceInput = parseInt(document.getElementById('phone-input').value);
    const caseInput = parseInt(document.getElementById('case-input').value);
    const sum = priceInput * 1219 + caseInput * 59;
    return sum;
}


// close cartItem
const closeItem = (id) => {
    document.getElementById(id).style.display = 'none';
}