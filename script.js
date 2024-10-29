
//     <div class="flex" id="parent">
//         <div draggable="true" class="container"  ondrop="drop(event)" ondragover="allowDrop(event)">
//         <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" draggable="true" class="draggable" ondragstart="drag(event)">
//       </div>
//       <div draggable="true" class="container"  ondrop="drop(event)" ondragover="allowDrop(event)">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s" draggable="true" class="draggable" ondragstart="drag(event)">
//       </div>
//       <div draggable="true" class="container"  ondrop="drop(event)" ondragover="allowDrop(event)">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBD_rOB19y9Uq-TdyNSfoZB8pTdFY5csJF5A&s" draggable="true" class="draggable" ondragstart="drag(event)">
//       </div>
//       <div draggable="true" class="container"  ondrop="drop(event)" ondragover="allowDrop(event)">
//         <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" draggable="true" class="draggable" ondragstart="drag(event)">
//       </div>
//       <div draggable="true" class="container"  ondrop="drop(event)" ondragover="allowDrop(event)">
//         <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" draggable="true" class="draggable" ondragstart="drag(event)">
//       </div>
//       <div draggable="true" class="container"  ondrop="drop(event)" ondragover="allowDrop(event)">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBD_rOB19y9Uq-TdyNSfoZB8pTdFY5csJF5A&s" draggable="true" class="draggable" ondragstart="drag(event)">
//       </div>
//     </div>
// </body>
// <script>

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
