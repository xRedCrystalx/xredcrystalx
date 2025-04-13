import Image from "next/image";
import Link from "next/link";

import AboutComponent from "@/src/components/about";

import SkillBlock from "@/src/components/skill";
import ProjectComponent from "@/src/components/project";


export default async function Home() {
  return (
    <main className="flex-grow grid items-center font-[family-name:var(--font-geist-sans)]">
      
      <AboutComponent />

      {/* Skills  */}
      <div className="flex flex-col items-center justify-center p-6 lg:mt-15">
        <code className="text-3xl lg:text-5xl font-semibold pb-10">My skills:</code>

        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
          <SkillBlock
            title="Operating Systems:"
            images={["logos/android.svg", "logos/archlinux.svg", "logos/debian.svg", "logos/kali.svg"]}
          />
          <SkillBlock
            title="Databases:"
            images={["logos/postgresql.svg", "logos/sqlite.svg", "logos/mariadb.svg", "logos/mongodb.svg"]}
          />
          <SkillBlock
            title="Languages:"
            images={["logos/python.svg", "logos/lua.svg", "logos/go.svg", "logos/markdown.svg"]}
          /> 
          <SkillBlock
            title="Programs:"
            images={["logos/git.svg", "logos/vscode.svg", "logos/brave.svg"]}
          />
        </div>
        <code className="text-2xl font-semibold pt-5">And much more...</code>
      </div> 

      <hr className="m-15" />

      {/* Projects Section */}
      <div className="flex flex-col items-center text-center p-6">
        <code className="text-3xl sm:text-5xl font-semibold">Projects:</code>

        {/* Rexus Project */}
        <div className="p-6 m-4 border rounded-lg max-w-3xl flex flex-col sm:flex-row items-center sm:items-start text-left">
          <Image src="/rexus.svg" width={200} height={200} alt="Rexus logo" className="mb-4 sm:mb-0 sm:mr-6" />
          
          <div className="flex flex-col items-center items-sm:start">
          
            <code className="text-3xl sm:text-4xl font-bold">Rexus</code>
            <p className="text-lg sm:text-2xl mt-2 ">My main personal project - an advanced security bot for Discord.</p>
          

            <div className="flex flex-row space-y-0 space-x-5 mt-5">
              <Link href="https://discord.com/oauth2/authorize?client_id=980031906836009000" className="bg-red-500 text-black px-4 py-2 rounded-lg">
                <code>Invite</code>
              </Link>
              <Link href="/rexus" className="bg-transparent border px-4 py-2 rounded-lg" >
                <code>Rexus' site</code>
              </Link>
            
            </div>
          
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          <ProjectComponent 
            image="/xredutils.svg"
            github="https://github.com/xRedCrystalx/xRedUtils"
          />
          <ProjectComponent 
            image="logos//python.svg"
            github="https://github.com/xRedCrystalx/aiomaria"
          />
          <ProjectComponent 
            image="logos//python.svg"
            github="https://github.com/xRedCrystalx/RedProxies"
          />
        </div>
      </div>
    </main>
  );
}
