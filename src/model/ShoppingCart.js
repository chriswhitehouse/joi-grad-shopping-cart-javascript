import _ from "lodash";
import Order from "./Order.js";

export default class ShoppingCart {
    constructor(customer, products) {
        this.customer = customer;
        this.products = products;
    };

    addProduct = (product) => {
        this.products.push(product);
    };

    removeProduct = (product) => {
        _.remove(this.products, product);
    };

    checkout = () => {
        return new Order(this._totalPrice(), this._loyaltyPointsEarned());
    };

    _totalPrice = () => {
      let totalPrice = 0;

      this.products.forEach(product => {
          totalPrice += product.price - product.getDiscount();
      });

      return totalPrice
    }

    _loyaltyPointsEarned = () => {
      let loyaltyPointsEarned = 0;

      this.products.forEach(product => {
          if (product.code.startsWith("DIS_10")) {
              loyaltyPointsEarned += product.price / 10;
          } else if (product.code.startsWith("DIS_15")) {
              loyaltyPointsEarned += product.price / 15;
          } else if (product.code.startsWith("DIS_20")) {
              loyaltyPointsEarned += product.price / 20;
          } else {
              loyaltyPointsEarned += product.price / 5;
          }
      });

      return loyaltyPointsEarned
    }

    displaySummary = () =>  {
        return "Customer: " + this.customer.name + "\n" +
            "Bought:  \n" + this.products.map(p => "- " + p.name + ", " + p.price).join('\n');
    }
};
