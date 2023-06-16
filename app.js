let result = document.getElementById('result')

function calcular(tipo, valor){
    // console.log(tipo, valor)
    if(tipo === 'acao'){
        
        if(valor === 'reset'){
            result.value = ''
            result.focus()
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            result.value += valor
        }

        if(valor === 'del'){
            let a = result.value.split('')
            a.pop()
            result.value = a.join('')
            result.focus()
        }
        

        if(valor === '='){
            if(result.value === ''){
                alert('Digite um número')
                result.focus()
                
            }
            else{
                let valor_campo =  eval(result.value)
                result.value = valor_campo
            }
        }
    }
    else if(tipo === 'valor'){
        result.value += valor
    }
}