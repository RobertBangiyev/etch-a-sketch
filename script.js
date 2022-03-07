const mainDiv = document.querySelector('.main');
const slider = document.querySelector('.slider');
const inputVal = document.querySelector('.inputVal');
const clearBtn = document.querySelector('button');

createSquares(16);

slider.addEventListener('change', () => {
    inputVal.textContent = `${slider.value} x ${slider.value}`
    createSquares(slider.value);
})

function createSquares(squareCount) {
    mainDiv.innerHTML = '';
    for(let i = 0; i < squareCount; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for(let j = 0; j < squareCount; j++) {
            const colDiv = document.createElement('div');
            colDiv.addEventListener('mouseover', () => {
                if(!colDiv.classList.contains('drawn')) {
                    colDiv.classList.add('drawn');
                }
            });
            rowDiv.appendChild(colDiv);
        }
        mainDiv.appendChild(rowDiv);
    }
}

clearBtn.addEventListener('click', () => {
    const allDrawn = document.querySelectorAll('.drawn');
    allDrawn.forEach((element) => {
        element.classList.remove('drawn');
    })
})