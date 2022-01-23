import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface INavLink {
  href: string;
  inactive?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
}
const NavLink: React.FunctionComponent<INavLink> = (props) => {
  const { href, children, inactive, onClick, className } = props;
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <a
        className={`p-2 nav-link ${className} ${
          !inactive && isActive ? "active" : ""
        }`}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
