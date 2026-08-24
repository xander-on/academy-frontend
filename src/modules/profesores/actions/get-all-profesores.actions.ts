import { academyApi } from "../../../config/academyApi"
import type { Profesor } from "../interfaces/profesor.interface";

export const getAllProfesoresAction = async () => {

  try{
    const {data} = await academyApi.get<Profesor[]>("/profesores");
    return data;

  }catch(error){
    console.error(error);
    throw error;
  }
}