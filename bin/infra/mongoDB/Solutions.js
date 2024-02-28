import mongoose from "mongoose";

const solutionsSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
    },
    definition: {
        type: String,
        required: true,
    },
});

const Solution = mongoose.model('Solution', solutionsSchema);


export default Solution;