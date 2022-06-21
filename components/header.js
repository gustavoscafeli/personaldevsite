import Link from "next/link";

export default function Header() {
  const menu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Work",
      href: "/work",
    },
  ];
  return (
    <div>
      <header>
        <div className="container">
          <div>
            <Link href={"/"}>
              <a>Gustavo Souza</a>
            </Link>
          </div>
          <div>
            <ul>
              {menu.map((item) => (
                <li>
                  <Link href={item.href}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
