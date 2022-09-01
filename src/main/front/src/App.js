import React, {useState, useEffect} from 'react';

const App = () => {
  const [log, setLog] = useState([]);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('yongho');
  const count = () => setNumber(number+1); // fn
  const nameChanger = () => {
    setName(name=='yongho'?'myeongchul':'yongho');
    setLog([...log, '> hello? ' + name + '.']);
  } // fn

  useEffect(() => {
    console.log('hello?');
  });

  return (
    <>
      <button onClick={count}>click</button>
      <button onClick={nameChanger}>change Name</button>
      <div>{number} / {name}</div>
      <hr/>
      {log.map((d) => (<div>{d}<p/></div>))}
    </>
  );
}

export default App;
