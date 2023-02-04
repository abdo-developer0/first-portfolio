// This is The Main Java Script File

function openMenu(menuName){
    const op = window[menuName]
    state = op.style.display
    if(state=="none") op.style.display = 'block'
    else op.style.display = 'none'
    
const items = window.menu.children

  for(i=0;i<items.length;i+=1){
    items[i].onclick = function(){
        window.menu.style.display = "none"
    }
  }
    
}


btnTop = document.createElement("button")
btnTop.textContent = "Top"
btnTop.style.position = "fixed"
btnTop.style.right = "5vw"
btnTop.style.bottom = "5vh"
btnTop.style.width = "8vw"
btnTop.style.height = "8vh"
btnTop.className = "btn-scroll-top"


document.body.append(btnTop)

window.scrollTo(-100)
