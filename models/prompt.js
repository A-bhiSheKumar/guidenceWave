// import {Schema , model , models} from "mongoose";


// const PromptSchema = new Schema({
//     creator:{
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//     },
//     prompt:{
//         type: String,
//         required: [true , 'Prompt is required'],
//     },
//     tag:{
//         type:String,
//         required:[true , 'Tag is required']
//     }
// });

// //* Either get the prompt that already exists on the models object
// // if doesnot exist create a new one based on the promptSchmea
// const Prompt = models.prompt || model('Prompt' , PromptSchema)


// export default Prompt;

import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;