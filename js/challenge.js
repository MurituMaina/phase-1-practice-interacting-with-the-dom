window.addEventListener('DOMContentLoaded',counting)
// // setInterval(()=> {cosole.log("beginning")},1000)
const pause = document.getElementById('pause');
pause.addEventListener('click', paused);

function paused(){
    pause.innerText= 'restart';
    pause.id = 'restart'
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    clearInterval(counted)
}




function counting(){
}
let counter = document.querySelector("#counter");
let f =0

const counted = setInterval(()=> {
       f++;
    counter.innerHTML = f;

},1000)
let minus =document.querySelector("#minus")
minus.addEventListener("click", decreaseCounter
)
function decreaseCounter() { 
        for(let i=0; i>=0; i--){
            if(f>0){
            f -= 1
            f;}
            f;
        }
        counter.innerHTML = f;
    }


let plus =document.querySelector("#plus")
plus.addEventListener("click", () =>
{
    for(let i=1; i<=1; i++){
        f +=1
         f;
    }
    counter.innerHTML = f;
})



let heart = document.querySelector("#heart");
heart.addEventListener('click', likedTimes)
let clicks = 0;

let counterGet = parseInt(document.getElementById("counter").innerText)

let counterArr = [];
function likedTimes (){
    let value = parseInt(counter.innerHTML)
    counterArr.push(value);

    const list  = document.createElement('ul')
   

    clicks +=1;
list.innerHTML = `<li>${counter.innerText} has been liked ${clicks} of times.</li>`;


let likesItem = document.querySelector(".likes");
likesItem.append(list)



}

// //Adding the comment
let form = document.querySelector("#comment-form");
form.addEventListener("submit",submission)

function submission (event){    
event.preventDefault();
let commentInput = document.getElementById("comment-input").value;
let outputComment = document.createElement('li');
outputComment.innerHTML = commentInput;
let comments = document.getElementById("list")
comments.append(outputComment);
form.reset();
}

const restart= document.getElementById('restart');
restart.addEventListener('click', resumes);
function resumes(){
    restart.innerText= 'pause';
    restart.id = 'pause'
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    clearInterval(counted)
}
