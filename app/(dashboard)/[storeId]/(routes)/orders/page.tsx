import React from "react";
import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { OrderColumn } from "./components/columns";
import { formater } from "@/lib/utils";
import OrderClient from "./components/client";

const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      ordeerItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formatedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    product: item.ordeerItems
      .map((orderItem) => orderItem.product.name)
      .join(", "),
    totalPrice: formater.format(
      item.ordeerItems.reduce(
        (total, item) => total + Number(item.product.price),
        0
      )
    ),
    isPaid: item.isPaid,
    createdAt: format(item.createdAt, "MMM do yyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formatedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
