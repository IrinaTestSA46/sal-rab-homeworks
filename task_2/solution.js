function calcShipping(sum, min, shipping){
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    let shippingSum; //задали переменную
   
    if(productsSum == 0 || productsSum >= freeShippingMinSum); // если сумма в корзине равна 0 или больше или равна мин сумме для бесплатной доставки, то сумма доставки 0.
       shippingSum = 0;

    if(productsSum > 0 && productsSum < freeShippingMinSum){
        shippingSum = shippingPrice;
    }else
       shippingSum = 0;

    return shippingSum;
}



function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах

    let discountSum; //задали переменную

    if (productsSum >= discountMinSum){
        discountSum = productsSum / 100 * discountPart;
    }else{
        discountSum = 0;
    }

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    let totalSum = productsSum;
        totalSum = (totalSum - discountSum);

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
        totalSum = (totalSum + shippingSum);
    
    let freeShipping;
        freeShipping = !shippingSum;

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
