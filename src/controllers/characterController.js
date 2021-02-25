import { getResourceURL, getAPIKey, getBaseURL, getPrivateKey } from '../config/getParameters'
import { generateHash } from '../security/hashGenerator'
import { KEY } from '../security/appKey'
import { Server } from '../server'

class characterController {
    constructor() {
        this.baseResource = '/characters'
        this.apiKey = getAPIKey(generateHash(KEY))
        this.baseURL = getBaseURL(generateHash(KEY))
        this.privateKey = getPrivateKey(generateHash(KEY))
        this.response = null
        this.resources = {
            comics: '/comics',
            events: '/events',
            series: '/series',
            stories: '/stories'
        }
    }


    async getAllCharacters() {
        const url = getResourceURL(this.baseResource, this.baseURL, '1', this.apiKey, this.privateKey)
        const server = new Server();
        await server.search(url) 
        const response = server.response
        if (response){
            this.response = JSON.stringify(response.data.data)
        }
        else
            this.response = null
    }
}
export { characterController }