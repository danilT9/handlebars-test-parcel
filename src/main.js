import dishesListData from "../src/data/dishes.json";
import dishesTemplate from "../src/templates/dishes.hbs";

const dishesList = dishesTemplate(dishesListData);

const area = document.querySelector(".area");
area.innerHTML = dishesList;
