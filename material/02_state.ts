enum EstadoCivil
{
    Soltero, Casado, Viudo, Divorciado, Fallecido
}

class Persona
{
    nombre : string
    estadoCivil : EstadoCivil = EstadoCivil.Soltero

    constructor(nombre : string)
    {
        this.nombre = nombre
    }

    casar()
    {
        if (this.estadoCivil == EstadoCivil.Soltero ||
            this.estadoCivil == EstadoCivil.Divorciado ||
            this.estadoCivil == EstadoCivil.Viudo)
        {
            this.estadoCivil = EstadoCivil.Casado
        }
    }

    morir()
    {
        this.estadoCivil = EstadoCivil.Fallecido
    }
    divorciar()
    {
        if (this.estadoCivil == EstadoCivil.Casado)
        {
            this.estadoCivil = EstadoCivil.Divorciado
        }
    }
    enviudar()
    {
        if (this.estadoCivil == EstadoCivil.Casado)
        {
            this.estadoCivil = EstadoCivil.Viudo
        }
    }
}