const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// get user input from input field
function getUserInput()
{
  // alt: +userInput.value => string to number
  return parseInt(userInput.value);
}

// gernerate calculation description
function createAndWriteOutput(operator, resultBeforeCalc, inputNum)
{
  const calcDescription = `${resultBeforeCalc} ${operator} ${inputNum}`;
  outputResult(currentResult, calcDescription); // from vendor.js
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };

  logEntries.push(logEntry);

  console.log(logEntries);
}

function add()
{
  const inputNum = getUserInput();
  const initialResult = currentResult;
  currentResult += inputNum;
  createAndWriteOutput('+', initialResult, inputNum);
  writeToLog('ADD', initialResult, inputNum, currentResult);
}

function subtract()
{
  const inputNum = getUserInput();
  const initialResult = currentResult;
  currentResult -= inputNum;
  createAndWriteOutput('-', initialResult, inputNum);
  writeToLog('SUBTRACT', initialResult, inputNum, currentResult);
}

function multiply()
{
  const inputNum = getUserInput();
  const initialResult = currentResult;
  currentResult *= inputNum;
  createAndWriteOutput('*', initialResult, inputNum);
  writeToLog('MULTIPLY', initialResult, inputNum, currentResult);
}

function divide()
{
  const inputNum = getUserInput();
  const initialResult = currentResult;
  currentResult /= inputNum;
  createAndWriteOutput('/', initialResult, inputNum);
  writeToLog('DIVIDE', initialResult, inputNum, currentResult);
}


// function name without () used to make call that function when event occurs
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
