function drop(event){
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id); // image 1

    const targetElement = event.target; // image 2
    if(targetElement.classList.contains('draggable')){
        const draggedImage = draggable.style.backgroundImage;
        const targetImage = targetElement.style.backgroundImage;

        draggable.style.backgroundImage = targetImage;
        targetElement.style.backgroundImage = draggedImage;
    }
}