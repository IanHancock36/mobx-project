import { observable } from "mobx"

console.log('it works')

const person = observable({
    firstName: 'MobX',
    lastName: 'Course'
});
console.log(person,'our person')

export {}