const BASE_URL = "https://rickandmortyapi.com/api/character";

const characterService = {
   getAll: async (page = 1) => {
      const apiUrl = `${BASE_URL}/?page=${page}`;
      const response = await fetch(apiUrl);
      return response.json();
   },

   //    getById:
};

export default characterService;
