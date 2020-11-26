// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = quantity.valueAsNumber * Number(price.innerHTML); // parseInt(price.innerHTML) also works

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
  console.log(products);

  let sum = 0;
  for (let product of products) {
    sum += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here

  let totalValue = (document.querySelector('#total-value span').innerHTML = sum);

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
  const product = document.querySelectorAll('.create-product input')[0];
  const amount = document.querySelectorAll('.create-product input')[1];
  console.log(product);

  if (product.value.trim() && amount.value > 0) {
    const tableBody = document.querySelector('tbody');

    tableBody.innerHTML += `<tr class="product">
      <td class="name">
        <span>${product.value}</span>
      </td>
      <td class="price">$<span>${Number(amount.value).toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`;

    addRemoveFunctionToBtns();
    product.value = '';
    amount.value = 0;
  }
}

function addRemoveFunctionToBtns() {
  const allRemoveBtn = document.querySelectorAll('.btn.btn-remove');

  allRemoveBtn.forEach(btn => {
    btn.addEventListener('click', event => {
      removeProduct(event);
    });
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButton = document.querySelectorAll('.btn-remove');

  for (const btn of removeButton) {
    btn.addEventListener('click', removeProduct);
  }

  const createProdBtn = document.querySelector('#create');
  createProdBtn.addEventListener('click', createProduct);
});
