import mongoose from "mongoose";

const behaviourSchema=mongoose.Schema({
    behaviour: String
});

const behaviourModel=mongoose.model("behaviourmodel",behaviourSchema);

export default behaviourModel;
