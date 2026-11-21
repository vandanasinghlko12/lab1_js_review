// Task 4

function calculateTotalCost(price, quantity, taxRate, discount) {
  if (
    typeof price != "number" ||
    typeof quantity != "number" ||
    typeof taxRate != "number" ||
    typeof discount != "number"
  ) {
    return "invalid input";
  }
  let subtotal = price * quantity - 1;
  if (discount) {
    return subtotal * (1 + taxRate);
  } else {
    return price * quantity * (1 + taxRate);
  }
}

let total = calculateTotalCost(50, 1, 2, 3);

console.log(total);
