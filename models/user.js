//Model based on which document of the user will we created that should be happen in the mdoel , user.js
import { Schema, model, models } from "mongoose";


const UserSchema = new Schema({
    email:{
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true , 'Email is required'],
    },
    username:{
        type: String,
        required:[true , 'Username is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    image:{
        type:String,
    }
});

//* This is how we use and export the mongoose schema in regular server(server that runs constly)
// const User = model ("User" , UserSChema);
// export default User;

// EXPLANATION ---> Ya, we can see the new term //* "models"
// The "models" object is provided by the Mongoose Libarary
// and it stores all the registered models.

// If a model names "User" alredy exists in the "modesl" object, it assigns that existing model to 
// that the existing model is reused

// This prevents redefining the model and ensured that the existing model is reused.

// If a model named "User" does not exists in the "models" object, the 
// "model" function from mongoose is called to create a new model

// The newly created model is then assigned to the "user" variable.

//* HERE

// Along side just creating  a new model 
//* First look into the models.user see if it is there ..>> and only we it is not there than crete a new MODEL

const User = models.User || model("User" , UserSchema);

export default User;


