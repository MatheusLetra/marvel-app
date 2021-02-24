import MD5 from "crypto-js/md5";

const generateHash = (stringKey) => {
    return MD5(stringKey).toString();
}

export { generateHash };