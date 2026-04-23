/**
 * AppleFooter Component
 * 
 * A comprehensive, multi-column footer that anchors the page. 
 * Designed with Apple's iconic gray-on-gray aesthetic, featuring legal links 
 * and persistent branding.
 */

'use client';

import Link from 'next/link';

/**
 * AppleLogo - Minimal SVG branding for the footer.
 */
function AppleLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 17 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.5833 6.91667C15.4167 7.00001 13.3333 8.12501 13.3333 10.6667C13.3333 13.5833 16 14.5833 16.0833 14.6042C16.0833 14.6667 15.6667 16.0417 14.6667 17.4583C13.7917 18.6875 12.875 19.9167 11.5 19.9167C10.125 19.9167 9.75 19.125 8.16667 19.125C6.625 19.125 6.04167 19.9583 4.79167 19.9583C3.54167 19.9583 2.625 18.8125 1.625 17.4167C0.458333 15.7708 -0.5 13.1667 -0.5 10.7083C-0.5 7.041 1.83333 5.08334 4.125 5.08334C5.45833 5.08334 6.58333 5.95834 7.41667 5.95834C8.20833 5.95834 9.5 5.04167 11.0417 5.04167C11.625 5.04167 13.7083 5.08334 15.5833 6.91667ZM11.0833 3.33334C11.7083 2.58334 12.1667 1.54167 12.1667 0.500006C12.1667 0.354173 12.1562 0.208339 12.125 0.083340C11.0938 0.125006 9.875 0.770839 9.125 1.62501C8.54167 2.27084 7.95833 3.31251 7.95833 4.37501C7.95833 4.54167 7.97917 4.70834 7.98958 4.77084C8.0625 4.79167 8.17708 4.81251 8.29167 4.81251C9.20833 4.81251 10.4167 4.20834 11.0833 3.33334Z" />
    </svg>
  );
}

/**
 * Footer Directory Data
 * Organized into semantic categories.
 */
const footerLinks = {
  'Shop and Learn': [
    'Store',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'AirPods',
    'TV & Home',
    'AirTag',
    'Accessories',
  ],
  Entertainment: [
    'Apple One',
    'Apple TV+',
    'Apple Music',
    'Apple Arcade',
    'Apple Fitness+',
    'Apple News+',
    'Apple Podcasts',
    'Apple Books',
  ],
  'Apple Store': [
    'Find a Store',
    'Genius Bar',
    'Today at Apple',
    'Apple Camp',
    'Apple Trade In',
    'Financing',
    'Order Status',
    'Shopping Help',
  ],
  'Apple Values': [
    'Accessibility',
    'Education',
    'Environment',
    'Inclusion and Diversity',
    'Privacy',
    'Supply Chain',
  ],
};

export default function AppleFooter() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-zinc-200">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        
        {/* Main Footer Sitemap Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-16">
          
          {/* Logo and Shop Helper */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <AppleLogo className="h-5 w-5 text-zinc-900 mb-6" />
            <p className="text-[11px] text-zinc-500 font-medium leading-relaxed max-w-[180px]">
              More ways to shop: Find an Apple Store or other retailer near you.
            </p>
          </div>

          {/* Dynamic Category Mapping */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] font-bold text-zinc-900 mb-4 uppercase tracking-tighter">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[11px] text-zinc-500 hover:text-zinc-900 transition-colors font-medium"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal and Horizontal Sub-Footer */}
        <div className="border-t border-zinc-200 pt-8 mt-12">
            {/* Abishek: Keeping the Apple aesthetic but updating the copyright for our project */}
            <p className="text-[11px] text-zinc-400 font-medium">
              © 2026 Abishek Mohan & Sarthak bagal. All rights reserved.
            </p>
            
            {/* Inline Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                'Privacy Policy',
                'Terms of Use',
                'Sales and Refunds',
                'Legal',
                'Site Map',
              ].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[11px] text-zinc-500 hover:text-zinc-900 transition-colors font-medium whitespace-nowrap"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
  );
}
