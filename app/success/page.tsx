import type { Metadata } from "next";
import SuccessPage from "@/containers/successPage";

export const metadata: Metadata = {
  title: "Success",
  description: "Shining God's light to the world.",
};

export default function Success() {
  return (
    <div className="w-full">
      <SuccessPage />
    </div>
  );
}
