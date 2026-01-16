import Contact from "../models/contactModel.js";

export const NewContact = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber, query } = req.body;

    if (!fullName || !email || !mobileNumber || !query) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const newContact = await Contact.create({
      fullName,
      email,
      mobileNumber,
      query,
    });

    res.status(201).json({message:"Thanks for Contacting us, We will get back to you in next 24 hours"});

  } catch (error) {
    next(error);
  }
};
