import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function loadDefaults(){
  document.getElementById('txtResult').value = 0;
}

function numbersClicked(clickedValue){
    if(document.getElementById('txtResult').value == "Error - Invalid Input"){
      document.getElementById('txtResult').value = "";  
    }
    document.getElementById('txtResult').value += clickedValue;
}

function clearResult(){
  document.getElementById('txtResult').value = 0;
}

function deletePreviousEntry(){
  if(document.getElementById('txtResult').value.length > 1){
    document.getElementById('txtResult').value = document.getElementById('txtResult').value.substring(0,document.getElementById('txtResult').value.length-1);
  }
  else{
    document.getElementById('txtResult').value = 0;
  }
}

function calculateValue(){
  try{
    document.getElementById('txtResult').value = eval(document.getElementById('txtResult').value);
  }
  catch(err){
    document.getElementById('txtResult').value = "Error - Invalid Input";
  }
}

function CalculatorButton() {	
	return <div className="mainDiv">
            <u>Calculator App</u>
            <br/>   
            <br/>           
            <input type="text" id="txtResult" className="resultBox" readOnly="true"></input>
            <br/> 
            <br/> 
            <button className="myButton" onClick={() => numbersClicked(0)}>0</button>
            <button className="myButton" onClick={() => numbersClicked(1)}>1</button>
            <button className="myButton" onClick={() => numbersClicked(2)}>2</button>
            <button className="myButton" onClick={() => numbersClicked(3)}>3</button>
            <button className="myButton" onClick={() => numbersClicked(4)}>4</button>
            <br/>
            <button className="myButton" onClick={() => numbersClicked(5)}>5</button>
            <button className="myButton" onClick={() => numbersClicked(6)}>6</button>
            <button className="myButton" onClick={() => numbersClicked(7)}>7</button>
            <button className="myButton" onClick={() => numbersClicked(8)}>8</button>
            <button className="myButton" onClick={() => numbersClicked(9)}>9</button>
            <br/>
            <button className="myButton" onClick={() => numbersClicked("+")}>+</button>
            <button className="myButton" onClick={() => numbersClicked("-")}>-</button>
            <button className="myButton" onClick={() => numbersClicked("*")}>*</button>
            <button className="myButton" onClick={() => numbersClicked("/")}>/</button>
            <button className="myButton" onClick={() => calculateValue()}>.</button>
            <br/>
            <button className="myButton" onClick={() => calculateValue()}>=</button>
            <button className="myButton" onClick={() => clearResult()}>C</button>
            <button className="myButton" onClick={() => deletePreviousEntry()}>⌫</button>
            <br/>               
    </div>;
}

ReactDOM.render(
  <CalculatorButton />, 
  document.getElementById('root'),
);


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
