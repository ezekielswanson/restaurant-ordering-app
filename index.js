
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
    })

    return menuDisplay 

}


//Displaying Menu Items
function renderMenuItems() {
    const menuContainer = document.querySelector('.menu-items');
    menuContainer.innerHTML = getMenuItems();

}

renderMenuItems();




//need to put data attributes on btns to access the specific btns

//put click event on btn itself
document.addEventListener('click', function(e){
    //we need to pass t/ btns data att. somewhere
  //const matchedItem = getMatchingItem(e.target.dataset.foodItem);

  if (e.target.dataset.foodItem) {
    getMatchingItem(e.target.dataset.foodItem);
    showOrderTotal(e.target.dataset.foodItem);
  }



})






//Get matching id of the the food item
function getMatchingItem(foodId) {
    
    const foodIdNumber = parseInt(foodId, 10)
    //filter function
    const trgtFoodItem = menuArray.filter(function(item){
        return item.id === foodIdNumber
    })
    return trgtFoodItem;

}





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




