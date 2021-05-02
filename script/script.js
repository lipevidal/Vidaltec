$('#topo button').click(function(){
    $('#topo nav.toggle').toggle(1000);
});

var data = new Date();
var semana = data.getDay();
var hora = data.getHours();
var ano = data.getFullYear();
var resposta;
var resultado;
var total;

switch (semana) {
    case 0:
        resposta = 'nao';
        break;
    case 6:
        resposta = 'sabado';
        break;
    default:
        resposta = 'OK';
}

switch (hora) {
    case 8:
    case 9: 
    case 10:
    case 11:
        resultado ='OKsabado'
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        resultado = 'OKtudo';
        break;
    default:
        resultado = 'nao';
        break;
}

console.log(resposta)
console.log(resultado)

if ((resposta == 'sabado' && resultado == 'OKsabado') || (resposta == 'OK' && (resultado == 'OKsabado' || resultado == 'OKtudo'))){
    total = 'Online';
} else {
    total = 'Offline';
}

console.log(total);

$('#demo').text(total);

$('#direitos').text(ano);