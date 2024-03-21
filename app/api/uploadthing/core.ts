import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();
const handleAuth = () => {
  const { userId } = auth();
  //   const isAuthorized = isTeacher(userId);

  if (!userId) throw new Error("Unauthorized");
  return { userId };
};
export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4GB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  courseAttachment: f({
    image: { maxFileSize: "4MB" },
    video: { maxFileSize: "1024MB" },
    text: { maxFileSize: "64KB" },
    pdf: { maxFileSize: "4MB" },
  })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;
export type OurFileRouter = typeof ourFileRouter;
