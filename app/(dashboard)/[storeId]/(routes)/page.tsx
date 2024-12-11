import React from "react";

const Dashboard = ({ params }: { params: { storeId: string } }) => {
  return <div>This is a {params.storeId}</div>;
};

export default Dashboard;
