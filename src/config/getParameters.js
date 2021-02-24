import { KEY } from '../security/appKey'
import { generateHash } from '../security/hashGenerator'
import { baseURL, privateKey, APIKey } from '../security/apiParameters'

const getBaseURL = (key) =>{
    if (key === generateHash(KEY))
        return baseURL
    else
        return false
}

const getPrivateKey = (key) =>{
    if (key === generateHash(KEY))
        return privateKey
    else
        return false
}

const getAPIKey = (key) => {
    if (key === generateHash(KEY))
        return APIKey
    else
        return false
}

const getResourceURL = (resource, baseURL, timesstamp, apiKey, privateKey ) => {
    const stringHASH = timesstamp + privateKey + apiKey 
    const resourceURL = baseURL + resource + '?ts=' + timesstamp 
        + '&apikey=' + apiKey + '&hash=' + generateHash(stringHASH)
    return resourceURL;
}

export { getBaseURL, getPrivateKey, getAPIKey, getResourceURL };