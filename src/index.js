import shoppingList from './shopping-list';
import './index.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
