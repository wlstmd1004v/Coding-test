function solution(price) {
    let discountedPrice = price;
 
    switch (true) {
      case (price >=500000):
        discountedPrice = ~~(price*0.8);
        break;
      case (price >=300000):
        discountedPrice = ~~(price*0.9);
        break;
      case (price >=100000):
        discountedPrice = ~~(price*0.95);
        break;
      default:
        break;
    }
 
    return discountedPrice;
 }
 