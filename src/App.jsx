import Header from "./Header"
import Results from "./Results"
import InputComponent from "./InputComponent"
import { useState } from 'react';

const obj = {
  'Initial Investment': null,
  'Annual Investment': null,
  'Expected Return': null,
  'Duration': null
};

function App() {
  const [inputValues, setInputValues] = useState(obj);
  return (
    <>
      <Header />
      <InputComponent inputValues={inputValues} setValues={setInputValues} />
      <Results inputValues={inputValues} />
    </>
  )
}

export default App
