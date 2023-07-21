import { routes } from "@/constants/route/route";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
      <div className="routes grid grid-cols-1 h-fit gap-4 ">
        {routes.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className="translate-x-0 hover:translate-x-2 hover:ease-in-out hover:duration-300"
          >
            {index + 1}. {item?.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
