class Jedi
{
    nivel : Nivel
    misiones!: number;
    fuerza! : number 
    constructor()
    {
        this.nivel = new Iniciado(this)
    }
}

abstract class Nivel
{
    jedi : Jedi
    constructor(jedi : Jedi)
    {
        this.jedi = jedi
    }
    abstract ascender() : void
}

class Iniciado extends Nivel
{
    ascender(): void {
        if (this.jedi.misiones > 10 && this.jedi.fuerza > 100)
        {
            this.jedi.nivel = new Padawan(this.jedi)
        }else if (this.jedi.fuerza < -100)
        {
            this.jedi.nivel = new Observado(this.jedi)
        }
    }
    toString()
    {
        return "Iniciado"
    }

}

class Padawan extends Nivel
{
    ascender(): void {
        if (this.jedi.misiones > 30 && this.jedi.fuerza > 200)
        {
            this.jedi.nivel = new Caballero(this.jedi)
        }else if (this.jedi.fuerza < -100)
        {
            this.jedi.nivel = new Observado(this.jedi)
        }
    }
    toString()
    {
        return "Padawan"
    }
}
class Caballero extends Nivel
{
    ascender(): void {
        if (this.jedi.misiones > 50 && this.jedi.fuerza > 500)
        {
            this.jedi.nivel = new Maestro(this.jedi)
        }else if (this.jedi.fuerza < -100)
        {
            this.jedi.nivel = new Observado(this.jedi)
        }
    }
    toString()
    {
        return "Caballero"
    }
}
class Maestro extends Nivel
{
    ascender(): void {
        if (this.jedi.fuerza < -100)
        {
            this.jedi.nivel = new Observado(this.jedi)
        }
    }
    toString()
    {
        return "Maestro"
    }
}
class Observado extends Nivel
{
    ascender(): void {
        if (this.jedi.fuerza < 0)
        {
            this.jedi.nivel = new Expulsado(this.jedi)
        }else{
            this.jedi.nivel = new Iniciado(this.jedi)
        }
    }
    toString()
    {
        return "Observado"
    }
}
class Expulsado extends Nivel
{
    ascender(): void {}
    toString()
    {
        return "Expulsado"
    }
}

class Evaluador
{
    evaluarAscensos(jedi : Jedi)
    {
        jedi.nivel.ascender()
    }
}

let main = ()=>{
    let jedi : Jedi = new Jedi()
    jedi.fuerza = 300
    jedi.misiones = 30
    let evaluador : Evaluador = new Evaluador()
    console.log(`Estado anterior ${jedi.nivel}`)
    evaluador.evaluarAscensos(jedi)
    console.log(`Estado actual ${jedi.nivel}`)
}
main()