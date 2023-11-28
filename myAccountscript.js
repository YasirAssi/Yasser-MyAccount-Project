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

window.deleteActionFromManager = (actionId) => {
    if(confirm('delete?')){
        manager.deleteAction(actionId);
        showActionsInTable();
    }
};

window.updatedActionFromManager = (actionId) => {
    let newAmount = prompt("update here")
    if( newAmount == null || newAmount == '') alert ('try again!')
    else{
        manager.updateAction(actionId, +newAmount);
        showActionsInTable();
    }
};

function showActionsInTable() {
    document.getElementById('actions').innerHTML = '';
    for(let action of manager.actions){
    document.getElementById('actions').innerHTML += 
    `<tr class=${action.type == 'income' ? 'text-success' : 'text-danger'}>
    <td>${action.description}</td>
    <td>${action.amount}</td>
    <td> <a onclick="updatedActionFromManager(${action.id})"> <i style="cursor: pointer" class="fa-regular fa-pen-to-square"></i></a></td>
    <td> <a onclick="deleteActionFromManager(${action.id})"><i style="cursor: pointer" class="fa-solid fa-trash"></i></a></td>
    </tr>`
    }
    localStorage.setItem('actions', JSON.stringify(manager.actions));
    localStorage.setItem('manager', JSON.stringify(manager));
    localStorage.setItem('Balance', JSON.stringify(manager.balance));
}
showActionsInTable();

