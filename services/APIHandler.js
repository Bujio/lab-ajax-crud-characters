const axios = require("axios");

class APIHandler {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
    });
  }

  getAllCharacteres = () => {
    return this.api.get("/characters");
  };
  getOneCharacter(id) {
    return this.api.get(`/characters/${id}`);
  }
  createCharacter(body) {
    return this.api.post("/characters/", { body });
  }
  updateCharacter(id, body) {
    return this.api.put(`/characters/${id}`, body);
  }
  deleteCharacter(id) {
    return this.api.delete(`/characters/${id}`);
  }
}

module.exports = APIHandler;
