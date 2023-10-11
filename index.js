import { menuArray } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';




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
document.querySelector('.menu-items').addEventListener('click', function(e) {
    if (e.target && e.target.matches('[data-food-item]')) {
        const foodId = e.target.dataset.foodItem;
        const clickedFoodItem = getMatchingItem(foodId);


        //New obj w/ uuid property
        const newObject = {
            name: clickedFoodItem.name,
            price: clickedFoodItem.price,
            id: clickedFoodItem.id,
            uuid: uuidv4()

        };


        orderTotal.push(newObject);

        renderOrderSummaryItems();
        renderOrderTotalPrice();
    }
});














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
                <button class="remove-btn" data-uuid="${order.uuid}">Remove</button>
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





//Calculating order total price
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

    removeOrder()
    
    
}




function removeOrder() {


    document.querySelector('.menu-items__order-summary--item-rows__wrapper').addEventListener('click', function(e) {
        if (e.target && e.target.matches('.remove-btn')) {
            const uuidToRemove = e.target.dataset.uuid;
            orderTotal = orderTotal.filter(order => {
                return order.uuid !== uuidToRemove;
            });

            //Update the order summary display
            renderOrderSummaryItems();

            //Update order summary calculation
            renderOrderTotalPrice();
        }
    });
    

}

removeOrder();

    



/*




function removeOrder() {

  
    document.addEventListener('click', function(e) {
        // Check if the clicked element or one of its ancestors has the class '.remove-btn'
        let targetElement = e.target;
        while (targetElement !== null && !targetElement.classList.contains('remove-btn')) {
            targetElement = targetElement.parentElement;
        }

        // If targetElement is null, then we didn't find a matching element with '.remove-btn'
        if (targetElement === null) return;

        
        const foodId = targetElement.dataset.foodItem;
        const foodIdNumber = parseInt(foodId, 10);
        
    

        const uuidToRemove = e.target.dataset.uuid;

        //Filter out the item with the matching ID
        orderTotal = orderTotal.filter(order => {
            return order.uuid !== uuidToRemove;
        });

        //Update the order summary display
        renderOrderSummaryItems();

        //Update order summary calculation
        getOrderTotal()

        
    });
    
}



 document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const uuidToRemove = e.target.dataset.uuid;
            
            orderTotal = orderTotal.filter(order => {
                return order.uuid !== uuidToRemove;
            });
            
            //Update the order summary display
            renderOrderSummaryItems();

            //Update order summary calculation
            getOrderTotal()

        });
    });

*/