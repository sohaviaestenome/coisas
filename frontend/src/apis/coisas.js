import { axiosInstance } from './config';

export const getCoisas = async () => {
  try {
    const response = await axiosInstance.get('/coisas');
    return response.data;
    
  }catch(error){
    throw error.data;
  }
}

// export const getDaySleeps = async (id, dateDay) => {
//   try {
//     const response = await axiosInstance.get('/dashboard/day/',{
//       params: {
//         id,
//         dateDay
//       }
//     })
//     return response.data;
    
//   }catch(error){
//     throw error.data;
//   }
// }

// export const getWeekSleeps = async (id, dateStart, dateEnd) => {
//   try {
//     const response = await axiosInstance.get('/weekly-report',{
//       params: {
//         id,
//         dateStart,
//         dateEnd
//       }
//     })

//     return response.data;
    
//   }catch(error){
//     throw error.data;
//   }
// }

// export const addSleeps = async (startTime, endTime, userId, duration) => {
//   try {
//     const response = await axiosInstance.post('/dashboard/day', { startTime, endTime, userId, duration }
//     );
    
//     return response.data;

//   } catch(error) {
//     throw error.response.data;
//   }
// }

// export const deleteSleep = async (sleepId) => {
//   try {
//     const response = await axiosInstance.delete('/dashboard/day',{
//       params: {
//         sleepId
//       }
//     });
//     return response.data;

//   }catch(error){
//     throw error.response.data;
//   }
// }

// export const updateSleep = async (sleepId, startTime, endTime, duration) => {
//   try {
//     const response = await axiosInstance.put('/dashboard/day',{ sleepId, startTime, endTime, duration });
//     return response.data;


//   }catch(error){
//     throw error.response.data;
//   }
// }

// export const getSleep = async (userId, dateStart, dateEnd, duration) => {
//   try {
//     const response = await axiosInstance.get('/weekly-report',{
//       params: {
//         userId,
//         dateStart,
//         dateEnd,
//         duration
//       }
//     })
//     return response.data;
    
//   }catch(error){
//     throw error.data;
//   }
// }