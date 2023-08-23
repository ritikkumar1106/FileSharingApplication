

import mongoose from "mongoose";


const DBConnection = async () => {
    const MONODB_URI = `mongodb+srv://user:_ritik_ll@file-sharing.kkiril3.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
        console.log('Database connected successful');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}


export default DBConnection;