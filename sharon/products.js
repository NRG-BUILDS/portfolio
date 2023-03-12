const myObj = { 
    productArray: []
}
function Product(name, type, price, pic) { this.name = name;
    this.type = type;
    this.price = price;
    this.pic = "/images/" + pic;
    myObj.productArray.push(this)
}

const chickenFrozen = new Product( 
    "Frozen Chicken (per kg)",
    "Meat",
    2000.00,
    "chicken_kg.jpg"
)

const chickenFresh = new Product( 
    "Fresh Chicken",
    "Meat",
    6000.00,
    "chicken_fresh.jpg"
)
const eggs = new Product(
    "Eggs (per crate)",
    "Poultry",
    2000.00,
    "egg_crate.jpg"
)
const catfish = new Product(
    "Catfish (per unit)",
    "Fish",
    4500.00,
    "catfish.jpg"
)

console.log(myObj.productArray)




showProjects = () => { 
    const display = document.querySelector('.agriproduct_container')
    const array = myObj.productArray
    let text = ""
    for (let i = 0; i < array.length; i++) { 
        text += `<div class="agriproduct">
               <img src="${array[i].pic}" alt="${array[i].name}" class="product_pic">
               <span class="header-md">${array[i].name}</span>
               <hr>
               <span class="old_price"><del>₦${array[i].price + 1999.99}</del></span>
               <span class="price">₦${array[i].price}</span>
               <span class="material-icons-outlined">star</span>
               <span class="product_type">${array[i].type}</span>
               <div class="btns_container">
                   <button class="bluebtn buy_btn">Buy Now <i class="material-icons-outlined">navigate_next</i></button>
                   <button class="bluebtn addCart_btn">Add to cart <i class="material-icons-outlined">add_shopping_cart</i></button>
               </div>
           </div>`
    }
    display.innerHTML = text
}
showProjects()
