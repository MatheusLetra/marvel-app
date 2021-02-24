import { getResourceURL, getAPIKey, getBaseURL, getPrivateKey} from '../config/getParameters'
import { generateHash } from '../security/hashGenerator'
import { KEY } from '../security/appKey'

class characterController {
    constructor() {
        
        this.baseResource = '/characters'
        this.apiKey = getAPIKey(generateHash(KEY))
        this.baseURL = getBaseURL(generateHash(KEY))
        this.privateKey = getPrivateKey(generateHash(KEY))

        this.response = {
            comics: 'comics',
            events: 'events',
            series: 'series',
            stories: 'stories'
        }
    }
}
export { characterController }