const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const mongoose = require('mongoose')
const keys = require('./config/keys')

// Connection à la base de données
mongoose.connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('Connecté à la base de données...'))
  .catch(error => console.error('Impossible de se connecter à la base de données ! ', error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

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