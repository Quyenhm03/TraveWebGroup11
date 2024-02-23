import express from 'express'
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', verifyUser, createBooking)
router.get('/:id', verifyUser, getBooking)
router.get('/', verifyAdmin, getAllBooking)
router.delete('/:id', deleteBooking)
router.get('/search/getBookingCount', getBookingCount)

export default router
