const sayName = function () {
  var man = new Person('twp')
  console.log(man.name)
}
const saySex = function () {
  console.log('saySex')
}
class Person {
  constructor(name) {
    this.name = name
  }
}
export default {
  sayName,
  saySex
}