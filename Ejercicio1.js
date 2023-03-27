class ProductManager{
  constructor (){
    this.products = [];
    this.lastId = 0;
  }
  
  addProduct(title,description,price,thumbnail,code,stock){
    if(!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Error: Todos los campos son Requeridos");
      return; 
  }     

  const existingProduct = this.products.find(product => product.code === code);
    if (existingProduct) {
      console.log(`Error: Producto con el codigo ${code} ya existe`);
      return;
    }
    const id = ++this.lastId;
    const product = { id, title, description, price, thumbnail, code, stock };
    this.products.push(product);
    console.log(`Se agrego producto con el ID: ${id}`);
 
  }
  
   getProducts() {
    return this.products;
  }
  
  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      console.log("Error: Not found");
    }
    return product;
  }
  
  
}

const producto = new ProductManager();
//Array vacio
// console.log(producto.getProducts());


// Agrega el producto a la instancia
producto.addProduct('productodeprueba','estoesUnaPrueba',200,'SinImagen','dasd123',23)

//Muestra por consola el producto cargado
console.log(producto.getProducts());

//Se agrega nuevamente un producto con el mismo codigo.
producto.addProduct('productodeprueba','estoesUnaPrueba',200,'SinImagen','dasd123',25)

//Busqueda por ID, en caso de que no exista, informa que el valor no esta.
console.log(producto.getProductById(2));
