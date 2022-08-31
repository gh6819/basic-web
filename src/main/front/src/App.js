import React, {useState, useEffect} from 'react';

const App = () => {
  /* 리액트 훅?
   * useEffect란, 페이지가 처음 렌더링 되고 난 후 최초 1회 실행
   * useEffect에 배열로 지정한 useState의 값이 변경되면 실행
   * 즉, useEffect는 렌더링 또는 변수의 값 혹은 오브젝트가 달라지게 되면
   * 그것을 인지하고 업데이트를 해주는 함수
   * useEffect는 콜백 함수를 부르게 되며
   * 렌더링 혹은 값/오브젝트의 변경에 따라 어떠한 함수 혹은 여러 개의
   * 함수들을 동작시킬 수 있습니다.
   */
  const [log, setLog] = useState([1,2,2,3]);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('yongho');
  const count = () => setNumber(number+1); // fn
  const nameChanger = () => {
    setLog('hello?' + name);
    // setName(name === 'yeonhi' ? 'yongho' : 'yeonhi');
  } // fn

  useEffect(() => {
    console.log('hello?');
  });

  return (
    <>
      <button onClick={count}>click</button>
      <button onClick={nameChanger}>change Name</button>
      <div>{number} / {name}</div>
      {log.map((d) => {return <div>{d}</div>;})}
    </>
  );
}

export default App;
