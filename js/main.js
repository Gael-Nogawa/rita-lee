
$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000',{ 
        placeholder: '(12) 98765-4321'    
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
                rangelength: [2,50]
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira no nome',
            email: 'Por favor, insira o seu melhor e-mail',
            mensagem: 'Por favor, insira a sua mensagem'
        },

        
        submitHandler: function(form){
            alert('Enviado com sucesso!');
            
        
        },
        invalidHandler: function(evento, validador){
            let camposInvalidos = validador.numberOfInvalids()
            if(camposInvalidos){
                alert(`Existem ${camposInvalidos} campos inválidos`);
            }
        }
        
    })

    
})


