const homeBtn = document.getElementById('homeBtn');
const productDisplay = document.querySelector('.productGrid');
const categoryDisplay = document.querySelector('.categoryCardContainer');
const catHead = document.getElementById('catHead')
const previewDisplay = document.querySelector('.preview')
const storeDisplay = document.querySelector('.store')
const previewName = document.getElementById('productName')
const previewPrice = document.getElementById('productPrice')
const previewDesc = document.getElementById('productDesc')
const previewImage = document.getElementById('productImage')
const orderBtn = document.getElementById('orderBtn')
const orderLink = document.getElementById('orderLink')
const orderPopUp = document.querySelector('.orderPopUp')
const addCartBtn = document.querySelector('.cartBtn')
let cartPanel = document.querySelector('.cart')
let cartList = document.querySelector('.cartSection')
let cartTotalDisplay = document.getElementById('cartTotal')
const cartArray = []
const productArray = []
const hoodieArray = []
const topArray = []
const gownArray = []

//class constructor for products
function Product(vName, Name, Price, Pic, Desc, Category){
    this.variableName = vName
    this.name = Name
    this.price = Price
    this.pic = Pic
    this.desc = Desc
    this.cat = Category
    productArray.push(this)
    if(Category == "Top") { topArray.push(this)}
    if(Category == "Gown") { gownArray.push(this)}
    if(Category == "Hoodie") { hoodieArray.push(this)}
}
const hoodie = new Product( 
    "hoodie",
    "ANKARA HOODIE",
    5999.99,
    "hoodie.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Hoodie"
    )
const dress1 = new Product( 
    "dress1",
    "FLAY ARM STYLE ",
    5000.00,
    "dress1.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Gown"
    )
const dress2 = new Product(
    "dress2",
    "FULLY FESTIVE",
    5999.99,
    "dress2.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Gown"
    )
const dress3 = new Product( 
    "dress3",
    "HOODIE XL",
    6999.99,
    "hoodie.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Hoodie"
    )
const dress4 = new Product( 
    "dress4",
    "MEN'S SHIRT",
    4499.99,
    "dress4.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Top"
    )
const dress5 = new Product(
    "dress5",
    "SLEEVELESS GOWN",
    5999.99,
    "dress5.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Gown"
)


function renderCategoryLine(cat) { 
    if(cat == hoodieArray) { 
        catHead.innerHTML = "Shizzabelle Hoodies"
    } 
    if (cat == topArray) {
        catHead.innerHTML = "Shizzabelle Tops"
    }
    if (cat == gownArray) {
        catHead.innerHTML = "Shizzabelle Gowns"
    }
    categoryDisplay.innerHTML = ""
    for (x in cat) { 
        categoryDisplay.innerHTML += `<div class="categoryCard swoopL">
                <img src="${cat[x].pic}" alt="${cat[x].name}">
                <div class="cInfo">
                    <span class="cName">${cat[x].name}</span>
                <span class="cPrice">₦${cat[x].price}</span><br>
                <button onclick="preview(${cat[x].variableName})"><span class="material-icons md-48">arrow_circle_right</span></button>
                </div>
            </div>`
    }
}

function renderProductLine() { 
    for (x in productArray) { 
        productDisplay.innerHTML += `<div class="product swoopL">
                <img src="${productArray[x].pic}" alt="${productArray[x].name}">
                <div class="pInfo">
                    <span class="pName">${productArray[x].name}</span>
                <span class="pPrice">₦${productArray[x].price}</span><br>
                <button onclick="preview(${productArray[x].variableName})"><span class="material-icons md-48">arrow_circle_right</span></button>
                </div>
            </div>`
    }
}
renderProductLine();

function preview(item) { 
    previewName.innerHTML = item.name;
    previewPrice.innerHTML = "₦" + item.price;
    previewDesc.innerHTML = item.desc;
    previewImage.src = item.pic;
    homeBtn.onclick = function() { cancelPreview(item);}
    orderBtn.onclick = function() { order(item)};
    addCartBtn.onclick = function() { addCart(item)};
    showPreview();
}
function showPreview() { 
    storeDisplay.style.display = "none"
    previewDisplay.style.display = "block"
    homeBtn.innerHTML = '<span class="material-icons">arrow_back</span>'
}
function cancelPreview(item) { 
    previewName.innerHTML = "";
    previewPrice.innerHTML = "";
    previewDesc.innerHTML = "";
    previewImage.src = "";
    orderBtn.removeEventListener('click', function() { order(item)})
    addCartBtn.removeEventListener('click', function() { addCart(item)});
    storeDisplay.style.display = "block";
    previewDisplay.style.display = "none"
    homeBtn.innerHTML = '<span class="material-icons">home</span>'
    if(cartPanel.style.width == "75%") { cartPanel.style.width = "0%"
        
    }
}

function order(item) { 
    console.log("yes")
    orderPopUp.style.display = "block";
    orderLink.href = `http://wa.me/2349058632331?text=Hi,+I+am+interested+in+a+${item.name}+from+Shizzabelle+Stores`;
}
function cancelOrder() { 
    orderPopUp.style.display = "none";
    orderLink.href = ``;
}

function orderAll() { 
    orderPopUp.style.display = "block";
    let link = `http://wa.me/2349058632331?text=Hi,+I+am+interested+in+a+`;
    for (x in cartArray) { 
        link += `${cartArray[x].name},+`
    }
    link += `from+Shizzabelle+Stores`
    orderLink.href = link;
    showCart()
}
let cartMoney = 0
function addCart(i) { 
    cartArray.push(i);
    cartMoney += Number(i.price)
    console.log(cartMoney)
    cartPanel.style.width = "75%"
    renderCart();
}
function removeFromCart(item, indexNumber) { 
    cartArray.splice(indexNumber, 1)
    cartMoney -= item.price
    renderCart();
}
function renderCart() { 
    text = `<a href="javascript:void(0)" onclick="showCart()"><span class="material-icons">close</span></a>
        <br>`
    for (x in cartArray) { 
        cartArray[x].indexNum = x;
        
        text += `<div class="cartList swoopL"> <span class="cartItem">${cartArray[x].name}</span>
        <span class="cartPrice">₦${cartArray[x].price}  <a href="javascript:void(0)" onclick="removeFromCart(${cartArray[x].variableName}, ${cartArray[x].indexNum})"><span class="material-icons">close</span></a></span>
        </div><hr>`
    }
   cartList.innerHTML = text;
   cartTotalDisplay.innerHTML = "₦" + cartMoney.toFixed(2);
}
function showCart() { 
    if (cartPanel.style.width == "75%") { 
        cartPanel.style.width = 0
    } else { cartPanel.style.width = "75%"
    }
}
