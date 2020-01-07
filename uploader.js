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
      console.log(files)                            //filelist
       for(let i = 0; i < files.length; i++) {
            
           previewFile(files[i])
           console.log(files[i])
       }
    }   

    //Read file

    function previewFile(file) {
        let reader = new FileReader()
        
        
        reader.onloadend = function(e) {
              let fileContainer = document.getElementsByClassName('file-container')
              for(i = 0; i < fileContainer.length; i++){
              let img = document.getElementsByClassName('img-container')
              let src = img[i].getAttribute('src');
              img[i].src = reader.result;
              img[i].setAttribute('display', 'block');
              console.log(img)

              barMove();
            }
        }
        reader.readAsDataURL(file)                  // i is not defined
      }


    //Progress bar

    function barMove(width, oneUpload){
      var elem = document.getElementById('myBar');
      width = 0;
      var id =setInterval(frame,30);
      oneUpload = 40;
      function frame(){
          if (width >= oneUpload) {
              clearInterval(id);
              width = width + oneUpload;     
          }
          else{    
              width++;
              elem.style.width = width + '%';
              document.getElementById("label").innerHTML = width*1 + '%';
          }
      }
    } 

    // Drag images




}


