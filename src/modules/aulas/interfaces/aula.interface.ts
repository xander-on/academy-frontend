import type { Materia } from "@/modules/materias/interface/materia.interface";
import type { Profesor } from "@/modules/profesores/interfaces/profesor.interface";


export interface Aula{
  id       : string;
  name     : string;
  profesor : Profesor;
  materia  : Materia;
}