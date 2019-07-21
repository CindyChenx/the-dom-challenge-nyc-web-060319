let counterContainer = document.getElementById('counter');
let counter = parseInt(counterContainer.innerText);
// console.log(counter);
const minusButton = document.getElementById('-');
const addButton = document.getElementById('+');
const likeButton = document.getElementById('<3');
const pauseButton = document.getElementById('pause');
// console.log(pauseButton);
const likesContainer = document.querySelector('.likes');
const commentContainer = document.getElementById('list');
let pause = false;


// timer increment every second
let startTimer = setInterval(incrementTimer, 1000);

function incrementTimer(){
    if(!pause){
        counter++;
        counterContainer.innerText = counter.toString();
    }
}

// click minus button
minusButton.addEventListener('click', e => {
    counter--;
    counterContainer.innerText = counter;
});

// click add button
addButton.addEventListener('click', e => {
    counter++;
    counterContainer.innerText = counter;
});

// click likes
let likes = {};
likeButton.addEventListener('click', e=> {
    const liTag = document.createElement('li');

    if(likes[counter]){
        likes[counter] += 1;
        likesContainer.children[likesContainer.children.length-1].innerText = `${counter} has been liked ${likes[counter]} times.`;
    } else {
        likes[counter] = 1;
        liTag.innerText = `${counter} has been liked 1  time.`
        likesContainer.appendChild(liTag);
    }
});

// click pause
pauseButton.addEventListener('click', e => {
    pause = !pause;
    if(pause){
        minusButton.disabled = true;
        addButton.disabled = true;
        likeButton.disabled = true;
        pauseButton.innerText = "resume";
        // clearInterval(startTimer);
    } else {
        minusButton.disabled = false;
        addButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.innerText = "pause";
        // startTimer = setInterval()
    }
});

// add comments
const commentForm = document.getElementById('comment-form');
commentForm.addEventListener('submit', e => {
    event.preventDefault();
    const userInput = document.getElementById('comment');
    const pTag = document.createElement('p');
    pTag.innerText = userInput.value;
    commentContainer.appendChild(pTag);
    commentForm.reset();

    // stretch functions
    // add delete button for comments
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    pTag.append(deleteButton);
    deleteButton.addEventListener('click', e => {
        pTag.remove();
    });

});




