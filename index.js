
import { menuArray } from './data.js'



//Get Menu Items
function  getMenuItems() {
    //loop through each obj
    //put html in string to be rendered
    //updat html w/ TL

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
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
           `
    })

    //need to use the value of menu display somewhre else so return
    return menuDisplay

   

}



//Displaying Menu Items
function renderMenuItems() {
    const menuContainer = document.querySelector('.menu-items');
    //insert in innertHTML
    menuContainer.innerHTML = getMenuItems();

}

renderMenuItems();


