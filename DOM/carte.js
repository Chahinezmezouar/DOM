


const incrementButtons = document.querySelectorAll('.increment');


const decrementButtons = document.querySelectorAll('.decrement');


const deleteButtons = document.querySelectorAll('.delete');


const likeButtons = document.querySelectorAll('.like');

const totalPriceElement = document.getElementById('total-price');


let totalPrice = 0;


function updateTotalPrice() {
  totalPrice = 0;
  const quantityValues = document.querySelectorAll('.quantity-value');
  quantityValues.forEach(function (quantityValue, index) {
    const item = quantityValue.parentNode.parentNode;
    const itemName = item.querySelector('.item-name').textContent;
    const itemPrice = getItemPrice(itemName);
    const quantity = parseInt(quantityValue.textContent);
    totalPrice += itemPrice * quantity;
  });
  totalPriceElement.textContent = 'Total Price: $' + totalPrice;
}


function getItemPrice(itemName) {

  return 10;
}


incrementButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const quantityValue = button.parentNode.querySelector('.quantity-value');
    let quantity = parseInt(quantityValue.textContent);
    quantity += 1;
    quantityValue.textContent = quantity;
    updateTotalPrice();
  });
});


decrementButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const quantityValue = button.parentNode.querySelector('.quantity-value');
    let quantity = parseInt(quantityValue.textContent);
    if (quantity > 1) {
      quantity -= 1;
      quantityValue.textContent = quantity;
      updateTotalPrice();
    }
  });
});


deleteButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const item = button.parentNode;
    item.remove();
    updateTotalPrice();
  });
});


likeButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    button.classList.toggle('liked');
  });
});
