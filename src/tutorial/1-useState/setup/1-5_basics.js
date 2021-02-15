import React, { useState } from 'react';
import {data} from "../../../data";

const ErrorExample = () => {
  //[value, handler] = useState(default);
  const [text, setText] = useState("random title")
  const handleClick = () => {
    if (text === "random title"){
      setText("hello world");
    } else{
      setText("random title");
    }
  }

  //useState with arrays
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  //useState with objects
  const [person, setPerson] = useState({name:"Peter", age:24, message:"random message"});
  const changeMessage = () => {
    setPerson({...person, message: "hello world!"});
  }

  //multiple state value
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(25);
  const [message, setMessage] = useState("default message");

  //(complex)counter (Functional Update Form)
  const [value, setValue] = useState(0);
  const increaseValue = (value) => setValue(value+1);
  const decreaseValueWithDelay = () => {
    setTimeout(() => {
      //wrong: setValue(value - 1);
      //correct
      setValue((prevState) => {
        return prevState - 1;
      })
    },2000)
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>Change Title</button>
      {
        people.map((person) => {
          const {id, name} = person;
          return (
            <div key={id} className="item">
                {name}
                <button onClick={() => removeItem(id)}>Remove item</button>
            </div>
          );
        })
      }
      <button className="btn" onClick={() => setPeople([])}>clear items</button>
      <p style={{margin:"4rem 0"}}>
          <span>{`${person.name} is ${person.age} years old. ${person.message} `}</span>
          <button className="btn" onClick={changeMessage}>Change Message</button>
      </p>
      <section style={{margin:"4rem 0"}}>
        <h2>Counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={() => increaseValue(value)}>Increase</button>
        <button className="btn" onClick={() => decreaseValueWithDelay(value)}>Decrease</button>
        <button className="btn" onClick={() => setValue(0)}>Reset</button>
      </section>
    </React.Fragment>
  );
};

export default ErrorExample;
