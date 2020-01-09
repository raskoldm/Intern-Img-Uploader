window.onload = function(){

    let dropArea = document.getElementById('drop-area')
    let inpFile = document.getElementById('inpFile');

    //perventDefaults

    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false)
      })

    function preventDefaults (e) {
        e.preventDefault()
        e.stopPropagation()
    }

    //add and remove highlight
    
    ;['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false)
      })
      
    ;['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false)
    })

    function highlight (e) {
        dropArea.classList.add('highlight')
    }

    function unhighlight (e) {
        dropArea.classList.remove('highlight')
    }

    //Drop or upload file

    dropArea.addEventListener('drop', handleDrop, false)
  
    function handleDrop(e) {
      console.log(e)
      let dt = e.dataTransfer
      let files = dt.files
      
      handleFiles(files)
    }

    inpFile.addEventListener('change', handleInput , false)
  
    function handleInput(e){
      console.log(e)
      let src = e.srcElement
      let files = src.files
  
      handleFiles(files)
    }

    function handleFiles(files) {   
      console.log(files)                                      //filelist
       for(let i = 0; i < files.length; i++) {
          let oneUpload = 100/files.length;
          previewFile(files[i],i,oneUpload)
          
       }
    }   

    //Read file

    function previewFile(file, index, oneUpload) {
        console.log(file)
        
        let reader = new FileReader()  
        reader.onloadend = function(e) {
              let img = document.getElementsByClassName('img-container')
              let src = img[index].getAttribute('src');
              img[index].src = reader.result;
              img[index].setAttribute('display', 'block');
              let widthSum = parseInt((document.getElementById('myBar').style.width));
                if (isNaN(widthSum)) { widthSum = 0 }
         
              console.log(widthSum)
              
              handleWidth(widthSum, oneUpload)  
              console.log(img[index])
              console.log('UPLOAD image');
            }   

        reader.readAsDataURL(file)                 
      }


    //Progress bar   //

      function handleWidth(width, oneUpload){ 
        width = width + oneUpload + '%';
        let moveBar  = document.getElementById('myBar');
          if (width <= 100){
          
            console.log('ooooops')
          }
          else{
            moveBar.style.width = width     //width + oneUpload;
            console.log(moveBar.style.width)
            document.getElementById('label').innerHTML = width;
          }

          console.log('change width')
      }
   


    // Drag images
      let dropListContainer = document.getElementsByClassName('file-container')
      console.log(dropListContainer)

      
      
      for(i = 0; i < dropListContainer.length; i++){
          dropListContainerItem = dropListContainer[i]
          
          dropListContainerItem.addEventListener('dragstart', function(event){
            this.style.position = "absolute";
          })

          dropListContainerItem.addEventListener('dragenter', function(event){
            this.style.borderColor = "red";
            console.log(dropListContainerItem)
          })

          dropListContainerItem.addEventListener('dragleave', function(event){
            this.style.borderColor = 'grey';
          })
          

      }

      //////////

      // let dropContainer = document.getElementById('drop-conrainer')
      // console.log(dropContainer)
      // let dragable = document.getElementById('drag-item')
      // console.log(dragable)

      // dropContainer.addEventListener('dragenter', function(event){
      //   this.style.borderColor = "red";
      // })

      // dropContainer.addEventListener('dragleave', function(event){
      //   this.style.borderColor = 'grey';
      // })

      // dropContainer.addEventListener('dragover', function(event){
      //     event.preventDefault();
      // })

      // dropContainer.addEventListener('drop', function(event){
      //   console.log(dropContainer)
      //   if(dropContainer.contains(dragable)){
      //     this.removeChild(dragable)
      //   }
      //   this.appendChild(dragable);
      //   console.log(dragable)
      // })

}


