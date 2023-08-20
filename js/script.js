const contextMenu = document.querySelector(".context-menu");
const option = document.querySelectorAll(".context-menu li");

let contextMenuWidth, contextMenuHeight;
if(contextMenu) {
    contextMenuWidth = contextMenu.offsetWidth;
    contextMenuHeight = contextMenu.offsetHeight;
    console.log(contextMenuWidth)
}

contextMenu.style.display = "none";
contextMenu.style.opacity = 100;

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    showContextMenu(e.pageX, e.pageY);
})

function showContextMenu(x, y) {
    const xPosition = (x + contextMenuWidth < window.innerWidth)? x : x - (contextMenuWidth + 5);
    const yPosition = (y + contextMenuHeight < window.innerHeight)? y : y - (contextMenuHeight + 5);
    contextMenu.style.display = "inline-block";
    contextMenu.style.left = xPosition + "px";
    contextMenu.style.top = yPosition + "px";
}

option.forEach(e => {
    e.addEventListener("click", () => {
        hideContextMenu();

        // write the function here
        // ...
    })
})

// hide the context menu if clicked outside
document.addEventListener("click", (e) => {
    if(!contextMenu.contains(e.target)) {
        hideContextMenu()
    }
})

function hideContextMenu() {
    contextMenu.style.display = "none";
}
