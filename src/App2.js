import React, { Component } from 'react';
import './App2.css';

// 第二个JS类追加
// 拆分组件

// 列表
const list = [
  {
    title: 'React_list1',
    url: 'https://reactjs.org',
    author: 'tou1',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'React_list2',
    url: 'https://reactjs.org',
    author: 'tou2',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase())
  }
}

class App2 extends Component {

 // 类构造函数
 constructor(props) {
  super(props);

  this.state = {
    list,
    searchTerm: '',
  };

  this.onDismiss = this.onDismiss.bind(this);
  
  this.onSearchChange = this.onSearchChange.bind(this);
}

onDismiss(id) {

  const isNotId = item => item.objectID !== id;
  const updateList = this.state.list.filter(isNotId);

  this.setState({ list: updateList });

}

onSearchChange(event) {
  this.setState({ searchTerm: event.target.value });
}

  render() {

    const { searchTerm, list } = this.state;

    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          >
            Search
          </Search>
        </div>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
        <div>----------------------------------------</div>

      </div>
    );
  }
  
}

// ES6类组件
// class Search extends Component {
//   render() {
//     const { value, onChange, children } = this.props;
//     return (
//       <form>
//         {children} <input
//           type="text"
//           value={value}
//           onChange={onChange}
//         />
//       </form>
//     );
//   }
// }

// 函数式无状态组件
// 当不需要本地状态或者组件生命周期方法时，就应该使用函数式无状态组件。
// function Search(props) {
//   const { value, onChange, children } = props;
//   return (
//     <form>
//       {children} <input
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </form>
//   );
// }

// 优化
// function Search({ value, onChange, children }) {
//   return (
//     <form>
//       {children} <input
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </form>
//   );
// }

// 再优化（ES6箭头函数）
const Search = ({ value, onChange, children }) =>
  <form>
    {children} <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>

// class Table extends Component {
//   render() {
//     const { list, pattern, onDismiss } = this.props;
//     return (
//       <div>
//         {list.filter(isSearched(pattern)).map(item =>
//           <div key={item.objectID}>
//             <span>08</span>
//             <span>
//               <a href={item.url}>{item.title}</a>
//             </span>
//             <span>{item.author}</span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
//             <span>
//               {/* <button
//                 onClick={() => onDismiss(item.objectID)}
//                 type="button"
//               >
//                 Dismiss
//               </button> */}
//               <Button onClick={() => onDismiss(item.objectID)}>
//                 Dismiss
//               </Button>
//             </span>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// 优化（ES6箭头函数）
// const Table = ({ list, pattern, onDismiss }) =>
//   <div className="table">
//     {list.filter(isSearched(pattern)).map(item =>
//       <div key={item.objectID} className="table-row">
//         <span style={{ width: '10%'}}>
//           08
//         </span>
//         <span style={{ width: '30%'}}>
//           <a href={item.url}>{item.title}</a>
//         </span>
//         <span style={{ width: '30%'}}>
//           {item.author}
//         </span>
//         <span style={{ width: '10%'}}>
//           {item.num_comments}
//         </span>
//         <span style={{ width: '10%'}}>
//           {item.points}
//         </span>
//         <span style={{ width: '10%'}}>
//           {/* <button
//             onClick={() => onDismiss(item.objectID)}
//             type="button"
//           >
//             Dismiss
//           </button> */}
//           <Button
//             onClick={() => onDismiss(item.objectID)}
//             className="button-inline"
//           >
//             Dismiss
//           </Button>
//         </span>
//       </div>
//     )}
//   </div>

const largeColumn = {
  width: '40%',
};

const midColumn = {
  width: '30%',
};

const smallColumn = {
  width: '10%',
};

const Table = ({ list, pattern, onDismiss }) =>
  <div className="table">
    {list.filter(isSearched(pattern)).map(item =>
      <div key={item.objectID} className="table-row">
        <span style={largeColumn}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={midColumn}>
          {item.author}
        </span>
        <span style={smallColumn}>
          {item.num_comments}
        </span>
        <span style={smallColumn}>
          {item.points}
        </span>
        <span style={smallColumn}>
          {/* <button
            onClick={() => onDismiss(item.objectID)}
            type="button"
          >
            Dismiss
          </button> */}
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
      </div>
    )}
  </div>

// 可复用组件
class Button extends Component {
  render() {
    const {
      onClick,
      // 没有指定className属性，它的值就是一个空字符串，而非undefined。
      className = '',
      children,
    } = this.props;

    return (
      <button
        onClick={onClick}
        className={className}
        type="button"
      >
        {children}
      </button>
    );
  }
}

export default App2;
