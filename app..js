const colors = ['lightgreen', 'lightblue', 'lightpink'];
const votes = {
    lightgreen: 0,
    lightblue: 0,
    lightpink: 0
};

let currentColor = null;


function createColorButton(color){
    const button = document.getElementById(`${color}-btn`)
    button.addEventListener('click', ()=>{
        const background = document.querySelector('.section-center')
        background.style.backgroundColor = color;
        currentColor = color;
        updateVoteDisplay()
    })
}
     colors.forEach(color => {
         createColorButton(color);
     })

function updateVoteDisplay(){
    const colorName = document.getElementById('color-name');
    const vote = document.getElementById('vote-count');
    colorName.textContent = currentColor;
    vote.textContent = votes[currentColor]
    //console.log(votes)
}

function createVoteButton() {
    const voteButton = document.getElementById('vote-btn');
    voteButton.addEventListener('click',()=>{
        if(currentColor){
            votes[currentColor]++
            updateVoteDisplay()
        } else {
            alert('please select a color first')
        }
    })
}

function reset(){
        for(let key in votes){
          votes[key] = 0;
        }
    updateVoteDisplay()
}
const resetBtn = document.getElementById('reset-btn')
resetBtn.addEventListener('click', reset)

createVoteButton();
