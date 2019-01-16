const piggyBank = {
    quarters: 89,
    nickels: 1,
    dimes : 10,
    pennies : 5,
    addQuater : function() {
        return (.25 * this.quarters)
    },
    addNickels : function(){
        return(.05 * this.nickels)
    },
    addDimes : function(){
        return(.10 * this.dimes)
    },
    addPennies : function() {
        return (.01 * this.pennies)
    }
}

const amountDollar = (piggyBank.addQuater() + piggyBank.addNickels() + piggyBank.addDimes() + piggyBank.addPennies())
console.log(amountDollar)


