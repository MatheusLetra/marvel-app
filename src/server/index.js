import axios from 'axios';

class Server {

  constructor() {
    this.response = null
  }

  async search(URL) {
    try {
      this.response = await axios({
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        },
        url: URL
      });
    } catch (error) {
      console.log(error)
    }
  }
}

export { Server };