let price = new URLSearchParams(window.location.search).get("price")

document.getElementById('subtotal').innerHTML = price
document.getElementById('total').innerHTML = price
document.getElementById('confirm').innerHTML = `Confirm Payment: ${price} THB`

document.getElementById('confirm').addEventListener('click',function(){
    alert('Your total amount is: ' + price + ' THB')
    location.href = `index.html`
})
document.getElementById('backButton').addEventListener('click',function(){
    location.href = `bag.html`
})