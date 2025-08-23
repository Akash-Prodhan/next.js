import Link from "next/link";

export const metadata = {
  title: "WebDev"
}

export default function web() {
  return (
    <div>
      <h1>
        Web Development
      </h1>
      <ul>
        <li>
          <Link href={"/services"}>return in services page</Link>
        </li>
      </ul>
    </div>
  );
}