import { Schema,model } from "mongoose";


const appoinmentSchema = Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        refe: "Doctor",
    },
    user: {
        type: Schema.Types.ObjectId,
        refe: "User",
    },
    slot: {
        type: Schema.Types.ObjectId,
        refe: "Slot",
    },
});
    const Appoinment = model("Appoinment",appoinmentSchema);
    export default Appoinment;