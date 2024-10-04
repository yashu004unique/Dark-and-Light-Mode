let toggleBtn= document.getElementById('toggle');

let display= document.getElementById('mode')

function darkAndLight(){
    toggleBtn.classList.toggle('toggle-light')
    toggleBtn.classList.toggle('toggle-dark')

    display.classList.toggle('container-light')
    display.classList.toggle('container-dark')
}
    
