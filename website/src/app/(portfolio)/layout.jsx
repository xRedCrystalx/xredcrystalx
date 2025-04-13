import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import "@/src/styles/globals.css";
import BackgroundCanvas from "@/src/lib/background";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHome, faPen, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});


export const metadata = {
  title: "xRedCrystalx",
  description: "Red's portfolio website"
};


export default function PortfolioLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <BackgroundCanvas />
    
        {/* Header */}
        <header className="relative top-3 bottom-1 left-0 w-full flex justify-center bg-transparent py-8 z-50">
          
          <nav className="
            flex flex-row gap-5 p-4 text-xl
            pr-12 pl-12 mb-3

            md:gap-15 md:text-2xl
            font-medium rounded-3xl border"
          >
            
            <Link href="/" className="red-transition h-full flex items-center">
              <span className="md:hidden"> <FontAwesomeIcon icon={faHome} className="h-8"/> </span>
              <code className="hidden md:inline">Home</code>
            </Link>

            <Link href="/blog"className="red-transition h-full flex items-center">
              <span className="md:hidden"> <FontAwesomeIcon icon={faPen} className="h-8"/> </span>
              <code className="hidden md:inline">Blog</code>
            </Link>
            
            <Link href="/rexus" className="red-transition h-full flex items-center">
              <code>Rexus</code>
            </Link>
            
            <Link href="mailto:contact@xredcrystalx.com" className="red-transition h-full flex items-center">
              <span className="md:hidden"> <FontAwesomeIcon icon={faEnvelope} className="h-8 text-red-500"/> </span>
              <code 
                className="hidden md:inline bg-red-500 text-black px-4 py-1.5 rounded-lg">
                Contact me
              </code>
            </Link>

          </nav>
        </header>
        
        
        {/* Main Content */}
        {children}
        

        {/* Footer */}
        <footer className="relative flex flex-col left-0 w-full bg-transparent py-8 z-50">
          <nav className="flex items-center justify-center gap-4 md:gap-6">
            <Link 
              href="https://discord.gg/gzx3kxu68x" 
              target="_blank" rel="noopener noreferrer" 
              className="red-transition"
            >
              <FontAwesomeIcon icon={faDiscord} className="h-10 md:h-15" />
            </Link>
            
            <Link 
              href="https://github.com/xRedCrystalx" 
              target="_blank" rel="noopener noreferrer" 
              className="red-transition"
            >
              <FontAwesomeIcon icon={faGithub} className="h-10 md:h-15" />
            </Link>

            <Link 
              href="https://www.linkedin.com/in/domen-krivic-a3824621b/" 
              target="_blank" rel="noopener noreferrer" 
              className="red-transition"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-10 md:h-15" />
            </Link>

            <Link 
              href="https://www.youtube.com/@redcrystal3170" 
              target="_blank" rel="noopener noreferrer" 
              className="red-transition"
            >
              <FontAwesomeIcon icon={faYoutube} className="h-10 md:h-15" />
            </Link>
            
            <Link 
              href="https://x.com/xRedCrystal" 
              target="_blank" rel="noopener noreferrer" 
              className="red-transition"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-10 md:h-15" />
            </Link>
          </nav>
          
          <div className="flex gap-2 justify-center mt-2 text-sm text-gray-500">
            <p>&copy; 2025</p>
            <p>-</p>
            
            <Link href="https://xredcrystalx.com"
              className="red-transition"
            >xRedCrystalx</Link>
            <p>-</p>
            
            <Link href="https://github.com/xRedCrystalx/xredcrystalx"
              className="red-transition"
            >Source code</Link>
          </div>
        </footer>
        
      </body>
    </html>
  );
}
