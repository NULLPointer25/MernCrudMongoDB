const app = require("./app");
const PORT = 9001;
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Pratik:PratikMongodb@cluster0.xzaoy.mongodb.net/mernstack?retryWrites=true&w=majority").then(data=>{
    console.log("Sonnection Succesfull to DataBase ");
    app.listen(PORT,()=>{
        console.log(`server running @ ${PORT}`);
    })
}).catch(err=>{
    console.log(err);
})
