class Laptop{ //  this is a class
    constructor(name){ // this is a constructor
        this.name = name;
    }

    getName(){ // getter method
        return this.name;
    }

    setName(name){ // setter method
        this.name = name;
    }
}

module.exports = new Laptop('Dell'); // exporting this class with instance & laptop name