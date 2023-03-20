const flavors = ["Natural", "Coconut", "Almond", "Vanilla"];
const prices = [14.000, 14.000, 16.000, 16.000];
const stocks = [5, 5, 2, 0];

let selectFlavors = "Chocorramo";
const quantity = 0;

switch (selectFlavors) {
  case "Natural":
    console.log("You selected " + selectFlavors + " flavor");
    if (quantity <= stocks[0]) {
      console.log("There is stock");
      console.log("Your total is " + (quantity * prices[0]));
    } else {
      console.log("No stock for this product");
    }
    break;
  case "Coconut":
    console.log("You selected " + selectFlavors + " flavor");
    if (quantity <= stocks[1]) {
      console.log("There is stock");
      console.log("Your total is " + (quantity * prices[1]));
    } else {
      console.log("No stock for this product");
    }
    break;
  case "Almond":
    console.log("You selected " + selectFlavors + " flavor");
    if (quantity <= stocks[2]) {
      console.log("There is stock");
      console.log("Your total is " + (quantity * prices[2]));
    } else {
      console.log("No stock for this product");
    }
    break;
  case "Vanilla":
    console.log("You selected " + selectFlavors + " flavor");
    if (quantity < stocks[3]) {
      console.log("There is stock");
      console.log("Your total is " + (quantity * prices[3]));
    } else {
      console.log("No stock for this product");
    }
    break;

  default:
    console.log("The flavor you selected is not a available");
    break;
}

