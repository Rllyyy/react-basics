import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// 6:50:42

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people,setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    //if statement kinda useless because inputs are required by the document
    if (name && email) {
      const person = {name: name, email};
      setPeople((people)=> {
        return [...people, person]
      });
      console.log(person)
      setName("");
      setEmail("");
    } else {
      console.log("empty value");
    }
  }

  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input type="text" id="firstName" name="firstName" value={name} onChange={(e)=>setName(e.target.value)} required/>
          </div> 
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <button className="btn" type="submit">submit</button>
        </form>
      </article>
      {
        people.map((person, index)=> {
          const {name, email} = person;
          return <div key={index} className="item">
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        })
      }
    </React.Fragment>
  );
};

export default ControlledInputs;
