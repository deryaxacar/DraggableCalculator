<div align="center">
  <h2>Draggable Calculator</h2>
</div>

This project is a simple calculator application built using HTML, CSS, and JavaScript. It allows users to perform basic mathematical operations through a user-friendly interface. Additionally, the calculator window is **draggable**, making it more interactive.

---

![GIF](https://github.com/deryaxacar/DraggableCalculator/blob/main/cvid.gif)

---

**Features**

- **Basic Operations**: Addition, subtraction, multiplication, and division.
- **User Interface**: Clean and simple buttons for an intuitive experience.
- **Draggable Window**: The calculator panel can be moved around by dragging.
- **Clear Button**: "C" button clears the input field.
- **Instant Calculation**: "=" button instantly calculates and displays the result.

**File Structure**

- **index.html**: Contains the main HTML structure of the app.
- **style.css**: Defines the styling and layout.
- **script.js**: Provides interactivity and calculator logic using JavaScript.

---

<div align="center">
  <h2>Functions</h2>
</div>

**`appendToResult(value)`**
- **Description**: Appends user input (numbers or operations) to the display.
- **Usage**: Triggered by button clicks. For example, clicking the "7" button calls `appendToResult('7')`.

---

```js
/**
 * @param {string} value - The value to be added (number or operator).
 */
function appendToResult(value) {
    console.log(resultElement.textContent);
    if (resultElement.textContent === '0') {
        resultElement.textContent = value; // Replace initial '0' with new value.
    } else {
        resultElement.textContent += value; // Append new value.
    }
}

```

---

**`clearResult()`**
- **Description**: Used to clear the calculator’s input/display field.
- **Usage**: Triggered when the "C" button is clicked.

---

```js
function clearResult() {
    resultElement.textContent = '0';
}

```

---

**`calculateResult()`**
- **Description**: Calculates the mathematical expression in the input field and displays the result.
- **Usage**: Triggered when the "=" button is clicked. The calculation is performed using the `eval()` function.

---

```js
function calculateResult() {
    try {
        resultElement.textContent = eval(resultElement.textContent) || '';
    } catch (error) {
        resultElement.textContent = "error"; // Displays 'error' message in case of a failure.
    }
}

```

---

**`startDrag(e)`**
- **Description**: Enables the calculator to be dragged by the user. This function is triggered when the user clicks on the calculator’s header.
- **Usage**: Called when the user clicks and drags the header area of the calculator.

---

```js
/**
 * @param {MouseEvent} e - The mouse click event object.
 */
function startDrag(e) {
    // Calculate the distance between the mouse click point
    // and the top-left corner of the calculator to maintain accurate positioning during drag.
    let offsetX = e.clientX - calculator.getBoundingClientRect().left;
    let offsetY = e.clientY - calculator.getBoundingClientRect().top;

    /**
     * Function that runs as the user moves the mouse.
     * Updates the position of the calculator.
     * 
     * @param {MouseEvent} event - The mousemove event object.
     */
    function dragMove(event) {
        // Set the new position of the calculator.
        calculator.style.left = (event.clientX - offsetX) + 'px';
        calculator.style.top = (event.clientY - offsetY) + 'px';
    }

    /**
     * Function that runs when the user releases the mouse.
     * Ends the dragging action and removes event listeners.
     */
    function dragEnd() {
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('mouseup', dragEnd);
    }

    // Start listening for mouse movements and call dragMove.
    // Stop listening when the mouse button is released.
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
}


```

---

This README file was prepared by Derya ACAR.

---
