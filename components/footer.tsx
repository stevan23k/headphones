"use client";

import Link from "next/link";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div>
      <div className="h-screen flex flex-col bg-black justify-center items-center">
        <pre className="text-white text-[8px] leading-2">
          {`                                                                                
                     ▗▅▅▂                                                       
                    ▗████▙            ▃▅▇▖                                      
                    █████▝▙         ▗▇███▏                                      
                    ███▟▝ ▝▘┒▃▃▃▂▂▃▟████▌                                       
                    ██▛██▘  ▕███████████▏                                       
                   ▗▛▀▅▛▃▂▂▄███▔▔▘▜████▉                                        
                   ▐█▆████████▜▅ ╷▔█████▙                                       
                   ▕█▛▀╵╷▀▜█████▆▉▘▐█████▖                                      
                   ▐█▏  ▝╷ ▁┳█████▟▃█████▎                                      
                   ▐▙┍╹ ▁▂╷┌╼━█████▙▟███▛                                       
                  ▗█▊ ╼╵▔ ▁▃╼┛▌▜▜███▛███╸                                       
                 ▗██▌  ▂╼┕▔▔╸┋▗▘▟▏▏▟█▆▛▔                                        
                ▗██▋ ┎╏╸▔ ┘▔ ┎┚▕▀╵▀▀█▋                                          
               ▕█▀▘╌┗╎  ╺    ┅▏     ▕▉                                          
               ▐▋╴╴    ╱     ╵      ▝█▎                                         
               ▟▎     ┟     ╵      ╷▗█▏                                         
              ▕█▌     ▍      ╻   ╷╷▂▟██▖                                        
              ▐█▊     ╹        ┏▆▃▂█████▙                                       
              ▜██▂              ╶▟███████▙                                      
              ▐██▉╶    ┌╎╷       █████████▙                                     
               ███▖▗╷   ╶┊╶╷     ██████████▌                                    
               ██▙▁▘             ▐██████████                                    
               ██▌╵   ╎          ▟██████████▍                                   
               ██▏╵  ▕▛         ╵▐████ ▝█████▃                                  
              ▐██    ▕            ███▍ ╴╶▐████▊                                 
              ▟███  ╶           ╻▗███▋    ▀╴▔██▖                                
              ████▏             ▕█████╹      ▜█▙                                
              █▔██▌             ▄████▛▎╵    ▐███▎                               
              ▜▖▕██           ╷▕████▛     ┒▗████▌                               
              ▕▊ ▜█▌     ╷╷   ▕▕███▘      ▜█████▎                               
              ▝▜▍▕██▋      ╵   ▐██▀    ╷╶┏━█████▏                               
               ▝▙ ▐█▙      ╵  ▁██▛     ╵╶▟▙█████▅▆▆▆▅▄▄▄▄▄▄▄▃▃▂▃▃▂▁             
                ▝▙▏██┓    ┍▖ ▗██▛       ▔╵▐█████▛▀▀▔▔▔▔▔  ╵╵▔▔▔▝█▛▀█▇▆▄▃▂▁      
                 ▝▜██▅    ▕▛▐███▎         ▐█████▉╴             ╷▘▁╵╵╌██████▆    
                   ███    ▝▘ ▜█▛        ╶▜██▍███▔              ╵┻╸━━██████▀▀    
                  ▁█▀▘   ╱   ▕█▍  ╷  ▗▄▃╌┷▀▔  ▔                                 
                 ▐▌           ▔▘ ▝━┻┹▀                                          
                 ▝▕─╌─╴━▏┈▂▃▄▅▟▘                                                
                          ▔▔▔▔`}
        </pre>
        <p className={`text-white text-[200px] ${pixelify.className}`}>HAKU</p>
      </div>
      <div className="bg-black text-white h-0 flex flex-row px-20 gap-20">
        <ul className={`text-[30px] ${pixelify.className}`}>
          <li>
            <a
              href="https://github.com/stevan23k/headphones.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
            </a>
          </li>
          <li>
            <a
              href="https://github.com/stevan23k"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
        <ul className={`text-[30px] ${pixelify.className}`}>
          <li>
            <a
              href="https://www.youtube.com/@shaku23k"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/haku.tsx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="h-40 bg-black text-white"></div>
    </div>
  );
}
