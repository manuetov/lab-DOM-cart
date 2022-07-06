// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const quatityDOM = quantity.value
  const priceDOM = price.innerText
  let result = quatityDOM * priceDOM
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = result
  return result 
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProduct = document.querySelectorAll('.product');
  allProduct.forEach((eachProduct) => {
    // console.log(eachProduct)
    updateSubtotal(eachProduct);

  })
  // 

  // ITERATION 3
  const subTotalDOM = document.querySelectorAll('.product .subtotal span')
  let total = 0
  subTotalDOM.forEach((eachSubtotal) => {
    total += parseInt(eachSubtotal.innerText)
    let totalDOM = document.querySelector('#total-value span')
    totalDOM.innerText = total
  })
}
 
// console.log(calculateAll())
// // ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  target.parentNode.removeChild(target); 
  const total = document.querySelector("#total-value span"); // total DOM element
  const subtotal = target.querySelector(".subtotal span"); // subtotal DOM element

  total.innerHTML = total.innerHTML - subtotal.innerHTML; // this is to reduce from the total, the subtotal of the removed element

    
//   // removeBtnDOM.forEach()
  
}

// console.log(removeProduct())
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
