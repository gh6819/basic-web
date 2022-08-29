import React, {useState, useEffect} from 'react';
import axios from 'axios'

const App = () => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // axios({
    //   method:'GET',
    //   url:'https://jsonplaceholder.typicode.com/photos' // 구글 jsonplaceholder 참조
    // }).then(response => setPosts(response.data))

    axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => setPosts(response.data))
  });

  return (
    <>
      안녕하세요. 
      <ul>
        {posts.map(p => {
          if(p.id <= 20) {
            return (
              <li key={p.id}>
                <div>{p.id}. {p.title}</div>
                <div><img src={p.thumbnailUrl}></img></div>
              </li>
            )
          }
        })}
      </ul>
    </>
  );
}

export default App;
