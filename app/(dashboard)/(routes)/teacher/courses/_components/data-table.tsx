import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const DataTable = () => {
  return (
    <div>
      <div className="flex items-center py-4 justify-between">
        {/* <Input placeholder="Filter courses..." /> */}
        <Link href="/teacher/create">
          <Button>
            <PlusCircle className="h-4 w-4 mr-2" />
            New course
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DataTable;
