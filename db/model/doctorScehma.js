import { Schema, model } from "mongoose";

const doctorSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    speclization: {
      type: String,
      required: true,
      trim: true,
    },
    department:{
        type :Schema.Types.ObjectId,
        refe :'Department'
    },
    password:{
      type :String,
      required : true,
    }
  },
  {
    timestamps: true,
  }
);

const Doctor = model("Doctor", doctorSchema);
export default Doctor;
