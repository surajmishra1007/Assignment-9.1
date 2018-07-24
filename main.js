function createObject(name, hieght) { //javascript function
    
    this.name = name;               //variable declartion
    this.hieght = hieght;           

    this.aboutYourself = function (){       //object function
        return "I am "+ name + ". I am "+ hieght + "cm hieght";
    }


}

var myInfo = new createObject("Suraj", 155);            //intializing object

console.log(myInfo.aboutYourself());                // output