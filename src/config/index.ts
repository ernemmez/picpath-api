import dotenv = require('dotenv');
import assert = require('assert');

dotenv.config();

interface IConfig {
    port: string | undefined
    host: string | undefined;
    host_url: string | undefined;
    firebaseConfig: {
        apiKey: string | undefined;
        authDomain: string | undefined;
        projectId: string | undefined;
        storageBucket: string | undefined;
        messagingSenderId: string | undefined;
        appId: string | undefined;
    };    
};

const {
    PORT,
    HOST,
    HOST_URL,
    FB_API_KEY,
    FB_SENDER_ID,
    FB_APP_ID
} = process.env;

assert(PORT, 'PORT is required');
assert(PORT, 'HOST is required');

const conf: IConfig = {
    port: PORT,
    host: HOST,
    host_url: HOST_URL,
    firebaseConfig: {
        apiKey: FB_API_KEY,
        authDomain: "picpath-demo.firebaseapp.com",
        projectId: "picpath-demo",
        storageBucket: "picpath-demo.appspot.com",
        messagingSenderId: FB_SENDER_ID,
        appId: FB_APP_ID,
    }
};

export default conf;