let current =new Date("2025-08-08");
let day=current.getDay();
console.log(current)
console.log(current.toString());
console.log(day);

class sample{
    constructor(personname){
        this.personname=personname;
        console.log(personname)
    }
}
let result=new sample("js")

class bank{
    constructor (initialamount=0){
        this._balance=initialamount;

    }
    get balance(){
        return this._balance;
    }
    set balance(amount){
        if(amount>0){
            this._balance +=amount;
            console.log(amount)
        }
    }
}
let b=new bank(10);
console.log(b)

b.amount=100;
console.log(this.b_balance)


