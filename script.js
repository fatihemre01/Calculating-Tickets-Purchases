/*
I create a class that can handle ticket purchases and cancellations for planes.
It can be used to buy or cancel tickets. 
Afterwards it can calculate the empty seats accordingly.
*/


//Creating "Flying" class
class Flying{
    //Properties
    constructor(capacity, passenger){
        this.capacity = capacity
        this.passenger = passenger
    }

    //Does: calculate the empty seats
    calculateEmptySeat(){
        return this.capacity - this.passenger
    }
    
    //Does: buy ticket and add it to passenger amount
    buyTicket(ticket){
        //Checking if a certain amount of tickets are eligible to buy
        if(this.passenger + ticket <= this.capacity){
            this.passenger += ticket

            //Calculate the empty seats accordingly and return the value
            return `${ticket} ticket sold, 
            empty seat: ${this.calculateEmptySeat()}`
        }else{
            console.log("Your request is invalid")
        }
    }

    //Does: cancel ticket and subtract it from passenger amount
    cancelTicket(ticket){
        //Checking if a certain amount of tickets are eligible to cancel
        if(ticket < this.passenger){
            this.passenger -= ticket

            //Calculate the empty seats accordingly and return the value
            return `${ticket} ticket canceled, 
            empty seat: ${this.calculateEmptySeat()}`
        }else{
            console.log("Your request is invalid")
        }
    }
}

//Creating an instance
const plane1 = new Flying(100, 0)

//Calling "buyTicket()" function to buy certain amount of ticket
console.log(plane1.buyTicket(80))

//Calling "cancelTicket()" function to cancel certain amount of ticket
console.log(plane1.cancelTicket(30))


/*
Finished!
*/
