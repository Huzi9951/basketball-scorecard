let c_score_home=0
let c_score_guest=0
let score_home =document.getElementById("home-score")
let score_guest=document.getElementById("guest-score")
function add1(){
    c_score_home+=1
    score_home.textContent=c_score_home
}
function add2(){
    c_score_home+=2
    score_home.textContent=c_score_home
}
function add3(){
    c_score_home+=3
    score_home.textContent=c_score_home
}
function add4(){
    c_score_guest+=1
    score_guest.textContent=c_score_guest
}
function add5(){
    c_score_guest+=2
    score_guest.textContent=c_score_guest
}
function add6(){
    c_score_guest+=3
    score_guest.textContent=c_score_guest
}
