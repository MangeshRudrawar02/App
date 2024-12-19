import mongoose from 'mongoose';

export async function Connect() {

    try{
        mongoose.connect(process.env.MONGO_URI!)
    }catch(error){
        console.log(error);
    }
    
}