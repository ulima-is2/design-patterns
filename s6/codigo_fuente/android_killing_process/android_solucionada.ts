
abstract class EjecutorNivel
{
    sucesor!: Ejecutor | null;
    addSucesor(sucesor : Ejecutor)
    {
        this.sucesor = sucesor
    }
    abstract matar(proceso : Proceso) :void 
}

class EjecutorNivel1 extends EjecutorNivel
{
    matar(proceso : Proceso) {
        if (proceso.prioridad == 3 && proceso.consumo > 100)
        {
            console.log(`EjecutorNivel1 matará proceso ${proceso.nombre}`)
        }else{
            if (this.sucesor != null && this.sucesor != undefined)
            {
                // Delego la atencion al sucesor
                this.sucesor.matar(proceso)
            }            
        }
    }

}

class EjecutorNivel2 extends EjecutorNivel
{
    matar(proceso : Proceso) {
        if (proceso.prioridad == 2 && proceso.consumo > 100)
        {
            console.log(`EjecutorNivel2 matará proceso ${proceso.nombre}`)
        }else{
            if (this.sucesor != null && this.sucesor != undefined)
            {
                // Delego la atencion al sucesor
                this.sucesor.matar(proceso)
            }            
        }
    }

}
class EjecutorNivel3 extends EjecutorNivel
{
    matar(proceso : Proceso) {
        if (proceso.prioridad == 1 && proceso.consumo > 100)
        {
            console.log(`EjecutorNivel3 matará proceso ${proceso.nombre}`)
        }else{
            if (this.sucesor != null && this.sucesor != undefined)
            {
                // Delego la atencion al sucesor
                this.sucesor.matar(proceso)
            }            
        }
    }
}

let main2 = () => 
{
    let en1 = new EjecutorNivel1()
    let en2 = new EjecutorNivel2()
    let en3 = new EjecutorNivel3()

    en1.addSucesor(en2)
    en2.addSucesor(en3)

    let proceso : Proceso = {
        prioridad : 1,
        nombre : "Proceso de Prueba",
        consumo : 101
    }

    en1.matar(proceso)
}

main2()