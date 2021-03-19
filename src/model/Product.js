export default class Product {
    constructor(price, code, name) {
        this.price = price;
        this.code = code;
        this.name = name;
    }

    getDiscount() {
      if (this.code.startsWith("DIS_10")) {
        return this.price * 0.1
      } else if (this.code.startsWith("DIS_15")) {
        return this.price * 0.15
      } else if (this.code.startsWith("DIS_20")) {
        return this.price * 0.20
      } else {
        return 0
      }
    }
};
