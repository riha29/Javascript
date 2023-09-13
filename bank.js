document.getElementById('login-submit').addEventListener('click', function (){
    // get email
    const emailField= document.getElementById('user-email')
    const userEmail= emailField.value
    // get password
    const passwordField= document.getElementById('user-password')
    const userPassword= passwordField.value

    if (userEmail=='faozia@gmail.com' && userPassword=='faozia'){
        window.location.href= 'banking.html'
    }
    else{
        console.log('invalid')
    }
})

