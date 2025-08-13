import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        welcome in home page
      </h1>
      <ul>
        <li>
          <Link href={"/about"}>about</Link>
        </li>
        <li>
          <Link href={"/services"}>services</Link>
        </li>
        <li>
          <Link href={"/contact"}>contact</Link>
        </li>
      </ul>
    </div>
  );
}
