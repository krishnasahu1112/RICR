import jwt from "jsonwebtoken";

export const genToken = async (user, res) => {
  try {
    const payload = {
      id: user._id,
      role: user.role || 'admin',
    };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'1d'}); //1m, 57

    console.log(token);
    res.cookie("parleG", token, {
        maxAge:1000*60*60*24,
        httpOnly: true,
        secure:false,
        samesite:"lax"
    });

  } catch (error) {
    throw error;
  }
};