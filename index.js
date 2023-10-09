
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






let orderTotal = [];





//Handling menu items clicked
//Add event listner to btns 
document.addEventListener('click', function(e){

//Use for dataFoodItem
//document.querySelectorAll('[data-remove-button]')
  if (e.target.dataset.foodItem) {
    getMatchingItem(e.target.dataset.foodItem);

    const foodId = e.target.dataset.foodItem
    const clickedFoodItem = getMatchingItem(foodId);

    console.log(clickedFoodItem)

    orderTotal.push(clickedFoodItem);


  }

  renderOrderSummaryItems();
  renderOrderTotalPrice();
  removeOrder();

})





//Gets matching id of the the food item clicked
function getMatchingItem(foodId) {
    
    const foodIdNumber = parseInt(foodId, 10)
    //filter function
    const trgtFoodItem = menuArray.filter(function(item){
        return item.id === foodIdNumber
    })
    //Returning first item in the array -> Object
    return trgtFoodItem[0]

}






//Setting up Order Summary Items html
function getSummaryItems() {
    const summaryOrder = orderTotal.map((order) => {
        return `
        <div class="menu-items__order-summary--item-row">
            <div class="menu-items__order-summary--item-row__name">
                <p>${order.name}</p>
                <button class="remove-btn">Remove</button>
            </div>
            <div class="menu-items__order-summary--item-row__price">$${order.price}</div>
        </div>
        `;
    }).join('');

    return summaryOrder;
}




//Display Order Summary Items
function renderOrderSummaryItems() {
    const orderSummaryItemsContainer = document.querySelector('.menu-items__order-summary--item-rows__wrapper');
    orderSummaryItemsContainer.innerHTML =  getSummaryItems();

}





//Gets the order total price
function getOrderTotal() {
    const totalPrice = orderTotal.reduce((totalPrice, currentItem) => {
        return totalPrice + currentItem.price
    }, 0)

    
    return totalPrice;
    

}





//Display Total Price
function renderOrderTotalPrice() {
    const orderTotalPriceContainer = document.querySelector('.menu-items__order-summary--item-row__price.total');
    let orderTotalNum =  getOrderTotal();
    orderTotalPriceContainer.innerHTML = `$${orderTotalNum}`
    
    
}






//Removes item from OrderTotal Array
function removeOrder() {

    //querySelectorAll("[data-remove-button]")
    //put that data att. in the html code as well
    const removeBtns = document.querySelectorAll('.remove-btn');

    removeBtns.forEach(btn => {
        btn.addEventListener('click', function(e){

            const foodId = e.target.dataset.foodItem;
            const foodIdNumber = parseInt(foodId, 10);
            console.log(foodId)

            //Filter out the item with the matching ID
            // const filterOrderItem
            orderTotal = orderTotal.filter(order => {
                return order.id !== foodIdNumber;
            });

            //Update the order summary display
            //Removes item b/c filtering out object from orderTotal Array
            renderOrderSummaryItems();
      
        });
    });
}

/*

document.addEventListener("DOMContentLoaded", function() {
    removeOrder();
 });
*/




/*
    Remove order from orderTotal array on click
    removeBtn.addEventListener('click', function(e){
        const foodId = e.target.dataset.foodItem;
        const foodIdNumber = parseInt(foodId, 10);

        orderTotal = orderTotal.filter(order => {
            return order.id === foodIdNumber;
        });

        //Returning first item in the array -> Object
        return filteredOrderItem[0];
    });
}

*/

