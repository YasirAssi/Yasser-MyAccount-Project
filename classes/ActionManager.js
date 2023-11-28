export default class ActionManager {
    constructor(){
        this.balance = 0;
        this.actions = [];
    }
    addAction(action){
        this.actions.push(action);
        this.calcBalance();
    }
    deleteAction(actionId){
        //find the relevent index 
        let deleteIndex =  this.actions.findIndex((action) => action.id == actionId);
        //delete with splice
        this.actions.splice(deleteIndex, 1);
        this.calcBalance();
    }
    updateAction(actionId,newAmount){
        let updateAction = this.actions.findIndex((action) => action.id ==actionId);
        this.actions[updateAction].amount = this.actions[updateAction].description == 'income' ? newAmount : -newAmount;
        this.calcBalance();
    }
    calcBalance(){
        this.balance = 0;
        // to do also with reduce: // 
        this.balance = this.actions.reduce((amount, action) => amount + action.amount, 0);
        // for(let action of this.actions){
        //     this.balance += action.amount;
        // }
        document.getElementById('balance').innerHTML = `Balance: ${this.balance}`;
    }
}