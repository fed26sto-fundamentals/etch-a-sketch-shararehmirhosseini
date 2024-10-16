
const secondaryBtn = document.querySelector('.secondaryBtn');

secondaryBtn.addEventListener('click', () => {
    let numXnum;
    let belowHundred = false;
    while (!belowHundred) {
        numXnum = Number(prompt('Enter Grid Size upto 100'));
        if (numXnum <= 100 && numXnum != NaN) {
            belowHundred = true;
        }
    }

    const container = document.querySelector('.container');
    container.style.backgroundColor ='black';

    container.innerHTML = '';
    let height = container.getBoundingClientRect().height;
    let width = container.getBoundingClientRect().width;

    for (let i = 0; i < (numXnum*numXnum); i++) {

        const square = document.createElement('div'); 
        square.classList.add('box'); 

        square.style.width = `${width / numXnum}px`;
        square.style.height = `${height / numXnum}px`;

        container.appendChild(square); 
        square.style.opacity = 1;

        square.addEventListener('mouseover', () => {
            
            if (square.style.opacity > 0) {
                square.style.opacity = square.style.opacity - 0.1;
            }
        });      
    }
    
});

