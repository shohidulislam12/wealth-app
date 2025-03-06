import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  try {
    // Check if the user already exists in the database
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    // Construct full name
    const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();

    // Create a new user
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0]?.emailAddress || "", // Ensure safe access
      },
    });

    return newUser;
  } catch (err) {
    console.error("Error checking/creating user:", err);
    return null;
  }
};
