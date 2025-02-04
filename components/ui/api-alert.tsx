"use client";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Copy, Server } from "lucide-react";
import { text } from "stream/consumers";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";
import toast from "react-hot-toast";

interface ApiAlertProps {
  title: string;
  description: string;
  varient: "public" | "admin";
}

const textMap: Record<ApiAlertProps["varient"], string> = {
  public: "public",
  admin: "admin",
};

const variantMap: Record<ApiAlertProps["varient"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  varient = "public",
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("Api route copied to the clipboard");
  };
  return (
    <Alert>
      <Server className="h-4 w-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}

        <Badge variant={variantMap[varient]}> {textMap[varient]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative bg-muted rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant="outline" size="icon" onClick={onCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default ApiAlert;
