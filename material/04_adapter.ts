import { Database } from "sqlite3";
import pouchdb from "pouchdb";

// Patron Factory Method
export class DBFactory
{
    getAdapter(tipo : string) : DBAdapter | null
    {
        if (tipo == "sqlite")
        {
            return new SQLiteAdapter()
        }
        else if (tipo == "pouchdb")
        {
            return new PouchdbAdapter()
        }else
        {
            return null
        }
    }
}

export class Alumno
{
    codigo : string
    nombre : string
    carrera : string
    
    constructor(codigo : string, nombre : string , carrera : string)
    {
        this.codigo = codigo
        this.nombre = nombre
        this.carrera = carrera
    }
}

export interface DBAdapter
{
    crearEstructura() : void
    conectar() : void
    insertarAlumno(alumno : Alumno) : void
    cerrar() : void
}

class SQLiteAdapter implements DBAdapter
{
    db : Database | null | undefined
    crearEstructura(): void
    {
        if (this.db != null && this.db != undefined)
        {
            this.db.run(`CREATE TABLE IF NOT EXISTS alumnos  
                            (codigo TEXT, 
                            nombre TEXT, 
                            carrera TEXT)`)
        }
    }
    conectar(): void 
    {
        this.db = new Database("alumnos.sqlite")
    }
    insertarAlumno(alumno: Alumno): void 
    {
        if (this.db != null && this.db != undefined)
        {
            this.db.run(`INSERT INTO alumnos VALUES ('${alumno.codigo}', 
                            '${alumno.nombre}', 
                            '${alumno.carrera}')`)
        }
    }
    cerrar(): void 
    {
        if (this.db != null && this.db != undefined)
        {
            this.db.close()
            this.db = null
        }
    }
}

class PouchdbAdapter implements DBAdapter
{
    db : PouchDB.Database | null = null
    crearEstructura(): void 
    {}
    conectar(): void 
    {
        this.db = new pouchdb("./alumnos.db")
    }
    insertarAlumno(alumno: Alumno): void 
    {
        let doc = {
            codigo : alumno.codigo,
            nombre : alumno.nombre,
            carrera : alumno.carrera
        }
        if (this.db != null)
        {
            this.db.put(doc)
        }
    }
    cerrar(): void 
    {
        if (this.db != null){
            this.db.close()
            this.db = null
        }
    }
}