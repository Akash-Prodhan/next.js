import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        welcome in services page
      </h1>
      <ul>
        <li>
          <Link href={"/"}>home</Link>
        </li>
      </ul>
    </div>
  );
}