import { academyApi } from "@/config/academyApi";
import type { Materia } from "../interface/materia.interface";



export const getMateriasAction = async () => {

  try{
    const {data} = await academyApi.get<Materia[]>("/materias");
    return data;

  }catch(error){
    console.error(error);
    throw error;
  }
}