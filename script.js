let draggedImage = null;
    function allowDrop(event){
        event.preventDefault();
    }
    function drag(event){
        draggedImage = event.target;
    }

    function drop(event){
        event.preventDefault();
        const targetContainer = event.currentTarget;

       if(targetContainer !== draggedImage.parentElement){
        const targetImage = targetContainer.querySelector('background-image');

        const tempSrc = targetImage.url;
        targetImage.url = draggedImage.url;
        draggedImage.url = tempSrc;
       }
    }
