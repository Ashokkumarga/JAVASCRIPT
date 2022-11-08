class BANK_ACCOUNT{
    min_bal=500;
    User_name(){
        console.log("New User")
    }
    Bank(){
        console.log("Kotak")
    }
}
let a1= new BANK_ACCOUNT;
console.log(a1.min_bal);
a1.User_name();
a1.Bank();


let a2= new BANK_ACCOUNT;
console.log(a1.min_bal);
console.log(a1.User_name())