import Link from "next/link";

export default function Header() {
  const menu = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
    },
    {
      id: 3,
      name: "Work",
      href: "/work",
    },
  ];
  return (
    <div>
      <header>
        <div className="container">
          <div>
            <Link href="/">
              <a>Scafeli</a>
            </Link>
          </div>
          <div>
            <ul>
              {menu.map((item) => (
                <li key={item.id}>
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
