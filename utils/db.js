import { configDotenv } from 'dotenv';
import mongoose  from 'mongoose'
configDotenv();

const connect =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_CONNECT)
        
    } catch (error) {
        throw new Error("connection failed");
    }
}
export default connect;