import { routes } from "@/constants/route/route";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
      {routes.map((item, index) => (
        <Link href={item.path} key={index}>
          {index + 1}. {item?.title}
        </Link>
      ))}
    </main>
  );
}
