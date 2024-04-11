const { default: mongoose} = require("mongoose")


const foodModel = new mongoose.Schema({
    name:String,
    price:String,
    img_path:String,
    description:String,
    resto_id:mongoose.Schema.Types.ObjectId
});

export const foodSchema= mongoose.model.foods || mongoose.model("foods", foodModel)