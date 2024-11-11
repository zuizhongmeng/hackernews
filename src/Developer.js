import React, { Component } from 'react';

// JavaScript ES6引入了类的概念
// 尽管React为了例如不可变数据结构等的特性而拥抱函数式编程，但是它还是使用类来声明组件。这些组件被称为ES6类组件。
class Developer extends Component {
  constructor(firstname, lastname) {
    super();
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + ' ' + this.lastname;
  }

  render() {
  
    return (
      <div className="Developer">
        <h2>{name.getName()}</h2>
      </div>
    );
  }  
}

const name = new Developer('kou', 'tou');
console.log(name.getName());

// memo start
// ES6 对象初始化
// 通过简写属性更加简洁地初始化对象
// const name1 = 'Test1';

// const user1 = {
//   name1: name1,
// };

// 对象中的属性名与变量名相同时
// const name2 = 'Test2';

// const user2 = {
//   name2,
// };

// 简写方法名
// const userService = {
//   getUserName(user3) {
//     return user3.firstname + ' ' + user3.lastname;
//   },
// };

// 计算属性名
// const key = 'key4';

// const user4 = {
//   [key]: 'Test4'
// };
// memmo end


// ES6解构

// ES5
const user5 = {
  firstname: 'kou2',
  lastname: 'tou2',
}

var firstname = user5.firstname;
var lastname = user5.lastname;

console.log(firstname + ' ' + lastname);

// ES6
const user6 = {
  firstname2: 'kou3',
  lastname2: 'tou3',
}

const {
  firstname2,
  lastname2
} = user6;

console.log(firstname2 + ' ' + lastname2);

const users = ['Robin', 'Andrew', 'Dan'];
const [
  userOne,
  userTwo,
  userThree
] = users;

console.log(userOne, userTwo, userThree);


export default Developer;
