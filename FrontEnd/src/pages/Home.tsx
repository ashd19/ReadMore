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
        <div className="flex flex-col items-center justify-center flex-grow space-y-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
            Button 1
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
}
