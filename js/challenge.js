window.addEventListener('DOMContentLoaded',counting)
// setInterval(()=> {cosole.log("beginning")},1000)

function counting(){
}
let counter = document.querySelector("#counter");
let f =0

const counted = setInterval(()=> {
       f++;
    counter.innerHTML = f
    // console.log(counter.innerHTML);

},1000)

function decreaseCounter() { 
    let f =0
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
        // console.log(f)
         f;
    }
    counter.innerHTML = f;
})

let minus =document.querySelector("#minus")
minus.addEventListener("click", decreaseCounter
)
console.log(counter.innerHTML);

let heart = document.querySelector("#heart");
heart.addEventListener('click', likedTimes)
let clicks = 0;
// let counterGet = document.getElementById("counter").innerHTML;
let counterGet = parseInt(document.getElementById("counter").innerText)
console.log(counter)
// const clicked values = [];
clickedB.push(counter)

function likedTimes (){
console.log(counter)
//if clicks 3 and number is the same
clicks +=1;
const list  = document.createElement('p')
list.innerHTML = `<p>${counter.innerText} has been liked ${clicks} of times.</p>`;
let likesItem = document.querySelector(".likes");
likesItem.append(list)

// console.log("liked")
}

//Adding the comment
let form = document.querySelector("form");
form.addEventListener("submit",
(e) =>
{
e.preventDefault();
let commentInput = document.getElementById("comment-input").value;
let outputComment = document.createElement('p');
outputComment.innerHTML = commentInput;
let comments = document.querySelector("#list")
comments.append(outputComment);
form.reset();

}
)

const pause = document.getElementById('pause');
pause.addEventListener('click', paused);

function paused(){
    // if(class )
    pause.classList.toggle("resume")
pause.innerText= 'resume';
minus.disabled = true;
plus.disabled = true;
heart.disabled = true;
submit.disabled = true;
clearInterval(counted)

}

const resume = document.getElementsByClassName('resume');
resume.addEventListener('click', resumes);

function resumes(){
    // if(class )
    // re.classList.toggle("resume")
resume.innerText= 'resume';
minus.disabled = false;
plus.disabled = false;
heart.disabled = false;
submit.disabled = false;
// clearInterval(counted)

}

