import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formater = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});
