import { Document, Schema, model, models } from "mongoose";

export interface IMail extends Document {
  header: string;
  body: string;
  sender: string;
  client: {
    _id: string;
    firstName: string;
  };
  email: string;
  createdAt?: Date;
}

const MailSchema = new Schema({
  header: { type: String, required: true },
  body: { type: String, required: true },
  sender: { type: String, requried: true },
  client: { type: Schema.Types.ObjectId, ref: "User" },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Mail = models?.Mail || model("Mail", MailSchema);

export default Mail;
