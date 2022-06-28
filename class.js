class Product {
    constructor(name, category, price, promotion, discount) {
        this.name = name
        this.category = category
        this.price = price
        this.promotion = promotion
        this.discount = discount
    }
}

class Category {
    constructor(Product) {
        this.name = Product.category
    }
}