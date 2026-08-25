import { academyApi } from "@/config/academyApi";


interface CreateMateriaResponse{
  id: string
}


interface CreateMateriaRequest{
  name: string
  description: string
}

export const createMateriasAction = async (payload: CreateMateriaRequest) => {

  try{
    const {data} = await academyApi.post<CreateMateriaResponse>("/materias", payload);
    return data;

  }catch(error){
    console.error(error);
    throw error;
  }
}