"use client";
import { Modal } from "@/components/ui/Modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";

import Image from "next/image";
//
// todo:  1:53
import React, { Children, useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div className="p-4">root page</div>;
};

export default SetupPage;
