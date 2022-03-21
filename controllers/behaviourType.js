import mongoose from "mongoose";
import behaviourModelE from "../models/behaviourModelE.js";
import UserModel from "../models/UserModel.js";

export async function getList(req, res) {

    // console.log(key);
    try {
        if (!(req.userId)) {

            return res.status(404).json({ message: "Unauthorized access" })
        }
        const user = await UserModel.findById(req.userId);

        if (!user) {

            return res.status(404).json({ message: "User does not exist" })

        }

        const behav_type = req.body;
        let key;
        for (var i in behav_type) {
            key = i;
        }
        const data = await behaviourModelE.find();
        const parti = data.filter(function (element) {

            return element.behaviour_type === key && element.userId===req.userId;
        })
        // console.log(data);
        res.status(200).send(parti);
    } catch (error) {
        console.log(error);
    }
}

export async function postList(req, res) {



    try {
        if (!(req.userId)) {

            return res.status(404).json({ message: "Unauthorized access" })
        }
        const user = await UserModel.findById(req.userId);

        if (!user) {

            return res.status(404).json({ message: "User does not exist" })

        }

        const { behaviour_type, title, Description } = req.body;
        const newPost = new behaviourModelE({ behaviour_type: behaviour_type, title: title, Description: Description, userId: req.userId });

        await newPost.save();

        res.status(200).send(newPost);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteList(req, res) {
    try {

        if (!(req.userId)) {

            return res.status(404).json({ message: "Unauthorized access" })
        }
        const user = await UserModel.findById(req.userId);

        if (!user) {

            return res.status(404).json({ message: "User does not exist" })

        }

        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send("No post exist with this id");
        }

        await behaviourModelE.findByIdAndRemove(id);
        res.status(200).send("Deleted Sucessfully");
    } catch (error) {
        console.log(error);
    }
}