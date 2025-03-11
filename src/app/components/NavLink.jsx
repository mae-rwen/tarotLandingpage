import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 tracking-wider text-[#E1D9F2] sm:text-base rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
