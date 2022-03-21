import behaviourModel from "../models/behaviourModel.js";

export async function getBehaviours(req, res) {
    try {
        const behaviours =await behaviourModel.find();
       
        res.status(200).send(behaviours);
    } catch (error) {
        console.log(error);
    }
} 