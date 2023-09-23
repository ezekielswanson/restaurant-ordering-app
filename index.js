
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

    console.log(clickedFoodItem)

    orderTotal.push(clickedFoodItem);


  }

  rednerOrderSummaryItems()

})





//Gets matching id of the the food item
function getMatchingItem(foodId) {
    
    const foodIdNumber = parseInt(foodId, 10)
    //filter function
    const trgtFoodItem = menuArray.filter(function(item){
        return item.id === foodIdNumber
    })
    //Returning first item in the array -> Object
    return trgtFoodItem[0]

}






//Get Order Summary Items ? Might change this comment

function getSummaryItems() {
    const summaryOrder = orderTotal.map((order) => {
        return `
        <div class="menu-items__order-summary--item-row">
            <div class="menu-items__order-summary--item-row__name">
                <p>${order.name}</p>
                <button>Remove</button>
            </div>
            <div class="menu-items__order-summary--item-row__price">$${order.price}</div>
        </div>
        `;
    }).join('');

    return summaryOrder;
}







//Display Order Summary Items
function rednerOrderSummaryItems() {
    //const orderSummaryItemsContainer = document.querySelector('.menu-items__order-summary--item-row');
    const orderSummaryItemsContainer = document.querySelector('.menu-items__order-summary--item-rows__wrapper');
    orderSummaryItemsContainer.innerHTML = getSummaryItems();

}




//Remove Order
function removeOrder(e) {
    const removeBtn = document.querySelector('.menu-items__order-summary--item-row__name button');
    
    removeBtn.addEventListener('click', function(e){
      orderTotal.pop(e.target.dataset.foodItem)
        

    })

}

removeOrder(e.target.dataset.foodItem)
