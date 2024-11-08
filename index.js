const account = {                   //Create an object called account
    accountName: "Zakia Fazzi",     //accountName and name of the account holder
    balance: 500,                   //balance, amount of the account

    getBalance: function () {          //getBalance, should be a function
        console.log(`Your balance is: $${this.balance}`);       //prints total amount of the account to the user 
    },                                                         

    deposit: function (amount) {       // deposit, also a function 
        if (amount > 0) {
            this.balance += amount;
            console.log(`$${amount} deposited. New balance: $${this.balance}`);     //should be able to deposit money onto the balance of the account
        } else {
            this.accountError("Deposit failed, amount must be positive");    //Gives an error message if the amount is negative (Extra)
        }
    },

    withdrawal: function(amount) {  //withdrawal, also a function
        if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          console.log(`$${amount} withdrawn. New balance: $${this.balance}`);  //should be able do withdrawal money from the balance of the account 
        } else if (amount > this.balance) {
            this.accountError("You don't have enough money on your account, please try with a smaller amount");  //Gives an error message if the withdrawal is less than the balance(Extra)
        } else {
            this.accountError("Withdrawal failed, amount must be positive");    //Gives an error message if the amount is negative (Extra)
        }
    },
    getAccountName: function() {        //getAccountName, function as well
        console.log(`Account holder: ${this.accountName}`);     //prints account holders name to the user 
    },
    accountError: function(message) { //Gives a MUCH clearer error message in the console, great for bugs!
        console.error(`Error: ${message}`);
    }
};

//Prints the account holder and balance in the console
account.getAccountName(); 
account.getBalance(); 

//Attempts to deposit a positive and negative amount
account.deposit(200);  
account.deposit(-20); //should give an error message

//Attempts to withdraw a positive and negative amount, and then shows the current balance
account.withdrawal(199);
account.withdrawal(-12); //should give an error message
account.getBalance();

//Attempts to withdraw more money than is available on the account, and then shows the current balance
account.withdrawal(600);  //should give an error message
account.getBalance();
