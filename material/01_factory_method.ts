import {Empleado, Cocinero, Mozo, Jalador} from './principios';

// Objetivo: Crear empleados
class FactoryEmpleado
{
    getEmpleado(tipo : string, nombre : string) : Empleado | null
    {
        // Logica para la creacion de empleados
        if (tipo == "cocinero")
        {
            return new Cocinero(nombre)
        }else if (tipo == "mozo")
        {
            return new Mozo(nombre)
        }else if (tipo == "jalador")
        {
            return new Jalador(nombre)
        }else
        {
            return null;
        }
    }
}

let main = () => {
    let factory : FactoryEmpleado = new FactoryEmpleado()
    //let tipo : string = process.argv[2]
    let tipo : string | undefined = process.env.TIPO_EMPLEADO
    if (tipo != undefined)
    {
        let emp : Empleado | null = factory.getEmpleado(tipo, "Panchito")
        if (emp != null)
        {
            emp.saludar()
        }
    }
    
}
main()