import User from "@models/User";
import { connectToDB } from "@utils/database";
import bcrypt from "bcrypt";

export const POST = async (res) => {
  const { username, email, password } = await res.json();
  connectToDB();

  const dbUser = await User.findOne({ email });
  if (dbUser) {
    return new Response("This account already exists", 500);
  }

  try {
    const passHashed = await bcrypt.hash(password, 10);
    await User.create({
      username,
      email,
      password: passHashed,
    });

    return new Response("Account created succesfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create account", { status: 500 });
  }
};
