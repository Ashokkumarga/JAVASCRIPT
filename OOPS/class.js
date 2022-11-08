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
        return this.Amount+= this.min_bal
    }

}

let a1= new Account();
console.log(a1.get_Bal)