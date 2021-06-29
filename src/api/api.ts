const BASE_URL = 'https://pokeapi.co/api/v2/';

export const request = ( endpoint: string, options?: object): Promise<any> => {  
  
  return fetch(`${BASE_URL}${endpoint}`, options)
    .then(response => {
    
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      
      return response.json();
    }
  )
}
