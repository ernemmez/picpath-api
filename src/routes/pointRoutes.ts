import express = require('express');
import { addPoint, test } from "../controllers";

const router = express.Router();

router.post('/add-point', addPoint);
router.get('/test', test);

export default {
    routes: router
}
