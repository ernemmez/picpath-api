import config from "./index";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const app = initializeApp(config.firebaseConfig);
const firestore = getFirestore(app);

export { setDoc, doc };

export default firestore;
