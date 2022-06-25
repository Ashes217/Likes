const coutners = [
    document.querySelector('.coutner-1'),
    document.querySelector('.counter-2'),
    document.querySelector('.counter-3')
];

function increaseLikes(num){
    coutners[num].innerText++;
}