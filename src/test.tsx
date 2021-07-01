import { observable } from "mobx"

console.log('it works')

const person = observable({
    firstName: 'MobX',
    lastName: 'Course'
});


class Person {
    @observable
    firstName: string ;

    constructor(name: string){
        this.firstName = name; 
    }
    @action
    updateFirstName(name: string){
        this.firstName = name;

    }




}

const newPerson = newPerson(name; 'georgy Glexer')




export {}


// you must keep variables as const not let. once you call a variable under 'let'
    // It will lose the mobX functionality. 

// Actions are what we use to update our state 
    // 3 ways to update state with action 
        // 1. decorator 
            // 2. action function 
                // 3. runInAction function 

    // All updates inside a action are batched 
        // Actions do not support asunch operations so everything updates after the asynch code will be executed in the next batch. 