import React, { Component } from 'react';

// 类方法不会自动绑定this到实例上
// class ExplainBindingsComponent extends Component {
//   onClickMe() {
//     console.log(this);
//   }

//   render() {
//     return (
//       <button
//         onClick={this.onClickMe}
//         type="button"
//       >
//         Click Me
//       </button>
//     );
//   }
// }

// 类方法在构造函数中正确绑定
// React的官方文档中坚持在构造函数中绑定类方法
class ExplainBindingsComponent extends Component {
  constructor() {
    super();

    this.onClickMe = this.onClickMe.bind(this);
  }

  onClickMe() {
    console.log(this);
  }

  render() {
    return (
      <button
        onClick={this.onClickMe}
        type="button"
      >
        Click Me
      </button>
    );
  }
}

export default ExplainBindingsComponent;
