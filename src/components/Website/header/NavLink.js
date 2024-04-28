import Link from "next/link";
export default function NavLink({ href, text }) {
  return (
    <li className="px-6 py-5 font-semibold hover:bg-gray-700 text-white">
      <Link href={href}>{text}</Link>
    </li>
  );
}
