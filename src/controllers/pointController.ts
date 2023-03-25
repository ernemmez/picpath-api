import Point from '../models/point';
import firestore, { setDoc, doc } from '../config/db';

const addPoint = async (req: any, res: any, next: any) => {
    try {
        const data = req.body;
        const point = new Point(data.id, data.name, data.createdDate, data.sharedPosts, data.author, data.location)
        await setDoc(doc(firestore, "points", `${data.id}`), data);

        res.send('point succesfuly added to fs');
    }catch (err: any) {
        res.status(400).send(err.message);
    }
}

export default addPoint;