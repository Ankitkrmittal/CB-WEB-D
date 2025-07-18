import mongoose, {Schema} from "mongoose";

const bookSchema = new Schema({
    name: {type: String, required: true},
    year: {type: Number},
    author: {type: Schema.Types.ObjectId, required: true, ref: 'Author'},   
})

export default mongoose.model('Book', bookSchema);