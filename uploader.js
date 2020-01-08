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
          previewFile(files[i],i)
          let widthSum = (document.getElementById('myBar').style.width);
          console.log(widthSum)
                            // const parsed = parseInt(x, base);
                            // if (isNaN(parsed)) { return 0 }
          let oneUpload = 25 + '%';
          handleWidth(widthSum, oneUpload)
          
       }
    }   

    //Read file

    function previewFile(file, index) {
        console.log(file)
        
        let reader = new FileReader()  
        reader.onloadend = function(e) {
              let img = document.getElementsByClassName('img-container')
              let src = img[index].getAttribute('src');
              img[index].src = reader.result;
              img[index].setAttribute('display', 'block');
              console.log(img[index])
            }
            //barMove(10 , 30);    
        reader.readAsDataURL(file)                 
      }


    //Progress bar   //
      function handleWidth(width, oneUpload){ 
        
        width = width + oneUpload;
        let moveBar  = document.getElementById('myBar');
        moveBar.style.width = width     //width + oneUpload;
        console.log(moveBar.style.width)
      }
   
    // function barMove(width, oneUpload){
    //   var elem = document.getElementById('myBar');
    //   var id =setInterval(frame,25);
    //   function frame(){
    //       if (width >= 100) {
    //           clearInterval(id);      
    //       }
    //       else{    
    //           width + oneUpload;
    //           elem.style.width = width + '%';
    //           document.getElementById("label").innerHTML = width*1 + '%';
    //       }
    //   }
    // } 

    // Drag images



}


