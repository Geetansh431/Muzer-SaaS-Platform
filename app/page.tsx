import Image from "next/image";
import { Appbar } from "./components/Appbar";

// console.log("GOOGLE CLIENT ID = ", process.env.GOOGLE_CLIENT_ID);
// console.log("GOOGLE CLIENT SECRET = ",process.env.GOOGLE_CLIENT_SECRET);

export default function Home() {
  return (
    <main>
      <Appbar/>
    </main>
  );
}
