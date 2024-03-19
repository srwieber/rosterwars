import Image from "next/image";

export default function Home() {
  const img = "/images/shield.png";

  return (
    <main>
      <h1>Roster Wars</h1>
      <Image className="shield" src={"/images/shield.png"} alt="Image" width={1080} height={608} />
    </main>
  );
}
