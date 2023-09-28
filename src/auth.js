import CryptoJS from "crypto-js";

/**
 * Handles the authentication
 * It decrypts the token and compares it with the one stored in the .env file
 * I am using CryptoJS to decrypt the token
 * I am using the .env file to store the token and the secret
 */

export default function useAuth(token) {
    if (!token) return false;
    const bytes = CryptoJS.AES.decrypt(token, process.env.REACT_APP_SECRET);
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedToken === process.env.REACT_APP_TOKEN;
}
