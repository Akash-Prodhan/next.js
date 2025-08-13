import Link from "next/link";

export default function app() {
  return (
    <div>
      <h1>
        App Development
      </h1>
      <ul>
        <li>
          <Link href={"/services"}>return in services page</Link>
        </li>
      </ul>
    </div>
  );
}