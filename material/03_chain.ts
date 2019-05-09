class Reclamo
{
    monto : number

    constructor(m : number)
    {
        this.monto = m
    }
}

abstract class Empleado
{
    sucessor : Empleado | null | undefined
    
    addSucessor(empleado : Empleado)
    {
        this.sucessor = empleado
    }

    abstract atenderReclamo(reclamo : Reclamo) : void

}

// Nivel 1
class Mozo extends Empleado
{
    atenderReclamo(reclamo: Reclamo): void {
        // reclamo < 100 -> mozo lo atiende
        if (reclamo.monto < 100)
        {
            console.log("El mozo lo atiende");
        }else
        {
            if (this.sucessor != null && this.sucessor != undefined)
            {
                // Delego la atencion al sucesor
                this.sucessor.atenderReclamo(reclamo)
            }
        }
    }
}

// Nivel 2
class Encargado extends Empleado
{
    atenderReclamo(reclamo: Reclamo): void {
        // reclamo > 100 y < 300 -> Encargado
        if (reclamo.monto >=100 && reclamo.monto < 300)
        {
            console.log("El encargado lo atiende");
        }else
        {
            if (this.sucessor != null && this.sucessor != undefined)
            {
                // Delego la atencion al sucesor
                this.sucessor.atenderReclamo(reclamo)
            }
        }
    }
}

// Nivel 3
class Administrador extends Empleado
{
    atenderReclamo(reclamo: Reclamo): void {
        console.log("El administrador lo atiende");
    }
}

let main2 = () => {
    // Armar la estructura
    let mozo : Mozo = new Mozo()
    let encargado : Encargado = new Encargado()
    let administrador : Administrador = new Administrador()
    mozo.addSucessor(encargado)
    encargado.addSucessor(administrador)

    let reclamo : Reclamo = new Reclamo(299)
    mozo.atenderReclamo(reclamo)
}

main2()
