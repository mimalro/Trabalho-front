function verificaSenha() {
    var regras = [{
        Pattern:"[0-9]",
        Target:"tamanho"
    },
    {
        Pattern:"[A-Z]",
        Target:"maiuscula"
    },
    {
        Pattern:"[a-z]",
        Target:"minuscula"
    },
    {
        Pattern:"[!@#$%.,-+]",
        Target:"especial"
    }
    
]

    let senha = this().val();

    $('#tamanho')

};

