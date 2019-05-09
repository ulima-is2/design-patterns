class Persona
{
    nombre : string
    estadoCivil : EstadoCivil
    constructor(nombre : string)
    {
        this.nombre = nombre
        this.estadoCivil = new EstadoSoltero(this) // Estado Inicial
    }

    casar()
    {
        this.estadoCivil.casar()
    }

    enviudar()
    {
        this.estadoCivil.enviudar()
    }

    divorciar()
    {
        this.estadoCivil.divorciar()
    }
    morir()
    {
        this.estadoCivil.morir()
    }

}

interface EstadoCivil
{
    casar() : void
    divorciar() : void
    morir() : void
    enviudar() : void
}

class EstadoSoltero implements EstadoCivil
{
    persona : Persona
    constructor(persona : Persona)
    {
        this.persona = persona
    }
    casar() {
        this.persona.estadoCivil = new EstadoCasado(this.persona)
    }

    divorciar() {}

    morir() {
        this.persona.estadoCivil = new EstadoFallecido(this.persona)
    }

    enviudar() {}

    toString() {
        return "ESTADO SOLTERO"
    }
}

class EstadoCasado implements EstadoCivil
{
    persona : Persona
    constructor(persona : Persona)
    {
        this.persona = persona
    }
    casar() {}

    divorciar() {
        this.persona.estadoCivil = new EstadoDivorciado(this.persona)
    }
    morir() {
        this.persona.estadoCivil = new EstadoFallecido(this.persona)
    }
    enviudar() {
        this.persona.estadoCivil = new EstadoViudo(this.persona)
    }

    toString() {
        return "ESTADO CASADO"
    }
}

class EstadoViudo implements EstadoCivil
{
    persona : Persona
    constructor(persona : Persona)
    {
        this.persona = persona
    }
    casar() {
        this.persona.estadoCivil = new EstadoCasado(this.persona)
    }

    divorciar() {}

    morir() {
        this.persona.estadoCivil = new EstadoFallecido(this.persona)
    }

    enviudar() {}

    toString() {
        return "ESTADO VIUDO"
    }
}

class EstadoDivorciado implements EstadoCivil
{
    persona : Persona
    constructor(persona : Persona)
    {
        this.persona = persona
    }
    casar() {
        this.persona.estadoCivil = new EstadoCasado(this.persona)
    }    

    divorciar() {}

    morir() {
        this.persona.estadoCivil = new EstadoFallecido(this.persona)
    }

    enviudar() {}

    toString() {
        return "ESTADO DIVORCIADO"
    }
}

class EstadoFallecido implements EstadoCivil
{
    persona : Persona
    constructor(persona : Persona)
    {
        this.persona = persona
    }
    casar() {}    
    divorciar() {}
    morir() {}
    enviudar() {}

    toString() {
        return "ESTADO FALLECIDO"
    }
}

let main = () => {
    let juanita : Persona = new Persona("Juanita")
    juanita.casar()
    juanita.enviudar()
    juanita.divorciar()

    console.log(`El estado civil es: ${juanita.estadoCivil}`)
}

main()