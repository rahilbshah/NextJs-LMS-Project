import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    const { title } = await req.json();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!title) return new NextResponse("Title is Missing", { status: 400 });
    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
