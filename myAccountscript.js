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
manager.addAction(supermarket);
console.log(manager.actions);

window.addActionToManager = () => { 
//get data from form
let type = document.getElementById('type').value;
let description = document.getElementById('description').value;
let amount = +document.getElementById('amount').value;
//create the action object
let action = new Action (type, description, amount);
//to add the action to actionManager
manager.addAction(action)
showActionsInTable();
//reset the form
document.getElementById('description').value = '';
document.getElementById('amount').value = '';
}

function showActionsInTable() {
    console.log('yasser');
    document.getElementById('actions').innerHTML = '';
    for(let action of manager.actions){
    document.getElementById('actions').innerHTML += 
    `<tr class="${action.type == 'income' ? 'text-success' : 'text-danger'}">
    <td>${action.description}</td>
    <td>${action.amount}</td>
    <td> <i class="fa-regular fa-pen-to-square"> </i></td>
    <td> <i class="fa-solid fa-trash"></i> </td>
    </tr>`
    }
}
showActionsInTable();