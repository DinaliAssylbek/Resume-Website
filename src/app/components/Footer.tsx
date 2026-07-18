import Image from "next/image";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dinaliassylbek/",
  },
  {
    label: "GitHub",
    href: "https://github.com/DinaliAssylbek",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Dinali/",
  },
] as const;

const Footer = () => {
  return (
    <footer className="mx-28 my-15 flex items-center justify-between gap-8">
      <div>
        <h2 className="mb-3 text-2xl font-bold text-[var(--primary)]">
          Dinali Assylbek
        </h2>
        <div className="flex gap-1">
          <p className="text-[var(--neutral)]">
            Made with React & Next.js. Almaty, Kazakhstan
          </p>
          <Image
            src="/Kazakhstan.png"
            alt="Kazakhstan"
            width={24}
            height={24}
          />
        </div>
      </div>

      <nav className="flex flex-wrap gap-5" aria-label="Social links">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--neutral)] hover:text-[var(--secondary)]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
