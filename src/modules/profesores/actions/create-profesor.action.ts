import { academyApi } from "@/config/academyApi";


interface CreateProfesorResponse {
  id: string;
}

interface CreateProfesorRequest {
  firstName : string;
  lastName  : string;
  degree    : string;
}

export const createProfesorAction = async (payload: CreateProfesorRequest) => {

  try{
    const {data} = await academyApi.post<CreateProfesorResponse>("/profesores", payload);
    return data;
  }catch(error){
    console.error(error);
    throw error;
  }
}