import { Geist, Geist_Mono, Roboto } from "next/font/google";

import "@/src/styles/globals.css"
import '@fortawesome/fontawesome-svg-core/styles.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHome, faPen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Rexus",
  description: "Rexus, advanced discord bot"
};

export default function RexusLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased flex flex-col min-h-screen`}>

        {/* Header */}
        <header className="relative top-3 bottom-1 left-0 w-full flex justify-center bg-transparent py-8 z-50">
          
          <nav className="
            flex flex-row gap-5 p-4 text-xl
            pr-12 pl-12 mb-3

            md:gap-15 md:text-2xl
            font-medium rounded-3xl border"
          >
            
            <Link href="/" className="red-transition h-full flex items-center">
              <span className="md:hidden"> <FontAwesomeIcon icon={faHome} className="text-3xl"/> </span>
              <code className="hidden md:inline">Home</code>
            </Link>

            <Link href="/blog"className="red-transition h-full flex items-center">
              <span className="md:hidden"> <FontAwesomeIcon icon={faPen} className="text-3xl"/> </span>
              <code className="hidden md:inline">Blog</code>
            </Link>
            
            <Link href="/rexus" className="red-transition h-full flex items-center">
              <code>Rexus</code>
            </Link>
            
            <Link href="mailto:contact@xredcrystalx.com" className="red-transition h-full flex items-center">
              <span className="md:hidden"> <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-red-500"/> </span>
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
              <FontAwesomeIcon icon={faDiscord} className="text-4xl md:text-6xl" />
            </Link>
            
            <Link 
              href="https://github.com/xRedCrystalx" 
              target="_blank" rel="noopener noreferrer" 
              className="red-transition"
            >
              <FontAwesomeIcon icon={faGithub} className="text-4xl md:text-6xl" />
            </Link>

            <Link 
              href="https://www.linkedin.com/in/domen-krivic-a3824621b/" 
              target="_blank" rel="noopener noreferrer" 
              className="red-transition"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-4xl md:text-6xl" />
            </Link>

            <Link 
              href="https://www.youtube.com/@redcrystal3170" 
              target="_blank" rel="noopener noreferrer" 
              className="red-transition"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-4xl md:text-6xl" />
            </Link>
            
            <Link 
              href="https://x.com/xRedCrystal" 
              target="_blank" rel="noopener noreferrer" 
              className="red-transition"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-4xl md:text-6xl" />
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
