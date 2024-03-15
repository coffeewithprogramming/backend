    import { Schema, model } from "mongoose";

    const prescriptionSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
    },
    appoinment: {
        type: Schema.Types.ObjectId,
        refe: "Appoinment",
    },

    slot: {
        type: Schema.Types.ObjectId,
        refe: "Slot",
    },
    message :{
        type : String,
    },
    medicine:[{
        type : Schema.Types.ObjectId,       
        ref : "Pharmacy"
    }]

    });

    const Prescription = model("Prescription", prescriptionSchema);
    export default Prescription;
