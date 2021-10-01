interface IConversaoDeUnidadesDeTempo {
    _minutos: number,
    _mesdias: number,
    _hora: number,
    _dia: number, 
    _anos: number
}

class ConversaoDeUnidadesDeTempo {
     constructor(
        private _minutos: number,
        private _mesdias: number,
        private _hora: number,
        private _dia: number, 
        private _anos: number,
    ) {}

    static fatory({_minutos, _mesdias, _hora, _dia, _anos}: IConversaoDeUnidadesDeTempo){
        return new ConversaoDeUnidadesDeTempo(_minutos,_mesdias, _hora, _dia, _anos)
    }

    // static Minutos(minutos: number) {
    //     return new minutos * 60
    // }

    static Hora(hora: number) {
        return hora * 60
    }

    static Dia(dia: number) {
        return dia * 24
    }

    static MesDias(mesDias: number) {
        return mesDias * 30
    }

    static Anos(anos: number) {
        return anos * 365.25
    }
}
const Conversao1 = new ConversaoDeUnidadesDeTempo(8, 1, 9, 8, 12)
// console.log(Conversao1.Minuto(8));

console.log(Conversao1.Hora(1));

console.log(Conversao1.Dia(9));

console.log(Conversao1.MesDias(8));
console.log(Conversao1.Anos(12));
