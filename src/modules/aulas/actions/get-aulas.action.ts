import { academyApi } from "@/config/academyApi";
import type { Aula } from "../interfaces/aula.interface";



export const getAulasAction = async () => {
  
  try{
    const { data } = await academyApi.get<Aula[]>("/aulas");
    console.log(data);
    return data;

  }catch(error){
    console.error(error);
    throw error;
  }
}