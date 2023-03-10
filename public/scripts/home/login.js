//Get DOM elemnts
const loginButton = document.getElementById('loginButton')
let notification = document.getElementById("notification")
const inputLogin = document.getElementById("loginInput")
const inputPass = document.getElementById("passwordInput")

//Envent listener on input password to click enter
inputPass.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        getLogged()
    }
})

//Function to login in
async function getLogged(){
    //Changing button text to make user await
    loginButton.textContent = 'Aguarde...'

    //Restart border-color
    if(inputLogin.classList.contains('error')){
        inputLogin.classList.remove('error')
    }
    if(inputPass.classList.contains('error')){
        inputPass.classList.remove('error')
    }

    //Get data to post
    let login = inputLogin.value
    let password = inputPass.value

    //Do the request
    let response = await fetch(url + '/.netlify/functions/login',{
        method: 'post',
        body: JSON.stringify({
            login,
            password
        })
    })

    let data = await response.json()

    //Bringing back button text
    loginButton.textContent = 'Login'

    //Check response
    if(response.status != 200){
        if(data.resposta == 'Admin not found.'){
            if(notification.innerText){
                notification.classList.add('bounce')
                notification.classList.remove('notifyAnimation')
                setTimeout(() => {
                    notification.classList.remove('bounce')
                }, 1000);
            }else{
                notification.classList.add('notifyAnimation')
            }
            notification.innerText = 'Usuário inexistente!'
            notification.style.display = 'block'
            inputLogin.classList.add('error')
            inputPass.classList.add('error')
        }else 
        if(data.resposta == 'Incorrect password.'){
            if(notification.innerText){
                notification.classList.add('bounce')
                notification.classList.remove('notifyAnimation')
                setTimeout(() => {
                    notification.classList.remove('bounce')
                }, 1000);
            }else{
                notification.classList.add('notifyAnimation')
            }
            notification.innerText = 'Senha incorreta!'
            notification.style.display = 'block'
            inputPass.classList.add('error')
        }
    }else{
        await sessionStorage.setItem('token', data.token)
        await sessionStorage.setItem('unauthorized', false)
        await sessionStorage.setItem('userName', login)
        checkLogin()
        notification.innerText = 'Login efetuado com sucesso!'
        notification.style.color = '#32be56'
        notification.style.display = 'block'
        notification.classList.add('bounce')
        notification.classList.remove('notifyAnimation')
        setTimeout(() => {
            notification.classList.remove('bounce')
        }, 1000);
        setTimeout(()=>{
            inputLogin.value = '' 
            inputPass.value = ''
            notification.style.display = 'none'
            document.querySelector('.fade').classList.toggle('unhide')
            document.querySelector('.loginDiv').classList.toggle('unhide')
            if(sessionStorage.unauthorized == 'true'){
                document.querySelector('.authentication').remove()
            }
            if(data.permission == 'superAdmin') window.location.href = url + '/pages/administrativo'
            else window.location.href = url + '/pages/mapa-admin'
            
        },1500)
    }
}

//Add function to login on button
loginButton.addEventListener('click', getLogged)

//Check user is authorized
if(sessionStorage.getItem('unauthorized') == 'true'){
    let authNotification = document.createElement('div')
    authNotification.setAttribute('class', 'authentication authNotificationMove')
    authNotification.innerHTML = '<img src="./img/icons/warning.png" alt="warning" width="20px"><h3>Você não está autorizado a visualizar aquela página, por gentileza, efetue o <b id="notificationLogin">login!</b></h3>'
    document.querySelector('body').insertBefore(authNotification, document.querySelector('header'))
}