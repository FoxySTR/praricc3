function validation(from){
    let result = true;
    return result
}




document.getElementById('add-form').addEventListener('submit-add', function(event){
    event.preventDefault()

    if(validation(this)==true){
        alert('Form Succes')
    }

})