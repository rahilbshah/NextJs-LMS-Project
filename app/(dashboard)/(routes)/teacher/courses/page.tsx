import { auth } from "@clerk/nextjs";
import { DataTable } from "./_components/data-table";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { columns } from "./_components/column";

const CoursesPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
