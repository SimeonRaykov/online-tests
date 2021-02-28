function womenParty(items) {
    const womenPartyPrice = items[0];
    items.shift();
    const [loveText, waxRose, keyHolder, caricature, luckSurprise] = items;
   
    const loveTextPrice = 0.6;
    const waxRosePrice = 7.20;
    const keyHolderPrice = 3.6;
    const caricaturePrice = 18.2;
    const luckSurprisePrice = 22;

    const itemsNeededForDiscount = 26;
    const hostingPercent = 0.10;

    let discountPercent = 1;

    const totalPrice = loveText * loveTextPrice + waxRose * waxRosePrice + keyHolder * keyHolderPrice + caricature * caricaturePrice + luckSurprise * luckSurprisePrice;
    const totalQuantity  = loveText + waxRose + keyHolder + caricature + luckSurprise;

    finalPrice = totalPrice;

    if(totalQuantity >= itemsNeededForDiscount){
        discountPercent = 0.35;
        const discount = finalPrice * discountPercent;
        finalPrice -= discount
    }

    const priceForHosting = finalPrice * hostingPercent; 
    finalPrice -= priceForHosting;
    
    if(finalPrice - womenPartyPrice > 0){
        return `Yes! ${(finalPrice - womenPartyPrice).toFixed(2)} lv left.`;
    }
    else{
        return `Not enough money! ${(Math.abs(finalPrice - womenPartyPrice)).toFixed(2)} lv needed.`;
    }
}

console.log(womenParty([40.8, 20, 25, 30, 50, 10]));
console.log(womenParty([320, 8, 2, 5, 5, 1]));