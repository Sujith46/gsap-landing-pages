import Link from "next/link";
import { ArrowLeft } from "react-feather";

export const BackToHome = ({ style }) => {
  return (
    <Link
      href={"/"}
      className={`${style} text-gray-400 flex items-center justify-center gap-2 hover:text-gray-100 ease-in-out duration-200`}
    >
      <ArrowLeft /> Back to Home page
    </Link>
  );
};
