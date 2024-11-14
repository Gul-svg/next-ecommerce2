"use client";
import React from "react";
import { Modal } from "../ui/Modal";
import { useStoreModal } from "@/hooks/use-store-modal";

const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="create store"
      description="Add a new store to products and catagories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      future create store form
    </Modal>
  );
};

export default StoreModal;
