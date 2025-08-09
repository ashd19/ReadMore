import { Navbar1 } from "@/components/navbar1";
import Image from "../assets/bg.gif";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background GIF */}
      <img
        src={Image}
        alt="Background GIF"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <Navbar1 />

        {/* Centered Buttons */}
       
      </div>
    </div>
  );
}
