import React, {useState} from 'react';
import './App.css';
import './style/style.css';

const Header = () => {
  let name = 'yongho.na_';

  return <div>
            <div className='f_bold'>{name}</div>
        </div>;
}

const Body = ({count, setCount, history, fnHistory}) => {
  return (<div>
    <div>{count}</div>
    <p>
      <button onClick={() => {setCount(count+1)}}>증가</button>
      <button onClick={fnHistory}>기록</button>
    </p>
    <span>기록내용</span>
    <hr/>
    <div id='historyDiv'>
      {history.length > 0 ? history.map((count) => (
        <div>{count}</div>
      )) : '기록없음'}
    </div>
  </div>);
}

const App = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  function fnHistory() {
    setHistory([...history, count]);
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Body count={count} setCount={setCount} history={history} fnHistory={fnHistory}/>
      </header>
    </div>
  );
}



export default App;
