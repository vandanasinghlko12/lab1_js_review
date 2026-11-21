// Task 1
function formatFullName(firstName, lastName) {
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  if (firstName === "" || lastName === "") {
    console.log("Invalid name input");
  }
  return lastName + "," + firstName;
}
console.log(formatFullName("Vandana", ""));

// Task 2

function calculateTotalCost(price, quantity, taxRate) {
  if (
    typeof price != "number" ||
    typeof quantity != "number" ||
    typeof taxRate != "number"
  ) {
    return "invalid input";
  }

  return price * quantity * (1 + taxRate);
}

let total = calculateTotalCost(50, 1, 2);

console.log(total);

// Task 3

function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed == true) {
    console.log("You are eligible");
    return "you are eligible";
  } else if (age > 18 && isEmployed == false) {
    console.log("you are conditionally eligible");
    return "you are conditionally eligible";
  } else {
    console.log("you are not eligible");
    return "you are not eligible";
  }
}

checkEligibility(22, false);

// Task 4

//  function calculateTotalCost(price,quantity,taxRate,discount){
//       if(typeof price != 'number' || typeof quantity != 'number' || typeof taxRate != 'number' || typeof discount !='number' )
//         {

//            return "invalid input";
//        }
//        let subtotal=(price * quantity)-1;
//         if (discount ){
//             return  subtotal * (1 + taxRate);
//         }
//        else{
//              return (price * quantity) * (1 + taxRate)
//        }

//  }

//  let total=calculateTotalCost(50,"1",2,3);

//  console.log(total);
