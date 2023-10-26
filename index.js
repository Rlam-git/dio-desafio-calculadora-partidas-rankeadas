

let saldo = calculaRanked(23,3);
let nivel = calculaNivel(saldo);
console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);


function calculaNivel(saldo){
    if(saldo <= 10){
        return "Ferro";
    }else if( saldo >= 10 && saldo <= 20){
        return "Bronze";
    }else if( saldo >= 20 && saldo <= 50){
        return "Prata";
    }else if( saldo >= 50 && saldo <= 80){
        return "Ouro";
    }else if( saldo >= 80 && saldo <= 90){
        return "Diamante";
    }else if( saldo >= 90 && saldo <= 100){
        return "Lendário";
    }else{
        return "Imortal";
    }
}

function calculaRanked(vitorias,derrotas){
    return vitorias - derrotas;
}