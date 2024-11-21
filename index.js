class book{
    title;
    author;
    ISBN;
    checkout(){
        console.log(this.title,"has been taken")
        
    }
    returnout(){
        console.log(this.ISBN,"it reutrn")
    }
    updateTitle(newTitle){
        this.title=newTitle;
        console.log(this.title,"has been changed")
    }
    constructor(title,author,ISBN){
    this.title=title;
    this.author=author;
    this.ISBN=ISBN
    }
}
var b1=new book("winter is coming","GG martain",345)
console.log(b1)
b1.checkout()
b1.updateTitle("fire&blood")
b1.returnout()
class product{
    name;
    price;
    category;
    applydiscount(amount){
        this.amount=amount
        console.log(this.amount,"discount amount")
        
    }
    getpriceAfterDiscount(finalprice){
        this.price=finalprice
        console.log(this.price,"final price")
    }
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    
}
var electronic=new product("redmi","Rs.13000","phone")
console.log(electronic)
electronic.applydiscount(3000)
electronic.getpriceAfterDiscount(10000)
class bankaccount{
    accountholdername;
    accountnumber;
    balance;
  deposit(amount){
        this.amount=amount;
        console.log(this.amount,"the amount is deposit")
    }
    withdraw(amount){
        this.amount=amount;
        console.log(this.amount,"amount is withdraw")

    }
    getbalance(balance){
        this.balance=balance;
        console.log(this.balance,"balance amount")

    }
    constructor(accountholdername,accountnumber,balance){
        this. accountholdername= accountholdername;
        this.accountnumber=accountnumber;
        this.balance=balance  
    }
}
var bank=new bankaccount("jhon",9390324567,"rs.60,000")
console.log(bank)
bank.deposit("rs.40,000")
bank.withdraw("rs.25,000")
bank.getbalance("rs.75,000")

class vehicle{
    model;
    licenseplate;
    mileage;
    drive(miles){
        this.miles=miles;
        console.log(this.miles,"change of miles")
    }
    getmileage(mileage){
        this.mileage=mileage
          console.log(this.mileage,'current mileage')
    }
    constructor(model,licenseplate,mileage){
        this.model=model;
        this.licenseplate=licenseplate;
        this.mileage=mileage;

    }
}
var bike=new vehicle('Bullet 350','ts 08 9977','36km')
console.log(bike)
bike.drive(50)
bike.getmileage(30)
class student{
    name;
    grade;
    setgrade(newgrade){
        this.grade=newgrade
        console.log(this.grade,"new grade")
    }
    getgrade(grade){
        this.grade=grade;
        console.log(this.grade,"current grade")
    }
    constructor(name,grade){
        this.name=name;
        this.grade=grade;

    }
}
var student1=new student("suman",8.7)
console.log(student1)
student1.setgrade(9.3)
student1.getgrade(8.7)