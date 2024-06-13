import express from 'express'
import homeController from '../controllers/home.controller.js';
const router = express.Router()


router.route('/').get(homeController.getConfig )


export default router;