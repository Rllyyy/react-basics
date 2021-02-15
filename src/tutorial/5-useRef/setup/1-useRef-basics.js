import React, { useEffect, useRef } from 'react';

// preserves the value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  }
  
  useEffect(() => {
    refContainer.current.focus();
  });

  return (
  <React.Fragment>
    <form action="" className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input">Value: </label>
        <input type="text" name="input" ref={refContainer}/>
        <button type="submit" class="btn">Submit</button>
      </div>
    </form>
  </React.Fragment>
  );
};

export default UseRefBasics;
