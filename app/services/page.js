import Link from "next/link";

export default function services() {
  return (
    <div>
      <h1>
        welcome in services page
      </h1>
      <Link href={"/"}> Go to Home page</Link>
      <ul>
        <h1>All Services</h1>
        <li>
          <Link href={"/services/web"}>web development</Link>
        </li>
        <li>
          <Link href={"/services/app"}>app development</Link>
        </li>
        <li>
          <Link href={"/services/android"}>android development</Link>
        </li>
      </ul>
    </div>
  );
}