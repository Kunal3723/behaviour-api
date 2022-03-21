import mongoose from "mongoose";

const behaviourSchema = mongoose.Schema({
    title: String,
    Description: String,
    behaviour_type: String,
    userId:String
});

const behaviourModelE = mongoose.model("behaviourmodelE", behaviourSchema);

export default behaviourModelE;
