const moongoose = require('mongoose');

const connectDB=async ()=>{
    try {
        await moongoose.connect(process.env.MONGOURL, {
            
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB;
