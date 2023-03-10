//Get elemets
let passwordInput = document.getElementById('password')
let confirmPasswordInput = document.getElementById('confirmPassword')
let notification = document.getElementById('notification')
let registrateButton = document.getElementById('registrate')
let url = document.URL.split('/').splice('0',3).join('/')

//Checkboxes
let superAdmin = document.getElementById('superAdmin')
let roomMap = document.getElementById('roomMap')
let professor = document.getElementById('professor')

superAdmin.addEventListener('click', ()=> {
    roomMap.checked = false
    professor.checked = false
})
roomMap.addEventListener('click', ()=> {
    superAdmin.checked = false
    professor.checked = false
})
professor.addEventListener('click', ()=> {
    roomMap.checked = false
    superAdmin.checked = false
})

//Registrate user
async function createUser(){
    //Get values
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let password = passwordInput.value
    let confirmPassword = confirmPasswordInput.value
    let secretKey = sessionStorage.getItem('token')
    let newDate = new Date()
    let currentDate = await `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
    let creator = await sessionStorage.getItem('userName')
    let permissions = ''
    Array.from(document.querySelectorAll('input[type=checkbox]')).forEach(element => {
        if(element.checked){
            permissions = element.id
        }
    })

    //Check if passwords match
    if(password != confirmPassword || password == ''){
        passwordInput.style.borderColor = 'rgb(200, 82, 115)'
        confirmPasswordInput.style.borderColor = 'rgb(200, 82, 115)'
        notification.innerHTML = 'Senhas não conferem!'
        notification.style.borderColor = 'rgb(200, 82, 115)'
    }else{
        let login = firstName.toLowerCase() + '.' + lastName.toLowerCase()
        let response = await fetch(url + '/.netlify/functions/create',{
            method: 'post',
            body: JSON.stringify({
                login,
                password,
                permissions,
                currentDate,
                creator,
                secretKey
            })
        })
        let data = await response.json()
        if (data.resposta == 'Admin created successfully'){
            getUsers()
            notification.style.color = 'rgb(44, 117, 44)'
            notification.innerHTML = `Usuário "${login}" criado com sucesso!`
            document.getElementById('firstName').value = ''
            document.getElementById('lastName').value = ''
            document.getElementById('password').value = ''
            document.getElementById('confirmPassword').value = ''
            document.getElementById('superAdmin').checked = false
            document.getElementById('roomMap').checked = false
            document.getElementById('professor').checked = false
            setTimeout(() => {
                notification.innerHTML = ''
                passwordInput.style.borderColor = '#2D73B4'
                confirmPasswordInput.style.borderColor = '#2D73B4'
            }, 5000);
        }
    }
}

document.getElementById('confirmPassword').addEventListener('keypress', (e)=>{
    if(e.keyCode == 13){
        createUser()
    }
})
