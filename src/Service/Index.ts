import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8000'
});

export const galleryData = async(params:string) => {
  const response = await instance.get(`${params}`)
  try {
    if(response.status===200){
      return response?.data?.result
    }else{
      return []
    }
  } catch (error) {
    return error;
  }
}


