import { Metadata } from "next";
import PageT2 from "./component/container";

export const metadata: Metadata = {
  title: "Page 2",
  description: "...",
};
export default function Page1() {
  return <PageT2 />;
}
