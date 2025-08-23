import Link from "next/link";

export const metadata = {
  title: "Contact"
}

export default function Home() {
  return (
    <div>
      <h1>
        welcome in contact page
      </h1>
      <ul>
        <li>
          <Link href={"/"}>home</Link>
        </li>
      </ul>
    </div>
  );
}