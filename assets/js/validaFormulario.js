
function validacaoEmail(field) {
    if(field){

        let fieldValue = field;
        console.log(fieldValue)
        usuario = fieldValue.substring(0, fieldValue.indexOf("@"));
        dominio = fieldValue.substring(fieldValue.indexOf("@") + 1, fieldValue.length);
    
        if ((usuario.length >= 1) &&
            (dominio.length >= 3) &&
            (usuario.search("@") == -1) &&
            (dominio.search("@") == -1) &&
            (usuario.search(" ") == -1) &&
            (dominio.search(" ") == -1) &&
            (dominio.search(".") != -1) &&
            (dominio.indexOf(".") >= 1) &&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
                return true
        }
        else {
            
            false
        }
    }

    false

}