//incase of several export
// import {  } from "module";

//incase of export default
import Action from "./classes/action.js";
import ActionManager from "./classes/ActionManager.js";

let salary = new Action("income", "November Salary", 10000);
console.log(salary);
let supermarket= new Action("expense", "Supermarket", 600);
console.log(supermarket);

let manager = new ActionManager();
manager.addAction(salary);
manager.deleteAction(supermarket);
