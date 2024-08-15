export interface Estudiante {
    id: number;
    nombre: string;
    apellido: string;
    fecha_nacimiento: string;
    email: string;
    telefono?: string;
  }
  
  export interface Curso {
    id: number;
    nombre: string;
    descripcion?: string;
  }
  
  export interface Materia {
    id: number;
    nombre: string;
    descripcion?: string;
  }
  
  export interface Nota {
    id: number;
    id_estudiante: number;
    id_materia: number;
    id_curso: number;
    nota: number;
    fecha: string;
  }
  
  export interface Profesor {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string;
  }
  