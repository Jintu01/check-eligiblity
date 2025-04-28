let checkbtn=document.getElementById('checkbtn')
checkbtn.onclick=votingof;

function votingof(){
    let age=parseInt(document.getElementById('age').value);
    let result=document.getElementById("result");

    if(age>=18){
        result.textContent="you are eligible to vote";
        result.style.color='green'
    }
    else{
        result.textContent="you are not eligible to vote";
        result.style.color='red'
    }
}



