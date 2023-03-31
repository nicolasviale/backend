// memoria --> archivo --> mongo(unico)
//Campo de obj producto
//title
//description
//price
//thumbnail
//code --> debe ser unico 
//stock

//Meotodos
//addProduct
//getProducts
//getProductById

let productos = []
class prodructManager {
    constructor(){
        this.product = productos
    }

    addProduct({newProduct}){    
        if(!newProduct.title  || 
            !newProduct.description || 
            !newProduct.price || 
            !newProduct.thumbnail || 
            !newProduct.code || 
            !newProduct.strock ) return 'todos los campos son necesarios'

            let product = this.products.find(prod => prod.code === newProduct.code)    
            if(product) return 'Un producto con este codigo ya fue ingresado'

            if(this.products.length === 0){
                return this.products.push({id: 1, ...newProduct})
            }

            return [...this.products, {id: this.products[this.products.length-1].id + 1, ...newProduct}]
        
    }
    getProducts(){
        return this.product
    }
    addProductById(id){
        let product = this.product.find(prod => prod.id === id)
        if (!product) return 'Product not Found'
        return product
    }

}

const product = new prodructManager()

// product.addProduct({title: 'producto'})
product.addProduct({
    title: 'producto1', 
    description:"esto es una descripcion",
    price: 1500,
    thumbnail: 'link',
    code: 001,
    stock: 100})
    console.log(product.addProduct({
    title: 'producto1', 
    description:"esto es una descripcion",
    price: 1500,
    thumbnail: 'link',
    code: 001,
    stock: 100}))
console.log(product.getProducts());
console.log(product.getProductsById(1))

