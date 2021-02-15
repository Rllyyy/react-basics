import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  const firstValue = 'The OR circuit operator takes the first true value' || 'true';
  const secondValue = 'hello world' && "The AND circuit operator takes the last true value" ;

  return (
    <>
      <h3>first value: {firstValue}</h3>
      <h3>second value : {secondValue}</h3>

      <h2>{text || 'john doe'}</h2>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h2>Error...</h2>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2 style={{marginTop:"10px"}}>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;

