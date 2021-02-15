import React, { useState, useEffect } from 'react';
//useEffect by default runs after every re-render

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    if(value >= 1){
      document.title = `New Messages(${value})`
    }
    //second parameter ([]) aka dependencies
  },[value]);

  //run only on initial render
  useEffect(() =>{
    console.log("Hello world (runs only on initial render)");
  }, []);

  //cleanup function
  const [size, setSize] = useState(window.innerHeight);
  
  const checkSize = () => {
  setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    //invoked onced exited to prevent memory leak; could also be done with empty condition ([])
    return () => {
     window.removeEventListener("resize", checkSize);
    }
  });

  //fetch Data with useEffect
  const url = "https://api.github.com/users";
  const [btnClick, setBtnClick] = useState(false);
  const [users, setUsers] = useState([]);
  const [buttonText, setButtonText] = useState("Show Users")


  const btnClickEvent = (value) => {
    if (value === false) {
      setBtnClick(true);
      setButtonText("Hide Users")
    } else{
      setBtnClick(false);
      setButtonText("Show Users")
    }
  }
  
  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log("fetching data...")
  }

  useEffect(() => {
    if (btnClick === true){
      getUsers();
    } else {
      setUsers([])
    }
  },[btnClick])

  //return JSX
  return (
    <React.Fragment>
      <h2>useEffect Basics</h2>
      <h3>{value}</h3>
      <button className="btn" onClick={() => setValue(value+1)}>Increase</button>
      <h2 style={{marginTop:"20px"}}>Window</h2>
      <h3>{size} PX</h3>
      <h2>Fetch Data from X</h2>
      <button className="btn" onClick={() => btnClickEvent(btnClick)}>{buttonText}</button>
      <ul className="users">
        {users.map((user) => {
          const {id, login, avatar_url, html_url} = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login}/>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default UseEffectBasics;
