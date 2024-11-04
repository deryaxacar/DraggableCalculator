const resultElement = document.getElementById("result");
resultElement.textContent = '0';

const calculator = document.getElementById("calculator");


function appendToResult(value) {
    console.log(resultElement.textContent);
    resultElement.textContent += value;
}

function clearResult() {
    resultElement.textContent = '0';
}

function calculateResult() {
    try {
        resultElement.textContent = eval(resultElement.textContent) || '';
    } catch (error) {
        resultElement.textContent = "error";
    }
}

function startDrag(e) {
    let offsetX = e.clientX - calculator.getBoundingClientRect().left;
    let offsetY = e.clientY - calculator.getBoundingClientRect().top;

    function dragMove(event) {
        calculator.style.left = (event.clientX - offsetX) + 'px';
        calculator.style.top = (event.clientY - offsetY) + 'px';
    }

    function dragEnd() {
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('mouseup', dragEnd);
    }

    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
}

calculator.addEventListener('mousedown', startDrag);
