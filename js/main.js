document.getElementById('input-field').addEventListener('keyup', function () {
    const inputField = document.getElementById('input-field');
    const input = inputField.value;
    if (input === 'DOM') {
        document.getElementById('btn-apply').removeAttribute('disabled');
    }
    else {
        document.getElementById('btn-apply').setAttribute('disabled', true);
    }
})

document.getElementById('btn-apply').addEventListener('click', function () {
    // console.log('discount btn enabled');
    document.getElementById('btn-discount').removeAttribute('disabled');
})

document.getElementById('btn-discount').addEventListener('click', function () {
    // console.log('get discount');
    const totalPrice = document.getElementById('price');
    const priceString = totalPrice.innerText;
    const price = parseFloat(priceString);
    // console.log(price);

    const discountPrice = price - ((30 / 100) * price);
    // console.log(discountPrice);
    totalPrice.innerText = discountPrice;
})