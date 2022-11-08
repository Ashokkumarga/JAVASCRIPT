class Account{
    id;
    Name;
    Amount;
    min_bal=500;
    constructor(a,b,c){
        this.id=a;
        this.Name=b;
        this.Amount=c;
    }
    open_Account(){}
    deposit_Amount(){

    }
    get_Bal(){
        return this.Amount = this.Amount-this.min_bal
    }

}

let a1= new Account(280,"Ashok",500000);
console.log(a1.get_Bal());
console.log(a1.Name);
console.log(a1.deposit_Amount())