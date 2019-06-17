import testA from './testA.js'
export default {
  sayHello: function() {
    console.log('hello')
    testA.sayName()
  },
  sayByeBye: function() {
    console.log('byebye')
  }
}