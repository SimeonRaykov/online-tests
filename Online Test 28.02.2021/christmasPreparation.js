function christmasPreparation(items){
    const [paper,fabrics,glue, discount] = items;
    const paperPrice = 5.8;
    const fabricsPrice = 7.2;
    const gluePrice = 1.2;
    const totalWithoutDiscount = paper * paperPrice + fabrics *fabricsPrice + glue * gluePrice;
    const totalWithDiscount = totalWithoutDiscount  - (totalWithoutDiscount * discount) / 100;
    const roundedThirdUnit = totalWithDiscount.toFixed(3);
    return roundedThirdUnit;
}

christmasPreparation([2,3,2.5,25]);
christmasPreparation([4,2,5,13]);
christmasPreparation([7,8,0.5,45]);