import mongoose from 'mongoose';

const option = { useNewUrlParser : true, useCreateIndex : true };
let connection: any = null;

const connect = (mongoURI: string) => {
    if (connection && mongoose.connection.readyState === 1) {
        return Promise.resolve(connection);
    }

    return mongoose.connect(mongoURI, option).then(conn => connection = conn);
};

const connectMongoDB = (mongoURI: string): void => {
    connect(mongoURI)
    .then(() => console.log(`Successfully conntected to ${mongoURI}`))
    .catch(error => {
        console.error('Error connecting to mongoDB : ', error);
        process.exit(1);
    });
};

export default connectMongoDB;
