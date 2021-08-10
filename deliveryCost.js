function deliveryCost(productQuantity) {
  // our Delivery Rate
  const primaryDeliveryRate = 100;
  const secondaryDeliveryRate = 80;
  const specialDeliveryRate = 50;
  // warning for user
  if (productQuantity <= 0) {
    return "invalid input";
  }
  // total delivery costing condition
  if (productQuantity <= 100) {
    const costs = productQuantity * primaryDeliveryRate;
    return costs;
  }
  //If the user buy 200 to 300 products, you will get a commission of 20 Taka. that means delivery charge now 80 Taka
  else if (productQuantity <= 200) {
    const primaryDelivery = 100 * primaryDeliveryRate;
    const restCosts = productQuantity - 100;
    const secondaryDelivery = restCosts * secondaryDeliveryRate;
    const totalCost = primaryDelivery + secondaryDelivery;
    return totalCost;
  }
  //If the user buy 300 to unlimited products, you will get a special commission of 50 Taka. that means delivery charge now 50 Taka
  else {
    const primaryDelivery = 100 * primaryDeliveryRate;
    const secondaryDelivery = 100 * secondaryDeliveryRate;
    const restCosts = productQuantity - 200;
    const specialDelivery = restCosts * specialDeliveryRate;
    // total buyers costing
    const totalCost = primaryDelivery + secondaryDelivery + specialDelivery;
    return totalCost;
  }
}
const totalDeliveryItem = deliveryCost(2);
console.log(totalDeliveryItem);
