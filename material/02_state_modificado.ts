class PersonaState
{
    nombre : string
    EstadoCivilState : EstadoCivilState
    constructor(nombre : string)
    {
        this.nombre = nombre
        this.EstadoCivilState = new EstadoSoltero(this) // Estado Inicial
    }

    casar()
    {
        this.EstadoCivilState.casar()
    }

    enviudar()
    {
        this.EstadoCivilState.enviudar()
    }

    divorciar()
    {
        this.EstadoCivilState.divorciar()
    }
    morir()
    {
        this.EstadoCivilState.morir()
    }
    resucitar()
    {
        this.EstadoCivilState.resucitar()
    }

}

interface EstadoCivilState
{
    casar() : void
    divorciar() : void
    morir() : void
    enviudar() : void
    resucitar() : void
}

class EstadoSoltero implements EstadoCivilState
{
    PersonaState : PersonaState
    constructor(PersonaState : PersonaState)
    {
        this.PersonaState = PersonaState
    }
    casar() {
        this.PersonaState.EstadoCivilState = new EstadoCasado(this.PersonaState)
    }

    divorciar() {}

    morir() {
        this.PersonaState.EstadoCivilState = new EstadoFallecido(this.PersonaState)
    }

    enviudar() {}

    toString() {
        return "ESTADO SOLTERO"
    }
    resucitar(){}
}

class EstadoCasado implements EstadoCivilState
{
    PersonaState : PersonaState
    constructor(PersonaState : PersonaState)
    {
        this.PersonaState = PersonaState
    }
    casar() {}

    divorciar() {
        this.PersonaState.EstadoCivilState = new EstadoDivorciado(this.PersonaState)
    }
    morir() {
        this.PersonaState.EstadoCivilState = new EstadoFallecido(this.PersonaState)
    }
    enviudar() {
        this.PersonaState.EstadoCivilState = new EstadoViudo(this.PersonaState)
    }

    resucitar(){}

    toString() {
        return "ESTADO CASADO"
    }
}

class EstadoViudo implements EstadoCivilState
{
    PersonaState : PersonaState
    constructor(PersonaState : PersonaState)
    {
        this.PersonaState = PersonaState
    }
    casar() {
        this.PersonaState.EstadoCivilState = new EstadoCasado(this.PersonaState)
    }

    divorciar() {}

    morir() {
        this.PersonaState.EstadoCivilState = new EstadoFallecido(this.PersonaState)
    }

    enviudar() {}

    resucitar(){}

    toString() {
        return "ESTADO VIUDO"
    }
}

class EstadoDivorciado implements EstadoCivilState
{
    PersonaState : PersonaState
    constructor(PersonaState : PersonaState)
    {
        this.PersonaState = PersonaState
    }
    casar() {
        this.PersonaState.EstadoCivilState = new EstadoCasado(this.PersonaState)
    }    

    divorciar() {}

    morir() {
        this.PersonaState.EstadoCivilState = new EstadoFallecido(this.PersonaState)
    }

    enviudar() {}

    resucitar(){
        
    }

    toString() {
        return "ESTADO DIVORCIADO"
    }
}

class EstadoFallecido implements EstadoCivilState
{
    PersonaState : PersonaState
    constructor(PersonaState : PersonaState)
    {
        this.PersonaState = PersonaState
    }
    casar() {}    
    divorciar() {}
    morir() {}
    enviudar() {}
    resucitar(){}
    toString() {
        return "ESTADO FALLECIDO"
    }
}
class EstadoResucitado implements EstadoCivilState
{
    PersonaState : PersonaState
    constructor(PersonaState : PersonaState)
    {
        this.PersonaState = PersonaState
    }
    casar() {}    
    divorciar() {}
    morir() {}
    enviudar() {}
    resucitar(){
        this.PersonaState.EstadoCivilState = new EstadoResucitado(this.PersonaState)
    }
    toString() {
        return "ESTADO RESUCITADO"
    }
}

let main = () => {
    let juanita : PersonaState = new PersonaState("Juanita")
    juanita.casar()
    juanita.enviudar()
    juanita.divorciar()
    juanita.resucitar()

    console.log(`El estado civil es: ${juanita.EstadoCivilState}`)
}

main()