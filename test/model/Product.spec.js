import Product from "../../src/model/Product.js";

describe('Product', () => {
  describe('#getDiscont', () => {
    it('Should evaluate and return the discount for a $100 10% product', () => {
      const product = new Product(100, "DIS_10_TestProduct", "Test product")
      expect(product.getDiscount()).toBe(10)
    })

    it('Should evaluate and return the discount for a $200 10% product', () => {
      const product = new Product(200, "DIS_10_TestProduct", "Test product")
      expect(product.getDiscount()).toBe(20)
    })

    it('should evaluate and return the discount for a $100 15% product', () => {
      const product = new Product(100, "DIS_15_TestProduct", "Test product")
      expect(product.getDiscount()).toBe(15)
    })

    it('should evaluate and return the discount for a $200 15% product', () => {
      const product = new Product(200, "DIS_15_TestProduct", "Test product")
      expect(product.getDiscount()).toBe(30)
    })

    it('should evaluate and return the discount for a $100 20% product', () => {
      const product = new Product(100, "DIS_20_TestProduct", "Test product")
      expect(product.getDiscount()).toBe(20)
    })

    it('should evaluate and return the discount for a $200 20% product', () => {
      const product = new Product(200, "DIS_20_TestProduct", "Test product")
      expect(product.getDiscount()).toBe(40)
    })

    it('should evaluate and return the discount of zero for non discounted products', () => {
      const product = new Product(200, "TestProduct", "Test product")
      expect(product.getDiscount()).toBe(0)
    })


  })

})
