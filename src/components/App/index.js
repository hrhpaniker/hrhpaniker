import React, {useState} from 'react';
import './App.css';
import Button from '../Button';

const App = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const storage = () => {
    let store = [];
    store.push(value);
    const dataDisplay = localStorage.setItem("dataDisplay",  JSON.stringify(store));
    const display = document.getElementById("val");
  };

storage();



  const handleButtonPress = content => () => {
    const num = parseFloat(value);

    if (content === "C") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

     if (content === "←") {
      setValue(num.toString().slice(0, -1));
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "÷") {
      if (operator !== null) {
        if (operator === "÷") {
          setMemory(memory / num);
        }
        if (operator === "×") {
          setMemory(memory * num);
        }

        if (operator === "−") {
          setMemory(memory - num);
        }

        if (operator === "+") {
          setMemory(memory + num);
        }
      } else {
          setMemory(num);
      }
      setValue(0);
      setOperator("÷");
      return;
    }

    if (content === "×") {
      if (operator !== null) {
        if (operator === "÷") {
          setMemory(memory / num);
        }
        if (operator === "×") {
          setMemory(memory * num);
        }

        if (operator === "−") {
          setMemory(memory - num);
        }

        if (operator === "+") {
          setMemory(memory + num);
        }
      } else {
        setMemory(num);
      }
      setValue(0);
      setOperator("×");
      return;
    }

    if (content === "−") {
      if (operator !== null) {
        if (operator === "÷") {
          setMemory(memory / num);
        }
        if (operator === "×") {
          setMemory(memory * num);
        }

        if (operator === "−") {
          setMemory(memory - num);
        }

        if (operator === "+") {
          setMemory(memory + num);
        }
      } else {
        setMemory(num);
      }
      setValue(0);
      setOperator("−");
      return;
    }

    if (content === "+") {
      if (operator !== null) {
        if (operator === "÷") {
          setMemory(memory / num);
        }
        if (operator === "×") {
          setMemory(memory * num);
        }

        if (operator === "−") {
          setMemory(memory - num);
        }

        if (operator === "+") {
          setMemory(memory + num);
        }
      } else {
        setMemory(num);
      }
      setValue(0);
      setOperator("+");
      return;
    }

    if (content === "=") {
      if (!operator) return;

      if (operator === "÷") {
        setValue((memory / num).toString());
      }

      if (operator === "×") {
        setValue((memory * num).toString());
      }

      if (operator === "−") {
        setValue((memory - num).toString());
      }

      if (operator === "+") {
        setValue((memory + num).toString());
      }
      setMemory(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue (value + ".");
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue((parseFloat(num + content)).toString());
    }

  };

  return (
    <div className = "App">
      <div className = {!memory ? "0" : `${memory} ${operator} ${value}`}>
        {!value.length && !memory ? "0" : value || memory && operator}</div>
     <div className = "display" id = "val">{value}</div>
     <div className = "buttons">
       <Button onButtonClick = {handleButtonPress} content = "C" type = "colorful" />
       <Button onButtonClick = {handleButtonPress} content = "←" type = "colorful" />
       <Button onButtonClick = {handleButtonPress} content = "%" type = "colorful" />
       <Button onButtonClick = {handleButtonPress} content = "÷" type = "colorful" />
       <Button onButtonClick = {handleButtonPress} content = "7" />
       <Button onButtonClick = {handleButtonPress} content = "8" />
       <Button onButtonClick = {handleButtonPress} content = "9" />
       <Button onButtonClick = {handleButtonPress} content = "×" type = "colorful" />
       <Button onButtonClick = {handleButtonPress} content = "4" />
       <Button onButtonClick = {handleButtonPress} content = "5" />
       <Button onButtonClick = {handleButtonPress} content = "6" />
       <Button onButtonClick = {handleButtonPress} content = "−" type = "colorful" />
       <Button onButtonClick = {handleButtonPress} content = "1" />
       <Button onButtonClick = {handleButtonPress} content = "2" />
       <Button onButtonClick = {handleButtonPress} content = "3" />
       <Button onButtonClick = {handleButtonPress} content = "+" type = "colorful" />
       <Button onButtonClick = {handleButtonPress} content = "0" />
       <Button onButtonClick = {handleButtonPress} content = "." />
       <Button onButtonClick = {handleButtonPress} content = "=" type = "colorful" />
     </div>
  </div>
  )
};

export default App;