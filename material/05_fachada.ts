import { Alumno, DBAdapter, DBFactory } from "./adapter";

export class DBFachada
{
    dbAdapter : DBAdapter | null
    constructor(tipo : string)
    {
        let dbFactory : DBFactory = new DBFactory()
        this.dbAdapter = dbFactory.getAdapter(tipo)
    }
    conectar() : void
    {
        if (this.dbAdapter != null)
        {
            this.dbAdapter.conectar()
        }
    }

    desconectar() : void
    {
        if (this.dbAdapter != null)
        {
            this.dbAdapter.cerrar()
        }
    }

    inicializar() : void 
    {
        if (this.dbAdapter != null)
        {
            this.dbAdapter.crearEstructura()
        }

    }

    insertarAlumno(alumno : Alumno)
    {
        if (this.dbAdapter != null)
        {
            this.dbAdapter.insertarAlumno(alumno)
        }
    }
}