// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = quantity.valueAsNumber * parseInt(price.innerHTML);
  return (product.querySelector('.subtotal span').innerHTML = subTotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');

  let sum = 0;
  for (let product of products) {
    sum += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here

  let totalValue = (document.getElementById('total-value').querySelector('span').innerHTML = sum);

  return totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productListElement = document.querySelector('tbody');
  productListElement.removeChild(target);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButton = document.querySelectorAll('.btn-remove');

  for (const btn of removeButton) {
    btn.addEventListener('click', removeProduct);
  }
});
