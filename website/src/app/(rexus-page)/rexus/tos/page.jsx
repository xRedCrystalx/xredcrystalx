
export default async function RexusTOS() {
  return (
    <main className="flex-grow mx-[10%] lg:mx-[30%] lg:max-w-6xl ">
      
      <div className="flex flex-col items-center">
      
        <img src="/rexus.svg" className="h-40" />
        <code className="text-5xl lg:text-7xl font-bold">Terms of Service</code>
        <code className="text-gray-500">
          Last updated: 10 May 2025
          (First public release)
        </code>
      
      </div>

      <h2 className="text-3xl font-bold mb-3 mt-15" id="introduction">
        <code>Introduction:</code>
      </h2>
      <p>
        <b>Rexus</b> (hereinafter referred to as "the App") is a Discord application designed to enhance and secure servers through advanced detection and automated actions. 
        The App is currently in its <b>beta phase</b> and is undergoing continuous development and improvement.
        <br /><br />
        
        By utilizing Rexus, you consent to the following <a href="/rexus/tos" className="text-red-500 hover:underline">Terms of Service</a> and <a href="/rexus/privacy" className="text-red-500 hover:underline">Privacy Policy</a>.

        You acknowledge that the App necessitates <b>administrative privileges</b> to operate effectively and willingly grant these permissions.
        <br /><br />
        Please read these terms carefully before inviting and using the App. By inviting and using Rexus, you agree to be legally bound by these terms.
      </p>


      <h2 className="text-3xl font-bold mb-3 mt-15" id="user-conduct">
        <code>1. User Conduct:</code>
      </h2>
      <p>
        You agree to use the App in accordance with all applicable laws and not to use the App for any unlawful or harmful purposes. The developer reserves the right to terminate or restrict access to the 
        App for any user or guild that violates these terms or engages in abusive behavior.
      </p>


      <h2 className="text-3xl font-bold mb-3 mt-15" id="data-collection-and-usage">
        <code>2. Data Collection and Usage</code>
      </h2>
      <p>
        The App is authorized to monitor the guild and report data back to the developer in an anonymous manner. This data collection is solely for the purpose of enhancing the App's protection capabilities and effectiveness.
        For a more detailed explanation, please refer to the <a href="/rexus/privacy" className="text-red-500 hover:underline">Privacy Policy</a>.
      </p>


      <h2 className="text-3xl font-bold mb-3 mt-15" id="subscriptions-and-pricing">
        <code>3. Subscriptions and Pricing</code>
      </h2>
      <p>
        The App offers different subscription tiers:
      </p>

        <ul className="list-[square] ml-7 mt-3 mb-3">
          <li>
            <b className="text-red-300">Free</b>: Access to all functionalities of the App, with certain limitations.
          </li>
          <li>
            <b className="text-red-300">Support ($1/month)</b>: Higher usage limits.
          </li>
          <li>
            <b className="text-red-300">Premium ($5/month)</b>: Even higher usage limits and faster support.
          </li>
        </ul>
      <p>
        Prices are subject to change in the future. Subscribers will be notified of any changes in pricing.
      </p>


      <h2 className="text-3xl font-bold mb-3 mt-15" id="limitation-of-liability">
        <code>4. Limitation of Liability</code>
      </h2>
      <p>
        The App is provided "as is" without any warranties, express or implied. The developer is not liable for any damages or losses resulting from the use of the App, 
        including but not limited to data loss, security breaches, or server downtime.
      </p>


      <h2 className="text-3xl font-bold mb-3 mt-15" id="changes-modifications">
        <code>5. Changes/Modifications</code>
      </h2>
      <p>
        The developer reserves the right to modify these <a href="/rexus/tos" className="text-red-500 hover:underline">Terms of Service</a> and <a href="/rexus/privacy" className="text-red-500 hover:underline">Privacy Policy</a> at any time.
        Users will be notified of any significant changes through Discord or other appropriate means. Continued use of the App after any changes to the terms constitutes acceptance of the new terms.
      </p>


      <h2 className="text-3xl font-bold mb-3 mt-15" id="termination">
        <code>6. Termination</code>
      </h2>
      <p>
        You may stop using the App at any time by removing it from your guilds. The developer reserves the right to terminate or suspend access to the App for any user or guild that violates these terms.
      </p>

      <h2 className="text-3xl font-bold mb-3 mt-15" id="contact-information">
        <code>7. Contact Information</code>
      </h2>
      <p>
        If you have any questions or concerns about <a href="/rexus/tos" className="text-red-500 hover:underline">Terms of Service</a> or <a href="/rexus/privacy" className="text-red-500 hover:underline">Privacy Policy</a>, 
        please contact me at <a href="mailto:rexus@xredcrystalx.com" className="text-red-500">rexus@xredcrystalx.com</a>.
      
      </p>


      <h2 className="text-3xl font-bold mb-3 mt-15" id="definitions">
        <code>Definitions</code>
      </h2>
      <ul className="list-[square] ml-7 mt-3 mb-3">
        <li>
          <b className="text-red-300">App</b>: Refers to "Rexus", the Discord application designed to secure servers through advanced detection and automated actions.
        </li>
        <li>
          <b className="text-red-300">user</b>: Any individual or entity that invites and uses the App in their Discord guild.
        </li>
        <li>
          <b className="text-red-300">guild</b>: A server within the Discord platform where the App is invited and utilized.
        </li>
        <li>
          <b className="text-red-300">developer</b>: The individual (xRedCrystalx) responsible for creating, maintaining, and updating the App.
        </li>
        <li>
          <b className="text-red-300">Terms of Service (ToS)</b>: The rules and guidelines that govern the use of the App.
        </li>
        <li>
          <b className="text-red-300">Privacy Policy</b>: The document outlining how the App collects, uses, and protects user data.
        </li>
      </ul>

    </main>
  ); 
}