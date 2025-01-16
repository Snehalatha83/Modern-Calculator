// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Append value to the display
  function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  // Calculate the result
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
      display.value = 'Error'; // Handle invalid expressions
    }
  }
  