import { getResourceURL, getAPIKey, getBaseURL, getPrivateKey} from '../config/getParameters'
import { generateHash } from '../security/hashGenerator'
import { KEY } from '../security/appKey'
import { search } from '../server'

class characterController {
    constructor() {
        
        this.baseResource = '/characters'
        this.apiKey = getAPIKey(generateHash(KEY))
        this.baseURL = getBaseURL(generateHash(KEY))
        this.privateKey = getPrivateKey(generateHash(KEY))

        this.response = {
            comics: '/comics',
            events: '/events',
            series: '/series',
            stories: '/stories'
        }
    }


    async getAllCharacters(){
        console.log('CHEGUEI CONTROLLER')
        const url = getResourceURL(this.baseResource, this.baseURL, '1', this.apiKey, this.privateKey)
        let data = await search(url)
        return data
    }
}
export { characterController }