import Action from "./classes/action.js";
import ActionManager from "./classes/ActionManager.js";

let salary = new Action("income", "November Salary", 10000);
console.log(salary);
let supermarket= new Action("expense", "Supermarket", 600);
console.log(supermarket);

let manager = new ActionManager(); 
manager.calcBalance();
console.log(manager.actions);

window.addActionToManager = () => { 
let type = document.getElementById('type').value;
let description = document.getElementById('description').value;
if (description == '') alert('Please Enter Discreption');
else {
let amount = +document.getElementById('amount').value;
if (amount <= 0) alert('Please enter a positive amount.');
//create the action object
else { 
let action = new Action (type, description, amount);
manager.addAction(action)
showActionsInTable();
document.getElementById('description').value = '';
document.getElementById('amount').value = '';
    }
    }
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
    if (isNaN(newAmount)) alert ('Enter Numbers Only!')
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
    <td>${action.amount} NIS</td>
    <td> <a onclick="updatedActionFromManager(${action.id})"> <i style="cursor: pointer" class="fa-regular fa-pen-to-square"></i></a></td>
    <td> <a onclick="deleteActionFromManager(${action.id})"><i style="cursor: pointer" class="fa-solid fa-trash"></i></a></td>
    </tr>`
    }
    localStorage.setItem('actions', JSON.stringify(manager.actions));
}
showActionsInTable();

