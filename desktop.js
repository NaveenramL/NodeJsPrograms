class Desktop{ //  this is a class, This class is used to demonstrate the example to skip Module Caching
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

module.exports = Desktop; // exporting this class.  