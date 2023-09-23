
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





//Handling menu items clicked
document.addEventListener('click', function(e){

  if (e.target.dataset.foodItem) {
    getMatchingItem(e.target.dataset.foodItem);

    const foodId = e.target.dataset.foodItem
    const clickedFoodItem = getMatchingItem(foodId);

    console.log(clickedFoodItem)

    orderTotal.push(clickedFoodItem);


  }

  rednerOrderSummaryItems()

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
    const orderSummaryItemsContainer = document.querySelector('.menu-items__order-summary--item-rows__wrapper');
    orderSummaryItemsContainer.innerHTML = getSummaryItems();

}


//Gets the order total
function getOrderTotal(orderTotal) {
    orderTotal = 

}


//Display Summary Total




//Removes item from OrderTotal Array
function removeOrder() {
    const removeBtns = document.querySelectorAll('.menu-items__order-summary .menu-items__order-summary--item-row .menu-items__order-summary--item-row__name button');
    
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function(e){
            console.log("Number of remove buttons found:", removeBtns.length);

            console.log("Remove button clicked!");

            const foodId = e.target.dataset.foodItem;
            const foodIdNumber = parseInt(foodId, 10);

            //Filter out the item with the matching ID
            orderTotal = orderTotal.filter(order => {
                return order.id !== foodIdNumber;
            });

            //Update the order summary display
            //Removes item b/c filtering out object from orderTotal Array
            rednerOrderSummaryItems();

      
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    removeOrder();
 });





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

