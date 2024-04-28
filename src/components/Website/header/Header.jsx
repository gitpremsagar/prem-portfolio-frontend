import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex bg-gray-900">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
          <NavLink href="/projects" text="Projects" />
          <NavLink href="/contact" text="Contact" />
        </ul>
      </nav>
    </header>
  );
}
