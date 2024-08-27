// Like button functionality
var heartshapes = document.querySelectorAll(".fa-heart");
heartshapes.forEach(function (shape) {
  let isLiked = false;
  shape.addEventListener("click", function () {
    isLiked = !isLiked;
    shape.style.color = isLiked ? "red" : "black";
    console.log(icon);
  });
});

// Increment button functionality for increasing quantity and total price
var incrementButtons = document.querySelectorAll(".fas.fa-plus-circle");
let total = 0;
var subTotalElement = document.querySelector(".total");

incrementButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Increment individual quantity
    var quantityParagraph = button.nextElementSibling;
    let quantity = parseInt(quantityParagraph.textContent);
    quantity += 1;
    quantityParagraph.textContent = quantity;

    // Increment subTotal
    var priceElement = button.closest(".card").querySelector(".unit-price");
    var itemPrice = parseInt(priceElement.textContent.slice(0, -2)); // Correct slicing to get the numeric part
    total += itemPrice;
    subTotalElement.textContent = "$" + total.toString();
  });
});

// Decrement button functionality for decreasing quantity and total price
var decrementButtons = document.querySelectorAll(".fas.fa-minus-circle");

decrementButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Decrement individual quantity
    var quantityParagraph = button.previousElementSibling;
    let quantity = parseInt(quantityParagraph.textContent);

    if (quantity > 0) {
      quantity -= 1;
      quantityParagraph.textContent = quantity;

      // Decrement subTotal
      var priceElement = button.closest(".card").querySelector(".unit-price");
      var itemPrice = parseInt(priceElement.textContent.slice(0, -2)); // Correct slicing to get the numeric part

      if (total >= itemPrice) {
        total -= itemPrice;
        subTotalElement.textContent = "$" + total.toString();
      }
    }
  });
});

// Remove item functionality
var removeButtons = document.querySelectorAll(".fa-trash-alt");
removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var itemContainer = button.closest(".card-body"); // Adjust to match your HTML structure
    var itemQuantityElement = itemContainer.querySelector(".quantity");
    var itemPriceElement = itemContainer.querySelector(".unit-price");

    var itemQuantity = parseInt(itemQuantityElement.textContent);
    var itemPrice = parseInt(itemPriceElement.textContent.slice(0, -2)); // Correct slicing to get the numeric part

    total = total - itemQuantity * itemPrice;
    subTotalElement.textContent = "$" + total.toString();

    itemContainer.remove(); // Remove the item container
  });
});
