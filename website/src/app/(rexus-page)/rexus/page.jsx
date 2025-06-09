import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

export default async function Rexus() {
  return (
    <main className="flex-grow mx-[10%] lg:mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
        
        {/* Left image column */}
        <img src="/pda-side.webp"
          className="hidden lg:flex h-[65vh]"
        />          


        {/* Right info column */}
        <div className="flex flex-col space-y-6 mx-auto">
          
          <div className="flex justify-center lg:ml-[-25] ">
            <img src="/rexus.svg" className="h-45" />
          </div>
          
          <code className="text-6xl font-bold">Meet Rexus.</code>
          
          <div className="space-y-4">  
            <p className="font-sans">
              Powerful, privacy-respecting moderation built for communities of all sizes.
              <br />
              Protect your server, automate threats away, and stay in control — effortlessly.
            </p>
            
            <code className="text-[1.3rem] text-red-800 font-extrabold lg:text-2xl">
              One bot. Full control.
            </code>
          </div>

          
          {/* Action buttons */}
          <div className="flex flex-col gap-4 items-center lg:flex-row">
            
            <Link href="https://discord.com/oauth2/authorize?client_id=980031906836009000" 
              className="px-5 py-3 bg-red-500 text-black rounded-lg font-bold text-center">
              <code>Invite Rexus</code>
            </Link>
            
            <Link href="/rexus/docs" 
              className="px-5 py-3 bg-transparent border border-red-500 text-red-500 rounded-lg font-bold text-center">
              <code>Documentation</code>
            </Link>

            <Link href="https://discord.gg/gzx3kxu68x" 
              className="px-5 py-3 bg-transparent border border-white rounded-lg font-bold text-center">
              <code>Support Server</code>
            </Link>
          </div>

          {/* Legal */}
          <div className="flex gap-4 justify-center ">
            <Link href="/rexus/tos" className="red-transition">
              <FontAwesomeIcon icon={faScaleBalanced} className="text-5xl" />
            </Link>
            
            <Link href="/rexus/privacy" className="red-transition">
              <FontAwesomeIcon icon={faShieldHalved} className="text-5xl" />
            </Link>

          </div>

          {/* Future trusted */}
          <div>

          </div>

        </div>
      </div>
    </main>
  );
}
