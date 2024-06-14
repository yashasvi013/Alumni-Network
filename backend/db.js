const mongoose = require("mongoose");

function connectToMongo() {
    mongoose.set("strictQuery", true);
    /*mongoose.connect('mongodb://127.0.0.1:27017/CG',
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false}
);*/
     mongoose.connect('mongodb+srv://saisujan08:MongoDB@cluster0.aanmuhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    );


    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
}

module.exports = connectToMongo;

/* mongoose.connect('mongodb://127.0.0.1:27017/CG',
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false}
); */
