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
        let deleteAction1 =  this.actions.findIndex((action) => action.id == actionId);
        //delete with splice
        this.actions.splice(deleteAction1, 1);
        this.calcBalance();
    }
    updateAction(){}
    calcBalance(){
        // to do also with reduce
        for(let action of this.actions){
            this.balance += action.amount;
        }
        document.getElementById('balance').innerHTML = `Balance: ${this.balance}`;
    }
}