import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    meetingCreator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    meetingCode: { type: String, required: true }
})

const Meeting = mongoose.model("Meeting", meetingSchema);

export default Meeting;