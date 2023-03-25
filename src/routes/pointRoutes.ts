import express = require('express');
import { addPoint } from "../controllers";

const router = express.Router();

router.post('/add-point', addPoint);

export default {
    routes: router
}
