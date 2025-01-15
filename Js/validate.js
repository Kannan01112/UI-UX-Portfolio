
$(function () {
    'use strict'
  
    
    var forms = document.querySelectorAll('.needs-validation')
  
    
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })


  $(function(){
    $('.btn').on('submit', function(event){
        event.preventDefault()
        event.stopPropagation()
    });
});