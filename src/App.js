import React, { Component } from 'react';
import './App.css';

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

const list2 = [
  {
    title: 'list2_React_list1',
    url: 'https://reactjs.org',
    author: 'tou1',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'list2_React_list2',
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

// ES5
// function isSearched2(searchTerm2) {
//   return function(item) {
//     return item.author.toLowerCase().includes(searchTerm2.toLowerCase())
//   }
// } 

// ES6
const isSearched2 = searchTerm2 => item =>
  item.author.toLowerCase().includes(searchTerm2.toLowerCase());

const isSearched3 = searchTerm3 => item =>
  item.author.toLowerCase().includes(searchTerm3.toLowerCase());

class App extends Component {

  // 类构造函数
  constructor(props) {
    super(props);

    // state通过使用this绑定在类上。因此，你可以在整个组件中访问到state。例如它可以用在render()方法中。
    // 此前你已经在render()方法中映射一个在组件外定义静态列表。现在你可以在组件中使用state里的list了。
    // this.state = {
    //   list: list,
    // };

    // state通过使用this绑定在类上
    // 列表变量名和状态属性名称共享同一名称
    this.state = {
      list,
      list2,
      searchTerm: '',
      searchTerm2: '',
      searchTerm3: '',
    };

    // this对象是类的实例，为了将onDismiss()定义为类方法，你需要在构造函数中绑定它。
    this.onDismiss = this.onDismiss.bind(this);

    this.onSearchChange = this.onSearchChange.bind(this);

    this.onSearchChange2 = this.onSearchChange2.bind(this);

    this.onSearchChange3 = this.onSearchChange3.bind(this); 
  }

  // 单向数据流
  onDismiss(id) {
    // function isNotId(item) {
    //   return item.objectID !== id;
    // }

    // 抽取函数并将其传递给filter函数
    // const updateList = this.state.list.filter(isNotId);

    // 使用ES6的箭头函数让代码更简洁
    const isNotId = item => item.objectID !== id;
    const updateList = this.state.list.filter(isNotId);

    // 内联到一行内完成
    // const updateList = this.state.list.filter(item => item.objectID !== id);

    // 使用类方法setState()来更新组件satate中的列表
    this.setState({ list: updateList });
  }

  // 单向数据流2
  onDismiss2(id) {
    const isNotId = item => item.objectID !== id;
    const updateList = this.state.list2.filter(isNotId);
    this.setState({ list2: updateList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchChange2(event) {
    this.setState({ searchTerm2: event.target.value });
  }

  onSearchChange3(event) {
    this.setState({ searchTerm3: event.target.value });
  }

  render() {
    // 被const声明的变量不能被重新赋值或重新声明
    const helloWorld1 = 'Welcome to the Road to learn React';
    // helloWorld1 = 'Bye1';

    // 被关键字let声明的变量可以被改变
    let helloWorld2 = 'Welcome to the Road to learn React';
    helloWorld2 = 'Bye2';

    // 使用const声明的变量不能被改变，但是如果这个变量是数组或者对象的话，它里面持有的内容可以被更新
    const helloWorld3 = {
      text: 'Welcome to the Road to learn React'
    };
    helloWorld3.text = 'Bye3';

    // 程序组件内的状态对象也可以使用ES6解构
    const { searchTerm2, list } = this.state;

    const { searchTerm3, list2 } = this.state;

    // ES5 memo
    // var searchTerm2 = this.state.searchTerm2;
    // var list = this.state.list;

    return (
      <div className="App">

        {/* Warning: Each child in a list should have a unique "key" prop. */}
        <h2>{helloWorld1}</h2>
        <h2>{helloWorld2}</h2>
        <h2>{helloWorld3.text}</h2>
        <div>----------------------------------------</div>
        
        {list.map(function(item){
          return <div>{item.title}</div>
        })}
        <div>----------------------------------------</div>
        {/* Warning: Each child in a list should have a unique "key" prop. */}

        {/* 渲染列表 */}
        {/* 块状函数体 */}
        {list.map(function(item){
          return (
            <div key={item.objectID}>
              <span>01</span>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })}
        <div>----------------------------------------</div>

        {/* 箭头函数 */}
        {list.map(item => {
          return (
            <div key={item.objectID}>
              <span>02</span>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })}
        <div>----------------------------------------</div>

        {/* 简洁函数体 */}
        {list.map(item => 
            <div key={item.objectID}>
              <span>03</span>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
        )}
        <div>----------------------------------------</div>
        
        {/* 在组件中使用state里的list */}
        {this.state.list.map(item => 
            <div key={item.objectID}>
              <span>04</span>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
        )}
        <div>----------------------------------------</div>
        
        {/* 和表单交互

        1. 在JSX中定义一个带有输入框的表单
        2. 为输入框定义一个onChange处理程序
          ・将输入框的值储存在本地状态中，使用React的合成事件来访问事件返回值
          ・函数被绑定到组件上，成为一个类方法，必须在构造函数里定义方法并bind它
          ・在元素中使用监听时，可以在回调函数的签名中访问到React的合成事件
          ・event对象的target属性中带有输入框的值，可以使用this.setState()来更新本地的搜索词的状态
          ・在构造函数中为searchTerm定义初始状态，输入框在开始时应该是空的，因此初始值应该是空字符串
        3. 在render()方法中，map映射列表之前，插入一个过滤的方法
          ・这个过滤方法将只会匹配标题属性中有searchTerm内容的列表项
          ・在map函数之前加入filter函数（filter函数返回一个新的数组）
        4. 在App组件外定义一个高阶函数
          ・在ES6组件类之外定义一个传递给过滤函数的函数参数，在这里不能访问到组件内的状态，
            无法访问searchTerm属性来作为筛选条件求值，需要传递searchTerm到过滤函数并返回一个新函数来根据条件求值（这叫做高阶函数）
          ・该函数接受searchTerm并返回另一个函数，返回的函数可以访问列表项目对象
            （它是传给filter函数的函数，所有的filter函数都接受一个函数作为他的输入)
          ・返回的函数将会根据函数中定义的条件对列表进行过滤
            条件是列表中项目的标题属性和输入的searchTerm参数相匹配，可以使用JavaScript内置的includes功能来实现。
            只有满足匹配时才会返回true并将项目保留在列表中。不匹配时，项目会从列表中移除。
            需要注意的是，需要把输入内容和待匹配的内容都转换成小写。
            由于使用的是一个不可变的列表，并使用filter函数返回一个新列表，所以本地状态中的原始列表没有被修改。
        5. 使用定义的isSearched()函数来过滤列表，从本地状态中传递searchTerm属性返回一个根据条件过滤列表的输入过滤函数。
           之后它会映射过滤后的列表用于显示每个列表项的元素。 */}

        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
            />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => 
            <div key={item.objectID}>
              <span>05</span>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
              <span><br></ br></span>
            </div>
        )}
        <div>----------------------------------------</div>

        {/* 和表单交互2 */}
        <form>
          <input
          type="text"
          onChange={this.onSearchChange2}
          />
        </form>
        
        {/* 使用定义的isSearched()函数来过滤你的列表，
        你从本地状态中传递searchTerm属性返回一个根据条件过滤列表的输入过滤函数。
        之后它会映射过滤后的列表用于显示每个列表项的元素。 */}
        {list.filter(isSearched2(searchTerm2)).map(item => 
            <div key={item.objectID}>
              <span>06</span>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
        )}
        <div>----------------------------------------</div>

        {/* 和表单交互3 */}
        <form>
          <input
          type="text"
          // 设置输入框的值属性（这个值已经在searchTerm3状态属性中保存了）
          // 现在输入框的单项数据流循环是自包含的，组件内部状态是输入框的唯一数据来源。
          value={searchTerm3}
          onChange={this.onSearchChange3}
          />
        </form>
        
        {list2.filter(isSearched3(searchTerm3)).map(item => 
            <div key={item.objectID}>
              <span>07</span>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss2(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
        )}
        <div>----------------------------------------</div>

      </div>
    );
  }
  
}

export default App;
