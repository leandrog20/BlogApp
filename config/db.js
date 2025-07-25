import dotenv from 'dotenv'
dotenv.config()

const mongoURI = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI_PROD : process.env.MONGO_URI_DEV

export default { mongoURI };