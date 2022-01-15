import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface INavLink {
  href: string;
}
const NavLink: React.FunctionComponent<INavLink> = (props) => {
  const { href, children } = props;
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <a className={`p-2 nav-link ${isActive ? "active" : ""}`} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
