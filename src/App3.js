import React, { Component } from 'react';
import './App3.css';

// 第三个JS类追加
// 通过API获取数据

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100';

const PATH_BASE = 'https://hn.algolia.com/api/v1';

// 错误处理（不存在的URL）
// const PATH_BASE = 'https://hn.foo.var.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

// ES6
const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;
console.log(url);

// ES5
var url2 = PATH_BASE + PATH_SEARCH + '?' + PARAM_SEARCH + DEFAULT_QUERY;
console.log(url2);

const url3 = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}`;
console.log(url3);

// 扩展操作符 start
const userList = ['Robin', 'Andrew', 'Dan'];
const additionalUser = 'Jordan';
const allUsers = [ ...userList, additionalUser ];

console.log(allUsers);

const oldUser = ['Robin2', 'Andrew2'];
const newUser = ['Dan2', 'Jordan2'];
const allUsers2 = [ ...oldUser, ...newUser ];

console.log(allUsers2);

const userNames = { firstname: 'Robin', lastname: 'Wieruch' };
const age = 28;
const user = { ...userNames, age };

console.log(user);

const userNames2 = { firstname: 'Robin2', lastname: 'Wieruch2' };
const age2 = { age: 30};
const user2 = { ...userNames2, ...age2 };

console.log(user2);

// 扩展操作符 end


// 条件渲染 start
const result = true && 'Hello World';
console.log(result);

const result2 = false && 'Hello World';
console.log(result2);

// 条件渲染 end

class App3 extends Component {

 constructor(props) {
  super(props);

  this.state = {
    // result: null,

    // 在初始化组件状态中重命名result对象为results。定义一个临时的searchKey用来储存单个result。
    results: null,
    searchKey: '',
    searchTerm: DEFAULT_QUERY,
    error: null,
  };

  this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
  this.setSearchTopStories = this.setSearchTopStories.bind(this);
  this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
  this.onSearchChange = this.onSearchChange.bind(this);
  this.onSearchSubmit = this.onSearchSubmit.bind(this);
  this.onDismiss = this.onDismiss.bind(this);
}

needsToSearchTopStories(searchTerm) {
  return !this.state.results[searchTerm];
}

setSearchTopStories(result) {
  const { hits, page } = result;

  const { searchKey, results } = this.state;

  // const oldHits = page !== 0
  //   ? this.state.results.hits
  //   : [];

  const oldHits = results && results[searchKey]
    ? results[searchKey].hits
    : [];
  
  const updatedHits = [
    ...oldHits,
    ...hits
  ];

  this.setState({
    // result: { hits: updatedHits, page }

    // 通过searchKey来存储每个结果
    results: {
      ...results,
      [searchKey]: { hits: updatedHits, page }
    }
  });
}

fetchSearchTopStories(searchTerm, page = 0) {

  fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(e => this.setState({ error: e }));
}

componentDidMount() {
  const { searchTerm } = this.state;

  // searchKey的值必须在发起请求之前设置。它的值来自searchTerm。
  // 你可能会想：为什么我们不直接使用searchTerm呢？这是在我们继续之前需要理解的重点。
  // searchTerm是一个动态的变量，因此它随输入的关键字变化而变化。
  // 然而，这里你需要的是一个稳定的变量。它保存最近一次提交给API的搜索词，也可以用它来检索结果集中的某个结果。
  // 由于它指向缓存中的当前返回结果，因此还可以在render()方法中用来显示当前结果。
  this.setState({ searchKey: searchTerm });
  this.fetchSearchTopStories(searchTerm);
}

onDismiss(id) {
  const { searchKey, results } = this.state;
  const { hits, page } = results[searchKey];

  const isNotId = item => item.objectID !== id;
  // const updatedHits = this.state.result.hits.filter(isNotId);

  const updatedHits = hits.filter(isNotId);

  // this.setState({
  //   result: Object.assign({}, this.state.result, { hits: updatedHits })
  // });

  // 扩展操作符
  this.setState({
    // result: { ... this.state.result, hits: updatedHits }

    results: {
      ...results,
      [searchKey]: { hits: updatedHits, page }
    }
  });

}

onSearchChange(event) {
  this.setState({ searchTerm: event.target.value });
}

onSearchSubmit(event) {
  const { searchTerm } = this.state;

  this.setState({ searchKey: searchTerm });
  // this.fetchSearchTopStories(searchTerm);

  if (this.needsToSearchTopStories(searchTerm)) {
    this.fetchSearchTopStories(searchTerm);
  }
  
  event.preventDefault();
}

  render() {

    const {
      searchTerm,
      // result

      results,
      searchKey,
      error
    } = this.state;

    const page = (
      // result &&
      // result.page

      results &&
      results[searchKey] &&
      results[searchKey].page
    ) || 0;

    const list = (
      results &&
      results[searchKey] &&
      results[searchKey].hits
    ) || [];

    // if (!result) { return null; }

    // if (error) {
    //   return <p>Something went wrong.</p>
    // }

    return (
      <div className="page">
        <div className='interactions'>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>

        {/* { result
          ? <Table
          list={result.hits}
          onDismiss={this.onDismiss}
        />
        : null
        } */}

        {/* 条件渲染 */}
        { result &&

        error
        ?  <div className='interactions'>
             <p>Something went wrong.</p>
           </div>
        :  <Table
            // list={result.hits}

            list={list}
            onDismiss={this.onDismiss}
          />
        }
        <div className="interactions">
          {/* <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}> */}
          
          <Button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
            More
          </Button>
        </div>
        <div>----------------------------------------</div>

      </div>
    );
  }
  
}

const largeColumn = {
  width: '40%',
};

const midColumn = {
  width: '30%',
};

const smallColumn = {
  width: '10%',
};

const Table = ({ list, onDismiss }) =>
  <div className="table">
    {list.map(item =>
      <div className="table-row">
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

class Button extends Component {
  render() {
    const {
      onClick,
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

const Search = ({
  value,
  onChange,
  onSubmit,
  children
}) =>
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    <button type="submit">
      {children}
    </button>

  </form>

export default App3;
