
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
                    <div class="menu-items__row-right__circle">
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
document.addEventListener('click', function(e){
    //we need to pass t/ btns data att. somewhere
   getMatchingItem(e.target.dataset.foodItem)
   console.log(e.target.dataset.foodItem)
})



//set filter based off of the id
function getMatchingItem(item) {
    //
}



//maybe sep func when user btn display complete order 




