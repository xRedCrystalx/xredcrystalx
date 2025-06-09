'use client';

import { useState } from 'react';
import { InfoBlock, CodeBlock, NoteBlock, WarningBlock, CautionBlock } from '@/src/components/doc-blocks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function RexusDocs() {
    const [openSections, setOpenSections] = useState(['getting-started']);

    const toggleSection = (section) => {
        setOpenSections(prev => 
            prev.includes(section)
                ? prev.filter(s => s !== section) // remove section
                : [...prev, section]              // add section
        );
    };

    const isOpen = (section) => openSections.includes(section);

  return (
    <main className="flex flex-grow scroll-smooth justify-center" >
      <div className="flex mx-[2%] w-full lg:max-w-[60vw] font-sans">
       
        {/* Sidebar */}
        <aside className="hidden lg:block w-1/4 sticky top-10 h-[90vh] overflow-y-auto pr-4" style={{scrollbarWidth: 'none'}}>  
          
          {/* Side logo */}
          <div className="flex justify-center border-b-1 border-gray-700">
            <img src="/rexus.svg" className="h-30" />
          </div>
          
          
          <nav className="pt-8 space-y-4">
              
              {/* Getting Started Section */}
              <div>
                <button onClick={() => toggleSection('getting-started')}
                    className="text-xl font-semibold w-full text-left flex items-center gap-2 hover:text-red-600 transition"
                >
                  <span className={`transition-transform duration-200 text-xs ${isOpen('getting-started') ? 'rotate-90' : ''}`}> ▶ </span>
                  Getting Started
                </button>
                
                {isOpen('getting-started') && (
                  <ul className="ml-7 mt-2 space-y-1 text-gray-400">
                    <li><a href="#introduction" className="hover:underline">Introduction</a></li>
                    <li><a href="#links" className="hover:underline">Important links</a></li>
                    <li><a href="#legal" className="hover:underline">Legal</a></li>
                  </ul>
                )}
              </div>

              {/* Configuration */}
              <div>
                  <button onClick={() => toggleSection('configuration')}
                    className="text-xl font-semibold w-full text-left flex items-center gap-2 hover:text-red-600 transition"
                  >
                    <span className={`transition-transform duration-200 text-xs ${isOpen('configuration' ) ? 'rotate-90' : ''}`}> ▶ </span>
                    Configuration
                  </button>

                  {isOpen('configuration') && (
                    <ul className="ml-7 mt-2 space-y-1 text-gray-400">
                      <li><a href="#how-to" className="hover:underline">How to?</a></li>
                      <li><a href="#setup" className="hover:underline">Setup</a></li>
                      <li><a href="#required-settings" className="hover:underline">Required settings</a></li>
                    </ul>
                  )}
              </div>


              {/* Plugins */}
              <div>
                  <button
                    className="text-xl font-semibold w-full text-left flex items-center gap-2 hover:text-red-600 transition"
                    onClick={() => toggleSection('plugins')}
                  >
                    <span className={`transition-transform duration-200 text-xs ${isOpen('plugins') ? 'rotate-90' : ''}`}> ▶ </span>
                    Plugins
                  </button>

                  {isOpen('plugins') && (
                    <ul className="ml-7 mt-2 space-y-1 text-gray-400">
                      <li><a href="#discord-logger" className="hover:underline">Discord logger</a></li>
                      <li><a href="#impersonator" className="hover:underline">Impersonator detection</a></li>
                      <li><a href="#new-accounts" className="hover:underline">New accounts</a></li>
                      <li><a href="#compromised-users" className="hover:underline">Compromised users</a></li>
                      <li><a href="#anti-ping" className="hover:underline">Anti-ping</a></li>
                      <li><a href="#anti-link" className="hover:underline">Anti-link</a></li>
                      <li><a href="#anti-mass" className="hover:underline">Anti-mass</a></li>
                      <li><a href="#auto-slowmode" className="hover:underline">Auto-slowmode</a></li>
                      <li><a href="#attachment-filter" className="hover:underline">Attachment filter</a></li>
                      <li><a href="#reaction-filter" className="hover:underline">Reaction filter</a></li>
                    </ul>
                  )}
              </div>

              {/* Commands */}
              <div>
                <button onClick={() => toggleSection('commands')}
                    className="text-xl font-semibold w-full text-left flex items-center gap-2 hover:text-red-600 transition"
                >
                  <span className={`transition-transform duration-200 text-xs ${isOpen('commands') ? 'rotate-90' : ''}`}> ▶ </span>
                  Commands
                </button>
                
                {isOpen('commands') && (
                  <ul className="ml-7 mt-2 space-y-1 text-gray-400">
                    <li><a href="#rexus-command" className="hover:underline">/rexus</a></li>
                    <li><a href="#slowmode-command" className="hover:underline">/slowmode</a></li>
                    <li><a href="#purge-command" className="hover:underline">/purge</a></li>
                  </ul>
                )}
              </div>

              {/* FAQ */}
              <div>
                <button onClick={() => toggleSection('faq')}
                    className="text-xl font-semibold w-full text-left flex items-center gap-2 hover:text-red-600 transition"
                >
                  <span className={`transition-transform duration-200 text-xs ${isOpen('faq') ? 'rotate-90' : ''}`}> ▶ </span>
                  FAQ
                </button>
                
                {isOpen('faq') && (
                  <ul className="ml-7 mt-2 space-y-1 text-gray-400">
                    <li><a href="#questions" className="hover:underline">General questions</a></li>
                  </ul>
                )}
              </div>
    
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex flex-col w-full lg:w-3/4 mx-10 pt-8">
          
          <div className="flex flex-col items-center mb-8">
            <code className="text-4xl lg:text-6xl font-bold">Rexus documentation</code>
            <code className="text-gray-500">
              Last updated: 25 May 2025 (First public release)
            </code>
          </div>         

          <article id="introduction" className="font-sans mb-10">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-8">
              <code>Introduction</code>
            </h2>
          
            <p className="text-lg mb-8"> 
              <b className="text-red-300">Welcome to the official documentation for Rexus</b> - a powerful and security-focused Discord application designed to protect, monitor, and enhance the safety of your Discord community.
                Whether you manage a small friend group or a large public community, Rexus gives you peace of mind with reliable, automated security.
            </p>

            <p className="text-lg">
              This documentation will help you get the most out of Rexus. You'll learn how to invite and configure the bot, explore its security features, customize rules and responses, and troubleshoot any issues that arise. 
              Whether you're just getting started or looking to fine-tune advanced features, everything you need is covered right here.
            </p>
          </article>

          <article id="links" className="font-sans mb-10">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Important links</code>
            </h2>

            <ul className="ml-6 list-[square] text-lg">
              <li>
                <a href="https://discord.com/oauth2/authorize?client_id=980031906836009000" className="text-red-300 hover:text-red-600 transition">
                  Invite Rexus
                </a>
              </li>
              <li>
                <a href="https://discord.gg/gzx3kxu68x" className="text-red-300 hover:text-red-600 transition">
                  Support Server
                </a>
              </li>
              <li>
                <a href="https://xredcrystalx.com/rexus/tos" className="text-red-300 hover:text-red-600 transitione">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://xredcrystalx.com/rexus/privacy" className="text-red-300 hover:text-red-600 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </article>
          
          <article id="legal" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Legal</code>
            </h2>

            <p className="text-lg"> 
              By inviting and using Rexus, you agree to fully accept both Rexus' and Discord's <b className="text-red-300">Terms of Service</b> and <b className="text-red-300">Privacy Policies</b>. This is a strict requirement.
            </p>
            <p className="text-lg mb-8">
              If you <b className="text-red-300">do not agree</b> with any part of these documents, <b className="text-red-300">you are not permitted to use Rexus</b>.
            </p>
            
            <p className="text-lg">
              Rexus processes data only to fulfill its security functions and follows all relevant Discord Developer Guidelines and Platform Rules. As the server owner or administrator, it is your responsibility to ensure that your use of Rexus complies with applicable laws and community standards.
            </p>
          </article>

          {/* Configuration */}
          <div className="flex flex-col items-center pb-5 border-b-1 mb-8">
            <code className="text-4xl lg:text-6xl font-bold">Configuration</code>
          </div>   

          <article id="how-to" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>How to?</code>
            </h2>

            <p className="text-lg"> 
              Configuring Rexus is really straight forward. Just run the following Discord command:
            </p>
            
            <CodeBlock>
              /rexus settings
            </CodeBlock>

            <p className="text-lg mb-1">
              Done! Rexus should now display configuration for <b className="text-red-300">General Settings</b>.
            </p>
            <p className="text-lg mb-2">
              To interact with configuration system, use the buttons below.
            </p>
            <ul className="mb-4 text-lg ml-6">
              <li>◄ - Previous plugin/page</li>
              <li>► - Next plugin/page</li>
              <li><span className="h-10 md:h-15"><FontAwesomeIcon icon={faArrowUpRightFromSquare}  /></span> - Plugin link to the documentation</li>
              <li><span className="h-10 md:h-15"><FontAwesomeIcon icon={faGear} /></span> - Plugin configuration wizard (place to change settings)</li>
              <li>✕ - Save and end configuration</li>
            </ul>
            
            <p className="text-lg mb-2 text-red-300">
              Don't get scared! Configuration wizard will guide you through the entire process. Trust in yourself.
            </p>

            <InfoBlock title={"Can't see commands?"}>
              If you cannot see any Rexus commands, please refresh your Discord cient (application). This is a known Discord limitation.
            </InfoBlock>

          </article>

          <article id="setup" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Setup</code>
            </h2>
            <p className="text-lg mb-8"> 
              Setting up Rexus is simple, but it's <b className="text-red-300">important to complete every step</b> to ensure full functionality. Follow this guide carefully to get your guild protected in just a few minutes.
            </p>
            
            {/* Step1 */}
            <h4 id="invite-rexus" className="text-2xl">
              <code><b>1. Invite Rexus</b></code>
            </h4>
            <p className="text-lg mb-6 text-gray-500">
              <i>If Rexus is already in the guild and has Administrator privileges, you can skip this step.</i>
            </p>
            <p className="text-lg">
              Firstly, you will have to invite Rexus to your guild! <br />
              <a href="https://discord.com/oauth2/authorize?client_id=980031906836009000" className="font-bold text-red-300">Click here</a> and follow Discord's invite process. 
              Make sure to add it to the right server AND give it Administrator privileges.
            </p>

            <InfoBlock>
              Rexus will not work if its missing Administrator privileges, this is to prevent permission errors, headache and incorrect actions.
            </InfoBlock>
            <br />

            {/* Step2 */}
            <h4 id="setup-required" className="text-2xl">
              <code><b>2. Required settings</b></code>
            </h4>
            <p className="text-lg mb-5">
              <b className="text-red-600">This is the most important step. Do not skip it.</b>
            </p>
            
            <p className="text-lg mb-5">
              Rexus is disabled by default and require some initial information about the guild. This can be configured under <b className="text-red-300">General Settings</b>.
              <br />
              ➜ Check out <a href="#how-to" className="text-red-300 font-bold">#How to</a> section again and start configuration wizard for General settings.
            </p>

            <p className="text-lg mb-3">
              ➜ <b className="text-red-500">Great!</b> Wizard should now give you some options to choose from. Select <b className="text-red-300">Status</b> and <b className="text-red-300">enable</b> Rexus.
            </p>
            <p className="text-lg mb-5">
              ➜ Once thats done, do the same for <b className="text-red-300">Legal</b> option, but make sure to <b className="text-red-300">read and understand Terms of Service and Privacy Policy</b> before accepting them.
            </p>

            <WarningBlock title={"warning: Acceptance of Terms"}>
              By accepting the Terms of Service and Privacy Policy, you acknowledge and agree to be legally bound by them.  
              <br /><br />
              If you choose to withdraw your consent at any time, you may do so here. However, please note that declining will immediately disable Rexus in your guild.
            </WarningBlock>
            
            <p className="text-lg mb-5 mt-10">
              ➜ <b className="text-red-300">Last thing missing are administrator and staff/moderator channels and roles.</b>
              <br />
              This choice is entirely up to you. However, please be aware that Rexus will send important alerts to the selected channels and may mention the assigned roles when critical actions or security events occur.
            </p>

            <h4 id="plugin-config" className="text-2xl mb-1">
              <code><b>3. Setup plugins</b></code>
            </h4>
            <p className="text-lg mb-5">
              This is the last step! <br />
              Explore plugins, set them up and let Rexus do its job :) 
            </p>
            <p className="text-lg mb-5">
              More information about plugin-specific settings can be found under <b className="text-red-300">Plugins</b> category. Feel free to join and ask in the <a href="https://discord.gg/gzx3kxu68x" className="text-red-300 font-bold">Support Server</a> as well.
            </p>


          </article>

          <article id="required-settings" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Required settings</code>
            </h2>


            <p className="text-lg mb-5">
              Here is a list of required settings. Rexus <b className="text-red-300">will not</b> work without them!
            </p>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li>Guild cannot be banned from using Rexus</li>
              <li>Rexus is enabled in the configuration</li>
              <li>Guild owner/administrators accepted Rexus' Terms of Service & Privacy Policy</li>
              <li>Administrator/Manager channel and role are set up</li>
              <li>Staff/Mod channel and role are set up</li>
            </ul>
          </article>

          {/* Plugins */}
          <div className="flex flex-col items-center pb-5 border-b-1 mb-8">
            <code className="text-4xl lg:text-6xl font-bold">Rexus plugins</code>
          </div>   

          <article id="discord-logger" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Discord logger</code>
            </h2>

            <p className="text-lg mb-5">
              Tracks key updates within the guild <b>(e.g. role changes, channel edits)</b> and logs them to a designated channel.
            </p>
            
            <h3 className="text-2xl underline">Configuration:</h3>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Default log channel:</b> Shortcut to the default log channel when configuring each event.</li>
              <li><b className="text-red-300">Notify owner on app join:</b> Should Rexus DM (Direct Message) guild owner every time new app/bot is added to the guild?</li>
              <br />
              <p>There are <b>48 different events</b> supported at the moment, each can be enabled/disabled and set its own log channel.</p>
              <li><b className="text-red-300">Status:</b> Is this event logger enabled or not?</li>
              <li><b className="text-red-300">Log channel:</b> Channel where Rexus is going to send log messages of this event.</li>
            </ul>

            <WarningBlock title={"WARNING"}>
              This plugin is still in early stages, please report any weird log messages, formatting or missing information.
              <br />
              I'm partly blaiming Discord for providing inconsistent data.
            </WarningBlock>

          </article>

          <article id="impersonator" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Impersonator detection</code>
            </h2>

            <p className="text-lg mb-5">
              Sends an warning message when a member joins or changes their name to match a known creator, celebrity, or public figure. Ignores verified real accounts if known.
            </p>
            
            <h3 className="text-2xl underline">Configuration:</h3>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Status:</b> Is plugin enabled or not?</li>
              <li><b className="text-red-300">Log channel:</b> Channel where Rexus is going to send all messages of this plugin.</li>
              <li><b className="text-red-300">On join:</b> Should Rexus check member's name on your guild join?</li>
              <li><b className="text-red-300">On name update:</b> Should Rexus check member's name on name change?</li>
            </ul>  

            <InfoBlock title={"Are you a known public figure and want to be protected?"}>
              Please join the support server and create a ticket. After verification, your account will be added in the whitelist and your name will be protected.
            </InfoBlock>

          </article>

          <article id="new-accounts" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>New accounts</code>
            </h2>

            <p className="text-lg mb-5">
              Sends a warning message when a member joins with an account younger than the configured minimum age.
            </p>
            
            <h3 className="text-2xl underline">Configuration:</h3>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Status:</b> Is plugin enabled or not?</li>
              <li><b className="text-red-300">Log channel:</b> Channel where Rexus is going to send all messages of this plugin.</li>
              <li><b className="text-red-300">Younger than:</b> Minimal age for Rexus to not send warning message. <i className="text-gray-500">Default: 3 days</i></li>
            </ul>  

          </article>

          <article id="compromised-users" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Compromised users</code>
            </h2>
            
            <p className="text-lg mb-5">
              Automatically kicks the member and logs the action when an account is detected as compromised. 
            </p>
            
            <h3 className="text-2xl underline">Configuration:</h3>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Status:</b> Is plugin enabled or not?</li>
              <li><b className="text-red-300">Log channel:</b> Channel where Rexus is going to send all messages of this plugin.</li>
              <p><i className="text-gray-500">More settings will be added in future</i></p>
            </ul>

            <WarningBlock title={"WARNING"}>
              This plugin is still in early stages, expect some false positives or missed detections.
            </WarningBlock>
          
          </article>

          <article id="anti-ping" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Anti-ping</code>
            </h2>

            <p className="text-lg mb-5">
              Prevents protected individuals from being pinged by members with lots of configurations.
            </p>
            
            <h3 className="text-2xl underline">Configuration:</h3>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Status:</b> Is plugin enabled or not?</li>
              <li><b className="text-red-300">Reply mention:</b> Should anti-ping be triggered if member replied to message without disabling "ping" option?</li>
            </ul>
            
            <p className="text-xl font-bold">Custom rule fields:</p>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Name:</b> Custom name for the rule. Easier to remember.</li>
              <li><b className="text-red-300">Protected role:</b> Role that protects members against the pings.</li>
              <li><b className="text-red-300">Can mention:</b> Role allowed to ping protected members without triggering anti-ping measures.</li>
              <li><b className="text-red-300">Delete message:</b> Should message pinging protected member be deleted?</li>
              <li><b className="text-red-300">Call staff/mod?:</b> Should Rexus ping mod/staff role below detected message?</li>
              <li><b className="text-red-300">Log channel:</b> The channel where Rexus is going to send warning messages.</li>
            </ul>
          </article>

          <article id="anti-link" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Anti-link</code>
            </h2>

            <p className="text-lg mb-5">
              Deletes messages containing clickable links and logs the event to the log channel.
            </p>

            <InfoBlock title={"INFO"}>
              This will only detect CLICKABLE links such as <a href="#anti-link" className="font-sans text-red-300">https://explample.com/something</a> and not <span className="font-sans text-red-300">example.com/something.</span>
              <br />
              It can however detect masked links, for example: This is <a href="#anti-link" className="font-sans text-red-300">My site</a>!
            </InfoBlock>
            
            <h3 className="text-2xl underline">Configuration:</h3>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Status:</b> Is plugin enabled or not?</li>
              <li><b className="text-red-300">Log channel:</b> Channel where Rexus is going to send all messages of this plugin.</li>
              <li><b className="text-red-300">Allow HTTPS only:</b> Only allows sending web links (HTTP, HTTPS) and will block any other (e.g. <code>ftp:// ssh:// file://</code>) </li>
              <li><b className="text-red-300">Ignored roles:</b> Rexus will not perform anti-link check on members with any of specified roles.</li>
              <br />
              <li><b className="text-red-300">Discord gifts:</b> Allow/Block Discord Nitro, decoration or any other Discord item gifting.</li>
              <li><b className="text-red-300">Discord invites:</b> Allow/Block Discord guild, event or voice invites.</li>
              <li><b className="text-red-300">GIFs:</b> Allow/Block sending GIFs from GIF picker in Discord. (Animated pictures)</li>
              <br />
              <li><b className="text-red-300">Social medias:</b> Allow/Block social medias? (e.g. instagram.com, youtube.com, tiktok.com...)</li>
              <li><b className="text-red-300">Masked links:</b> Allow/Block masked links.</li>
              <li><b className="text-red-300">Shortened links:</b> Allow/Block shortened links (e.g. bit.ly)</li>

            </ul>  
          </article>

          <article id="anti-mass" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Anti-mass</code>
            </h2>

            <p className="text-lg mb-5">
              Deletes the message and sends a log entry when a member excessively uses mentions or capital letters in the same message.
            </p>
            
            <h3 className="text-2xl underline">Configuration:</h3>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Status:</b> Is plugin enabled or not?</li>
              <li><b className="text-red-300">Log channel:</b> Channel where Rexus is going to send all messages of this plugin.</li>
              <li><b className="text-red-300">Ignored roles:</b> Rexus will not perform anti-mass check on members with any of specified roles.</li>
              <br />
              <li><b className="text-red-300">Capital letters:</b> Block overuse of capital letters? (60%+)</li>
              <li><b className="text-red-300">Member mentions:</b> Block overuse of member mentions? (Pings - @xRedCrystalx)</li>
              <li><b className="text-red-300">Role mentions:</b> Block overuse of role mentions? (@Admin @Moderator)</li>
              <li><b className="text-red-300">Channel mentions:</b> Block overuse of channel mentions? (#general #media)</li>
            </ul>
            
            <NoteBlock title={"NOTE"}>
              Emoji mass detection will be implemented soon.
            </NoteBlock>

          </article>

          <article id="auto-slowmode" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Auto-slowmode</code>
            </h2>

            <p className="text-lg mb-5">
              Dynamically adjusts a channel's slowmode based on the current message activity.
            </p>
            
            <h3 className="text-2xl underline">Configuration:</h3>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Status:</b> Is plugin enabled or not?</li>
              <li><b className="text-red-300">Log channel:</b> Channel where Rexus is going to send all messages of this plugin.</li>
            </ul>
            
            <p className="text-xl font-bold">Custom rule fields:</p>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Name:</b> Custom name for the rule. Easier to remember.</li>
              <li><b className="text-red-300">Monitored channel:</b> Channel which is going to be monitored by Rexus.</li>
              <li><b className="text-red-300">Base slowmode:</b> Slowmode to apply once there is no more activity in the channel. (0 = no slowmode)</li>
            </ul>

          </article>

          <article id="attachment-filter" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Attachment filter</code>
            </h2>

            <p className="text-lg mb-5">
              Deletes messages containing blacklisted file types and logs the event.
            </p>
            
            <h3 className="text-2xl underline">Configuration:</h3>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Status:</b> Is plugin enabled or not?</li>
              <li><b className="text-red-300">Log channel:</b> Channel where Rexus is going to send all messages of this plugin.</li>
              <li><b className="text-red-300">Ignored roles:</b> Rexus will not perform attachment filter check on members with any of specified roles.</li>
              <br />
              <li><b className="text-red-300">Filtering:</b> Type of filtering, either <b>WHITELIST</b> or <b>BLACKLIST</b> <br /> ➜ Whitelist only allows files in extensions list, where blacklist blocks those.</li>
              <li><b className="text-red-300">Extensions:</b> List of file extensions (e.g. <code>.exe .txt .png</code>)</li>
            </ul>  
          </article>

          <article id="reaction-filter" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Reaction filter</code>
            </h2>

            <p className="text-lg mb-5">
              Automatically removes reactions that match blocked emojis or blacklisted patterns.
            </p>
            
            <h3 className="text-2xl underline">Configuration:</h3>
            <ul className="mb-4 text-lg ml-6 list-[square]">
              <li><b className="text-red-300">Status:</b> Is plugin enabled or not?</li>
              <li><b className="text-red-300">Log channel:</b> Channel where Rexus is going to send all messages of this plugin.</li>
              <li><b className="text-red-300">Ignored channels:</b> Disable reaction filtering in specified channels.</li>
              <li><b className="text-red-300">Log reaction:</b> Sends information message of every blocked reaction with information of who, where and which reaction was blocked.</li>
            </ul>

            <InfoBlock title={"INFO"}>
              Due to high rate limits on reaction events, reactions will be cleared every 30 seconds.
            </InfoBlock>

          </article>

          {/* Commands */}
          <div className="flex flex-col items-center pb-5 border-b-1 mb-8">
            <code className="text-4xl lg:text-6xl font-bold">Commands</code>
          </div>   

          <article id="rexus-command" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Rexus command</code>
            </h2>

            <p className="text-lg mb-15">
              This is main command for working with Rexus. To make it easier and more user friendly, I have implemented subcommands.
            </p>
            
            <CodeBlock>
              /rexus bot
            </CodeBlock>
            <p className="text-lg mb-8">➜ Displays basic information about Rexus and the current guild.</p>

            <CodeBlock>
              /rexus help
            </CodeBlock>
            <p className="text-lg mb-8">➜ General help command with links to this documentation and the support server.</p>

            <CodeBlock>
              /rexus legal
            </CodeBlock>
            <p className="text-lg mb-8">➜ Provides direct links to Rexus' Terms of Service and Privacy Policy.</p>

            <CodeBlock>
              /rexus settings
            </CodeBlock>
            <p className="text-lg mb-8">➜ Allows you to view and configure Rexus' plugins.</p>

            <CodeBlock>
              /rexus admins
            </CodeBlock>
            <p className="text-lg mb-8">➜ Owner-only command. Grants or revokes permission for server administators to manage Rexus settings.</p>

            <CodeBlock>
              /rexus reload
            </CodeBlock>
            <p className="text-lg mb-8">➜ Owner-only command. Reloads Rexus. <b className="text-red-600">Use this only if changes are not being applied correctly.</b></p>
          
          </article>

          <article id="slowmode-command" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Slowmode command</code>
            </h2>

            <CodeBlock>
              /slowmode [number] <code className="text-gray-500">Optional: [TextChannel]</code>
            </CodeBlock>
            <p className="text-lg">➜ Sets the slowmode (in seconds) for the current channel, or for a specific channel if provided.</p>
            
            <InfoBlock title={"Slowmode time:"}>
              0 seconds = no slowmode, max 21600 seconds or 6h ➜ this is Discord's limitation.
            </InfoBlock>

          </article>

          <article id="purge-command" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>Purge command</code>
            </h2>

            <CodeBlock>
              /purge [number]
              <br />
              -purge [number]
            </CodeBlock>
            <p className="text-lg">➜ Purges messages in the current text channel.</p>
            
            <InfoBlock title={"Purge limitations:"}>
              Rexus can purge MAX of 250 messages per commmand. Messages also cannot be older than 14 days.
            </InfoBlock>

          </article>

          {/* Commands */}
          <div className="flex flex-col items-center pb-5 border-b-1 mb-8">
            <code className="text-4xl lg:text-6xl font-bold">FAQ</code>
          </div>   

          <article id="questions" className="font-sans mb-15">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6">
              <code>General questions</code>
            </h2>

            <h3 className="font-bold text-2xl text-red-300 mt-6">Why does Rexus require Admin?</h3>
            <p className="text-lg">➜ Each plugin requires specific permissions. I don't know which plugin/s is your guild going to use. To simplify and lower chances of missing permissions, Rexus requires Admin.</p>

            <h3 className="font-bold text-2xl text-red-300 mt-6">Where can I report a bug or make a suggestion?</h3>
            <p className="text-lg">➜ Please join the support server. There is #help channel. Create a post!</p>
            
            <h3 className="font-bold text-2xl text-red-300 mt-6">I have invited Rexus, but I cannot see commands. What can I do?</h3>
            <p className="text-lg">➜ Restart your discord application. If this doesn't fix the issue, make sure your server doesn't have over 50 bots. Join support server if issue presists.</p>

            <h3 className="font-bold text-2xl text-red-300 mt-6">How can I increase plugin limits?</h3>
            <p className="text-lg">➜ As of now, you can request higher plugin limits in the support server. However, in future this will be paid option.</p>

            <h3 className="font-bold text-2xl text-red-300 mt-6">Where can I support this project?</h3>
            <p className="text-lg">➜ Best way to support this project is to recommend it to your friends! Donations will be available sometime in the future.</p>

            <h3 className="font-bold text-2xl text-red-300 mt-6">Will Rexus ever be behind paywall?</h3>
            <p className="text-lg">➜ No. All features/plugins will always stay free for everyone. Increased limits and faster support will however be paid option.</p>
          </article>

        </section>
      </div>
    </main>
  );
}
