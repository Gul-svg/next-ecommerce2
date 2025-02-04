import prismadb from "@/lib/prismadb";
import React from "react";

import SizeForm from "../components/size-form";

const SizesPage = async ({ params }: { params: { sizeId: string } }) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-8 pt-6 p-8">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
};

export default SizesPage;
