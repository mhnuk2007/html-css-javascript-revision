// =======================
// FUNCTION DECLARATION
// =======================
function highlightTitle() {
    const title = document.querySelector('#title');
    title.classList.add('highlight'); // Add a class
}

// Call when button clicked
document.querySelector('#btn-declaration').addEventListener('click', highlightTitle);


// =======================
// FUNCTION EXPRESSION
// =======================
const changeTitleText = function() {
    const title = document.querySelector('#title');
    title.textContent = "Text changed with function expression!";
};

// Call when button clicked
document.querySelector('#btn-expression').addEventListener('click', changeTitleText);


// =======================
// ARROW FUNCTION
// =======================
const resetTitle = () => {
    const title = document.querySelector('#title');
    title.textContent = "Hello World!";
    title.classList.remove('highlight'); // Remove highlight class
};

// Call when button clicked
document.querySelector('#btn-arrow').addEventListener('click', resetTitle);