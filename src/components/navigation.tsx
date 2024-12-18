use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  title: string;
  path: `/${string}`;
};

// We hardcode pages here, but you could get this information from some external source (e.g. CMS, DB, config file, etc).
const pages: Page[] = [
  { title: "Home", path: "/" },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Menu",
    path: "/menu",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "Community",
    path: "/community",
  },
];

function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={
          page.path === "/"
            ? pathname === page.path
              ? "font-extrabold"
              : ""
            : pathname.startsWith(page.path)
            ? "font-extrabold"
            : ""
        }
      >
        {page.title}
      </Link>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();
  return (
    <ul className="flex justify-center space-x-4 mt-8">
      {pages.map((page, index) => processPage(page, index, pathname))}
    </ul>
  );
}
