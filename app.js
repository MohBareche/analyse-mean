const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);


module.exports = app