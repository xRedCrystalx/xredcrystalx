import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import "@/src/styles/globals.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHome, faList } from '@fortawesome/free-solid-svg-icons';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "Blog",
  description: "Red's blog website"
};


export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        
        {/* Header */}
        <header className="relative w-full bg-transparent z-50">
          <nav className="
            flex flex-row gap-8 p-4 mb-3 mt-3 
            items-center justify-center lg:justify-normal
            text-2xl font-medium border"
          >
            <button className="red-transition h-full pl-4">
              <span> <FontAwesomeIcon icon={faList} className="h-7"/> </span>
            </button>

            <Link href="/" className="red-transition h-full">
              <span> <FontAwesomeIcon icon={faHome} className="h-7"/> </span>
            </Link>
            
            <Link href="/rexus" className="red-transition h-full">
              <code>Rexus</code>
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
