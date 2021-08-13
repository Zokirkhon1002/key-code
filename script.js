let container = document.querySelector(".container");

window.addEventListener('keypress',(event)=>{
    container.innerHTML = `

    <div class="style">
    ${event.key === ' '? 'Space' : event.key}
    <small>event.key</small>
    </div>

    <div class="style">
    ${event.keyCode}
    <small>event.keyCode</small>
    </div>

    <div class="style">
    ${event.code}
    <small>event.code</small>
    </div>
    `
});