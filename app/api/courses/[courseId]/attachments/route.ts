import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const POST = async (
  req: Request,
  { params }: { params: { courseId: string } }
) => {
  try {
    const { userId } = auth();
    const { courseId } = params;
    const { url } = await req.json();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    const courseOwner = await db.course.findUnique({
      where: { id: courseId, userId },
    });
    if (!courseOwner) return new NextResponse("Unauthorized", { status: 401 });
    const attachment = await db.attachment.create({
      data: {
        url,
        name: url.split("/").pop(),
        courseId,
      },
    });
    return NextResponse.json(attachment);
  } catch (error) {
    console.log("[COURSE_ID_ATTACHMENT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
