import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default async function AboutComponent() {
  return (
    <div className="
      flex flex-col md:flex-row items-center justify-center w-full px-4 
      md:px-8 space-y-8 md:space-y-0 md:space-x-8"
    >  
      <div id="text-container"
        className="
          flex flex-1 flex-col items-center justify-center space-y-4 
          text-center 2xl:text-left md:max-w-4xl"
      >
        <div>
          <p className="text-2xl md:text-2.5xl lg:text-4xl">
            <code>Hi, my name is</code>
          </p>

          <p className="text-5xl md:text-6xl lg:text-8xl font-extrabold bg-gradient-to-r from-red-500 via-red-950 to-red-500 inline-block text-transparent bg-clip-text">
            <code>Domen Krivic</code>
          </p>

          <p className="text-2xl md:text-2.5xl lg:text-4xl">
            <code>Student, focused on ethical hacking and AI.</code>
          </p>
        </div>

        <br />
        
        {/* Location */}
        <Link href="https://www.google.com/maps/place/Slovenia/@46.1471824,14.3267354,9z/">
          <code className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} className="h-7" /> Slovenia
          </code>
        </Link>
        
        {/* Buttons */}
        <div id="about-buttons" className="flex flex-row space-y-0 space-x-10 mt-4">
          <Link
            href="mailto:contact@xredcrystalx.com"
            className="bg-transparent border px-5 py-3 rounded-lg font-bold"
          >
            Contact Me
          </Link>
          <Link
            href="mailto:request@xredcrystalx.com"
            className="bg-red-500 text-black px-5 py-3 rounded-lg font-bold"
          >
            Request CV
          </Link>
        </div>
      </div>

      {/* Image Section - hidden on small screens and max-width applied for larger screens */}
      <div className="hidden md:flex justify-center items-center flex-1 md:max-w-4xl">
        <Image
          src="/red_person.svg"
          width={400}
          height={400}
          alt="Red illustration"
        />
      </div>
    </div>
  );
}
