import mongoose from 'mongoose';

const connectMongoDB = (mongoURI: string): void => {
    mongoose.connect(mongoURI, { useNewUrlParser : true, useCreateIndex : true })
            .then(() => console.log(`Successfully conntected to ${mongoURI}`))
            .catch(error => {
                console.error('Error connecting to mongoDB : ', error);
                process.exit(1);
            });
};

export default connectMongoDB;
