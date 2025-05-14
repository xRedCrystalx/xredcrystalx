
export default async function RexusPrivacy() {
    return (
      <main className="flex-grow mx-[10%] lg:mx-[30%] lg:max-w-6xl ">
        
        <div className="flex flex-col items-center">
        
          <img src="/rexus.svg" className="h-40" />
          <code className="text-5xl lg:text-7xl font-bold">Privacy Policy</code>
          <code className="text-gray-500">
            Last updated: 10 May 2025
            (First public release)
          </code>
        
        </div>
  
        <h2 className="text-3xl font-bold mb-3 mt-15" id="introduction">
          <code>Introduction:</code>
        </h2>
        <p>
          Thank you for your interest in using Rexus. Before proceeding, <b>please carefully read, understand, and accept the <a href="/rexus/tos" className="text-red-500 hover:underline">Terms of Service</a> of Rexus</b>, 
          followed by this <a href="/rexus/privacy" className="text-red-500 hover:underline">Privacy Policy</a>.
          <br /><br />

          Your privacy is of utmost importance to me. I do <b className="text-red-500">not</b> sell or disclose any of your data to third parties. This <a href="/rexus/privacy" className="text-red-500 hover:underline">Privacy Policy</a> outlines 
          how your data is collected, used, and protected.
          <br /><br />

          To enhance the services provided by Rexus, I may utilize certain public information you provide. This includes, but is not limited to, 
          your Discord account ID, username, avatar, and the guilds you joined to. For detailed information regarding data usage and storage, please refer to the sections below.
        </p>
  
  
        <h2 className="text-3xl font-bold mb-3 mt-15" id="use-of-rexus">
          <code>Use of the Rexus app within Discord:</code>
        </h2> 
        <p>
          By using Rexus, you grant permission to <b className="text-red-300">xRedCrystalx (the developer) and designated application administrators (trusted individuals)</b> to
          access and process required information within your guild that Rexus has access to. This access is used for purposes including, but not limited to, 
          identifying and resolving issues, providing support, and ensuring seamless operation in collaboration with the guild's owner and administrators.
        </p>


        <h2 className="text-3xl font-bold mb-3 mt-15" id="user-information">
          <code>1. User information:</code>
        </h2>
        <ol>
          <li>
            <p><b>Stored information in database:</b></p>
            <ul className="list-[square] ml-7 mt-3 mb-3">
              <li>Identifier (User ID)</li>
              <li>User specific information (including but not limited to app configuration, premium/supporter status etc.)</li>
              <li>Guild specific information (including but not limited to moderation logs, notes etc.)</li>
            </ul>
          </li>
          <br />

          <li>
            <p>
              <b>Cached information:</b>
              <br />
              All data provided by Discord in JSON format is temporarily cached to support the application's protection algorithms.
            </p>
            <ul className="list-[square] ml-7 mt-3 mb-3">
              <li>Discord account names (global, display, account, nickname)</li>
              <li>Identifier (User ID)</li>
              <li>Avatar & banner (Avatar & banner image as URL, this also includes avatar decorations)</li>
              <li>Creation date & guild join dates</li>
              <li>Guild specific information (Mutual guilds, roles, nickname)</li>
              <li>Status and activities (current status and activitiy, including the client being used (web, phone, desktop))</li>
            </ul>

          </li>
          <br />

          <li>
            <p>
              <b>Private information:</b>
            </p>
            <p>
              No private information such as full names, billing addresses, goverment-issued IDs, or phone numbers are stored. The information referenced 
              in <b className="text-red-500">Stored information in database</b> and <b className="text-red-500">Cached information</b> are either publicly 
              available or accessible to authorized individuals (such as xRedCrystalx and app administrators) and guild-specific moderators/administrators only.
            </p>

          </li>

        </ol>
  

        <h2 className="text-3xl font-bold mb-3 mt-15" id="guild-information">
          <code>2. Guild information</code>
        </h2>
        <p>
          To ensure the proper functionality of Rexus, the application will request <code className="text-red-600">Administrator permissions</code> and recommend <b>(though not require)</b> positioning 
          its role as high as possible in the guild's role hierarchy. This ensures the application can moderate the guild effectively without permission-related disruptions.
        </p>
  
        <ol>
          <br />
          <li>
            <p><b>Stored information in database:</b></p>
            <ul className="list-[square] ml-7 mt-3 mb-3">
              <li>Identifier (Guild ID)</li>
              <li>Plugin/Module specific configuration (including but not limited to channel IDs, role IDs, user IDs, automod rule IDs, text etc.)</li>
            </ul>
          </li>
          <br />

          <li>
            <p>
              <b>Cached information:</b>
              <br />
              All data provided by Discord in JSON format is temporarily cached to support the application's protection algorithms.
            </p>
            <ul className="list-[square] ml-7 mt-3 mb-3">
              <li>General guild information (name, ID, description, banner, premium tier...)</li>
              <li>Guild structure, default channels & its configurations (categories, channels, threads, forums...)</li>
              <li>Roles, permissions & administrators</li>
              <li>Security information (mfa level, verification level, automod, filters...)</li>
              <li>Guild users (count, currently active...)</li>
              <li>Emojis, stickers & events</li>
            </ul>
            <br />
            <p className="text-red-500"><b>This information is not logged unless explicitly enabled by the guild owner and/or administrators.</b></p>

          </li>
        </ol>
  

        <h2 className="text-3xl font-bold mb-3 mt-15" id="messages">
          <code>3. Messages</code>
        </h2>
        <p>
          Rexus may access all newly created messages in your server and cache the last 100 messages for each channel. This caching is done to provide sufficient data for 
          chat/text algorithms and automated moderation to yield more accurate results.
          <br /><br />
          App does not store or log any message contents unless:
        </p>
  
        <ol className="list-decimal ml-7 mt-3 mb-3">
          <li>
            <p>
              <b className="text-red-300">Explicitly enabled in the configuration</b>: Such as "Log deleted messages" <b>IF</b> they were in the cache.
            </p>
          </li>
          <li>
            <p>
              <b className="text-red-300">Moderator/Administrator action</b>: When a moderator or administrator replies to a message with a moderation
              command (e.g., warn) as proof of the action taken.
            </p>
          </li>
          <li>
            <p>
              <b className="text-red-300">Violation of Discord's or Rexus' ToS & Privacy Policy or Law</b>: When message content could potentially violate Terms of Service, 
              Privacy Policy, or applicable laws, in which case it will be forwarded to the appropriate authorities.
            </p>
          </li>
        </ol>
        
        <br />
        <p>
          App does not store or log any message attachments unless:
        </p>
        <ol className="list-decimal ml-7 mt-3 mb-3">
          <li>
            <p>
              <b className="text-red-300">Explicitly enabled in the configuration</b>: Such as "Attachment filter" <b>IF</b> they were in the cache.
            </p>
          </li>
          <li>
            <p>
              <b className="text-red-300">Harmful, Inappropriate, or Unlawful attachments</b>: Which will be forwarded to the appropriate authorities.
            </p>
          </li>
        </ol>


        <h2 className="text-3xl font-bold mb-3 mt-15" id="ai">
          <code>4. Artificial Intelligence</code>
        </h2>
        <p>
          Currently, Rexus does not employ any form of artificial intelligence (AI). However, this may change in the future as the application evolves.
          <br /><br />
          All detections and protections are managed by complex, non-AI algorithms, which have been thoroughly tested and optimized by humans.
        </p>
  
  
        <h2 className="text-3xl font-bold mb-3 mt-15" id="security">
          <code>Security</code>
        </h2>
        <p>
          All databases utilized to provide Rexus's services are <b>strictly inaccessible to the public</b>.
          <br /><br />
          While I employ robust measures to protect your information, it is important to understand that no method of electronic transmission or storage is entirely secure, and absolute data security cannot be guaranteed.
          <br /><br />
          Consequently, I cannot be held liable for any data loss or breaches.
        </p>
  
  
        <h2 className="text-3xl font-bold mb-3 mt-15" id="definitions">
          <code>Definitions</code>
        </h2>
        <ul className="list-[square] ml-7 mt-3 mb-3">
          <li>
            <b className="text-red-300">developer</b>: The individual responsible for the development and operation of Rexus, known as xRedCrystalx. Also refeared as "me" and "I".
          </li>
          <li>
            <b className="text-red-300">guild</b>: A community within Discord where users can communicate and collaborate.
          </li>
          <li>
            <b className="text-red-300">cache</b>: Temporary storage used to store frequently accessed data for faster retrieval. Normally stored in RAM (Random Access Memory)
          </li>
          <li>
            <b className="text-red-300">attachment</b>: A file or document that accompanies a message or post, such as images, videos, or documents.
          </li>
          <li>
            <b className="text-red-300">user</b>: An individual who interacts with Rexus or Discord services.
          </li>
          <li>
            <b className="text-red-300">AI (Artificial Intelligence)</b>: Technology that enables machines to simulate human intelligence, potentially allowing for tasks such as problem-solving and learning.
          </li>
          <li>
            <b className="text-red-300">algorithm</b>: A set of rules or procedures designed to solve a specific problem or accomplish a particular task, often used in computing and data processing.
          </li>
        </ul>
  
      </main>
    ); 
  }