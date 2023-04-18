import { axiosInstance } from './config';

export const getCoisas = async () => {
  try {
    const response = await axiosInstance.get('/coisas');
    return response.data;
    
  }catch(error){
    throw error.data;
  }
}
export const addCoisa= async (nome, origem, destino, quantidade) => {
  console.log(nome);
  try {
    const response = await axiosInstance.post('/coisas', { nome, origem, destino, quantidade }
    );
    
    return response.data;

  } catch(error) {
    throw error.response.data;
  }
}

export const deleteCoisa = async (coisaId) => {
  try {
    const response = await axiosInstance.delete('/coisas',{
    params: 
      { 
        coisaId 
      }
    });
    return response.data;

  }catch(error){
    throw error.response.data;
  }
}

export const getCidades = async() => {
  try {
    const response = await axiosInstance.get('/cidades');
    return response.data;
  }catch(error){
    throw error.response.data;
  }
}