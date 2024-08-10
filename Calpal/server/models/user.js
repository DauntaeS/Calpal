import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Use minlength instead of min
      maxlength: 64, // Use maxlength instead of max
    },
    role: {
      type: String,
      default: "Subscriber",
    },
    image: {
      public_id: {
        type: String,
        default: "", // Provide default values if necessary
      },
      url: {
        type: String,
        default: "", // Provide default values if necessary
      },
    },
    resetCode: {
      type: String,
      default: "", // Provide default value if necessary
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
