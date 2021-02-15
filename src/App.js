import React from 'react';
import SetupUseState from "./tutorial/1-useState/setup/1-5_basics";
import SetupUseEffect from "./tutorial/2-useEffect/setup/1-3_useEffect"
import Final from "./tutorial/1-useState/final/1-error-example";
import SetupConditionalRendering from "./tutorial/3-conditional-rendering/setup/1-conditionalRendering";
import SetupShortCircuit from "./tutorial/3-conditional-rendering/setup/2-short-circuit";
import SetupShowHide from "./tutorial/3-conditional-rendering/setup/3-show-hide";
import SetupFormBasicsControlled from "./tutorial/4-forms/setup/1-controlled-inputs";
import SetupFormMultipleInput from "./tutorial/4-forms/setup/2-multiple-inputs";
import SetupUseRef from "./tutorial/5-useRef/setup/1-useRef-basics";
import SetupReducer from "./tutorial/6-useReducer/setup";

// 07:29:51


function App() {
  return (
    <div className='container'>
      {/* <SetupUseState /> */}
      {/* <SetupUseEffect /> */}
      {/* <SetupConditionalRendering /> */}
      {/* <SetupShortCircuit /> */}
      {/* <SetupShowHide /> */}
      {/* <SetupFormBasicsControlled /> */}
      {/* <SetupFormMultipleInput /> */}
      {/* <SetupUseRef /> */}
      <SetupReducer />
      {/* <Final /> */}
    </div>
  )
}

export default App
