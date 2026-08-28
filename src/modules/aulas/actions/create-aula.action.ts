import { academyApi } from "@/config/academyApi";

interface CreateAulaRequest{
  name       : string;
  profesorId : string;
  materiaId  : string;
}

export const createAulaAction = async(payload:CreateAulaRequest) => {

  try{
    const { data } = await academyApi.post('/aulas', payload);
    return data;
  }catch(error){
    console.error(error);
    throw error;
  }
}