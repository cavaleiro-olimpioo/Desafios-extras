function removeError(inputId, errorId, iconId){
    const input = document.getElementById(inputId)
    const errorMsg = document.getElementById(errorId)
    const icon = document.querySelector(`img#${iconId}`)

    input.addEventListener('input', () => {
        input.style.border = '1px solid #ccc'; // Reseta a borda para o padrão
        errorMsg.style.color = '#000'; // Reseta a cor da mensagem
        errorMsg.style.display = 'none'; // Esconde a mensagem de erro
        if (icon) {
            icon.style.filter = 'none'; // Remove o filtro do ícone
        }
    })
}


function envioForm(){
    var txtname = document.getElementById('iname')
    var txtemail = document.getElementById('iemail')
    var txtusername = document.getElementById('igitname')
    var txtavatar = document.getElementById('desciavatar')


    var avatar = String(txtavatar.value)
    var nome = String(txtname.value)
    var email = String(txtemail.value)
    var username = String(txtusername.value)

    removeError('iname', 'Nerror', 'icoNerror'); // Para o nome
    removeError('iemail', 'Eerror', 'icoEerror'); // Para o e-mail
    removeError('igitname', 'Gerror', 'icoGerror'); // Para o GitHub username
    removeError('desciavatar', 'Aerror', 'icoAerror'); // Para o avatar
    if(nome == '' || email == '' || username == '' || avatar == ''){
        if(avatar == ''){
            let error = document.getElementById('iavatar')
            let msgerror = document.getElementById('Aerror')
            let icoerror = document.querySelector('img#icoAerror')
            
            icoerror.style.filter = 'brightness(0) saturate(100%) invert(25%) sepia(86%) saturate(7482%) hue-rotate(360deg) brightness(102%) contrast(103%)'
            error.style.border = '1px solid red'
            msgerror.style.color = 'red'
        }
        if(nome == ''){
            let error = document.getElementById('iname')
            let msgerror = document.querySelector('p#Nerror')
            let icoerror = document.querySelector('img#icoNerror')
            
            icoerror.style.filter = 'brightness(0) saturate(100%) invert(25%) sepia(86%) saturate(7482%) hue-rotate(360deg) brightness(102%) contrast(103%)'
            error.style.border = '1px solid red'
            msgerror.style.color = 'red'
            msgerror.style.display = 'inline-block'
        }
        if(email == ''){
            let error = document.getElementById('iemail')
            let msgerror = document.querySelector('p#Eerror')
            let icoerror = document.querySelector('img#icoEerror')
            
            icoerror.style.filter = 'brightness(0) saturate(100%) invert(25%) sepia(86%) saturate(7482%) hue-rotate(360deg) brightness(102%) contrast(103%)'
            error.style.border = '1px solid red'
            msgerror.style.color = 'red'
            msgerror.style.display = 'inline-block'
        }
        if(username == ''){
            let error = document.getElementById('igitname')
            let msgerror = document.querySelector('p#Gerror')
            let icoerror = document.querySelector('img#icoGerror')
            
            icoerror.style.filter = 'brightness(0) saturate(100%) invert(25%) sepia(86%) saturate(7482%) hue-rotate(360deg) brightness(102%) contrast(103%)'
            error.style.border = '1px solid red'
            msgerror.style.color = 'red'
            msgerror.style.display = 'inline-block'
        }
    }else{
        document.querySelector('div#cadastro').style.display = 'none';
        document.querySelector('div#res').style.display = 'block';

        var pn = document.querySelectorAll('div.nome')
        pn.innerHTML = `${nome}`
        pn.style.display = 'inline'

        var pe = document.querySelectorAll('div.email')
        pe.innerText = `${email}`
        pe.style.display = 'inline'

        var pg = document.querySelectorAll('div.git')
        pg.innerText = `${username}`

        document.querySelector('p#nome').innerText = `${nome}`
    }
    /*

    window.alert(nome)    
    */
}
