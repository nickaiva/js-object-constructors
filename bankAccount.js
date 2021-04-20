/*1.   Create a Function constructor that creates Bank Accounts*/
function BankAccount(accountHolder) {
    this.IBAN = "GR1234567890"; //         Automatically give a new IBAN number to new accounts. (Static property)
    this.accountHolder = accountHolder;
    this.balance = 0;
    console.log(`New account created with ${this.IBAN} for ${this.accountHolder}`);
    this.getBalance = function() {/* 2.3. getBalance: will return the current balance */
        console.log(`Current balance: ${this.balance}` )
        return this.balance;
    };

};

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {

    if (amount <= 0 || typeof amount != "number") {
        console.log("Invalid amount");
        return "Invalid amount";
    }
    if (amount <= this.balance) {
        this.balance -= amount;
        return amount;
    } else {
        console.log("Insufficient balance!");
        return "Insufficient balance!";
    }

};

let newAccount = new BankAccount("Manos Loisos");
newAccount.getBalance;
newAccount.deposit(100);
newAccount.withdraw(50);
newAccount.getBalance();
newAccount.withdraw('20');
newAccount.withdraw(500);
newAccount.withdraw(-50);
