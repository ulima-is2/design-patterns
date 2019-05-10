class Jedi{
    nivel: Nivel
    fuerza!: number;
    misiones!: number;

    constructor(){
        this.nivel = new NIVELES(this)
    }
}
abstract class Nivel{
    jedi : Jedi
    constructor(jedi : Jedi){
        this.jedi = jedi
    }
    abstract ascender() : void
}

class NIVELES extends Nivel {
    ascender() : void {
        
    }
    toString(){
        return "NIVEL"
    }
}
class Evaluador{
    evaluarAscensos(jedi : Jedi){
        jedi.nivel.ascender()
    }
}
//TODO implement all levels
let main = () => {
    let jedi : Jedi = new Jedi()
    jedi.fuerza = 300
    jedi.misiones = 30
    let evaluador : Evaluador = new Evaluador()
    console.log(`Estado anterior del jedi: ${jedi.nivel}`)
    evaluador.evaluarAscensos(jedi)
    console.log(`Estado actual del jedi: ${jedi.nivel}`)
}
main()