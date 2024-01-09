//Write your pseduo code first! 

//take the value entered

// do converrsion math to change the temp

//spit out the converted temp in the correct place
document.querySelector('#cvtBtn').addEventListener('click', convert);



function convert() {
    let result = 0
    let n = document.querySelector('#num').value;
    n = ((n * 9/5) + 32);
    document.querySelector('#showMe').innerText = result;
}