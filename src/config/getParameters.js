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

const getResourceURL = (resource, baseURL, timesstamp, apiKey, privateKey,offset = 0, limit = 0 ) => {
    const stringHASH = timesstamp + privateKey + apiKey 
    let resourceURL = baseURL + resource + '?ts=' + timesstamp 
        + '&apikey=' + apiKey + '&hash=' + generateHash(stringHASH) 
        
    if (offset > 0)
      resourceURL = resourceURL  + '&offset=' + offset

    if (limit > 0)
      resourceURL = resourceURL  + '&limit=' + limit
    return resourceURL;
}

export { getBaseURL, getPrivateKey, getAPIKey, getResourceURL };