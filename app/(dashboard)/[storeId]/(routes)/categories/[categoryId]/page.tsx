import prismadb from "@/lib/prismadb";
import React from "react";
import { CategoryForm } from "../components/category-form";
import BillboardPage from "../../billboards/page";
import BillboardForm from "../../billboards/components/billboard-form";
// todo: 7:26
// Tables in NextJs Using shadcn/ui and TanStack Table

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-8 pt-6 p-8">
        <div>Hello</div>
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
