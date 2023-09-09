
import { menuArray } from './data.js'



//Get Menu Items
function  getMenuItems() {
    let menuDisplay = '';

    menuArray.forEach(function(item) {
        menuDisplay += `
            <div class="menu-items__row"> 
                <div class="menu-items__row-left">
                    <span>${item.emoji}</span>
                    <div class="menu-items__row-left__text">
                        <h1>${item.name}</h1>
                        <p>${item.ingredients}</p>
                        <p>${item.price}</p>
                    </div>
                </div>
                <div class="menu-items__row-right">
                    <div class="menu-items__row-right__circle" data-food-item="${item.id}">
                        <i class="fa-solid fa-plus" data-food-item="${item.id}"></i>
                    </div>
                </div>
            </div>
            `

        //Have to loop through again set new var and +=
        //Logic to check if user added to order


    })

    return menuDisplay 
}


//Display Menu Items 

function renderMenuItems() {
    const menuContainer = document.querySelector('.menu-items');
    menuContainer.innerHTML = getMenuItems();

    //const summaryContainer = document.querySelector('.menu-items__order-summary');
    //summaryContainer.innerHTML = getMenuItems();
}

renderMenuItems();







const orderTotal = [];

document.addEventListener('click', function(e){
  //const matchedItem = getMatchingItem(e.target.dataset.foodItem);

  if (e.target.dataset.foodItem) {
    getMatchingItem(e.target.dataset.foodItem);

    const foodId = e.target.dataset.foodItem
    const clickedFoodItem = getMatchingItem(foodId);

    orderTotal.push(clickedFoodItem);

    rednerOrderSummaryItems()
    
    const orderSummaryPrice = document.querySelector('.menu-items__order-summary--item-row__price');
    orderSummaryPrice.innerHTML = `
    <span>${totalPrice}</span>
    `
  }

})







//Get matching id of the the food item
//Returns matching objeect id from food item
function getMatchingItem(foodId) {
    
    const foodIdNumber = parseInt(foodId, 10)
    //filter function
    const trgtFoodItem = menuArray.find(function(item){
        return item.id === foodIdNumber
    })
    return trgtFoodItem;

}



//Get Order Summary Items
function getSummaryItems() {
    let summaryDisplay = '';

    orderTotal.forEach(order =>{
        summaryDisplay += `
        <div class="menu-items__order-summary--item-row__name">
            <p>${order.name}</p>
            <button>Remove</button>
        </div>
        <div class="menu-items__order-summary--item-row__price">${order.price}</div>
        `

    })

    return summaryDisplay;
}


// Display Order Summary Items
function rednerOrderSummaryItems() {
    const orderSummaryItemsContainer = document.querySelector('.menu-items__order-summary--item-row');
    orderSummaryItemsContainer.innerHTML = getSummaryItems();

}

rednerOrderSummaryItems()


//Calculating Order Total
const totalPrice = orderTotal.reduce((sum, item) => {
    return sum + item.price

}, 0);


/* 
When user clicks on item, display summary totatl.

if(user clicks once display check out)



//have matching food if pass into another function that display the order total
function showOrderTotal() {
    //get div el
    const foodItemEl = document.querySelector('.menu-items__row-right__circle');
    
    // click event
    foodItemEl.addEventListener('click', function(){
        //display order total
        //seperate order total data in another function
    })

}


*/



