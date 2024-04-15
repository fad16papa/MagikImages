import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

//Send email
export async function sendEmail(email: SendEmailParams) {
  try {
    await connectToDatabase();

    // Send email to user
  } catch (error) {
    handleError(error);
  }
}
