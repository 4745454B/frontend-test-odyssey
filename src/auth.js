import CryptoJS from "crypto-js";

export default function useAuth(token) {
    if (!token) return false;
    const bytes = CryptoJS.AES.decrypt(token, process.env.REACT_APP_SECRET);
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedToken === process.env.REACT_APP_TOKEN;
}
