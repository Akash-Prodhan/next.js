import Link from "next/link";

export default function android() {
  return (
    <div>
      <h1>
        Android Development
      </h1>
      <ul>
        <li>
          <Link href={"/services"}>return in dervices page</Link>
        </li>
      </ul>
    </div>
  );
}