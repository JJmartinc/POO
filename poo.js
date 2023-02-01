//?Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(),
//? que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles(){
        console.log(`Tu nombre es ${this.nombre} tienes ${this.edad} años y te consideras un ${this.genero}`);
    }

}


class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        console.log(`Tu nombre es ${this.nombre} tienes ${this.edad} años y te consideras un ${this.genero}, vas al curso ${this.curso}${this.grupo}`);
    }
}



class Profesor extends Persona {
    constructor(nombre, edad, genero,asignatura,nivel){
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(`El nombre del profesor es ${this.nombre} tiene una edad de ${this.edad} es ${this.genero} su asignatura es ${this.asignatura} y tiene un nivel de ${this.nivel}`)
    }
}

//? Asignar Persona

let miPersona = new Persona("Jorge",30,"tractor");
miPersona.obtDetalles();
let persona1 = new Persona("Juan", 25, "Hombre");
persona1.obtDetalles();
let persona2 = new Persona("María", 28, "Mujer");
persona2.obtDetalles();

//? Asignar Estudiante

let miEstudiante = new Estudiante ("Jorge",30,"tractor","2º","B");
miEstudiante.registrar();
let estudiante1 = new Estudiante("Ana", 22, "Mujer","3º", "A");
estudiante1.registrar();
let estudiante2 = new Estudiante("Pedro", 24, "Hombre", "4º", "B");
estudiante2.registrar();

//? Asignar profesor
let miProfesor = new Profesor ("Guillermo",32,"Varon","Derecho","Catedratico");
miProfesor.asignar();
let miProfesor2 = new Profesor ("Antonio",50, "Varon", "Filosofia", "Profesor adjunto");
miProfesor2.asignar()
let miProfesor3 = new Profesor ("Andrea",24, "No fluido","Ciencias","Profesora");
miProfesor3.asignar()