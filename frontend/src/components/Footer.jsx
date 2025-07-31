import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#2C2C2C] text-[#C0C0C0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
          {/* Company Info */}
          <div className="space-y-7">
            <div>
              <h3 className="text-3xl font-extrabold mb-5 tracking-wide">
                Shinesales<span className="text-[#D4AF37]">Jewelry</span>
              </h3>
              <p className="leading-relaxed text-lg">
                Crafting timeless elegance in every piece of gold and silver jewellery.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#D4AF37]" />
                <span className="text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#D4AF37]" />
                <span className="text-base">support@shinesales.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-[#D4AF37]" />
                <span className="text-base">456 Elegant Ave, Jewelry City, JC 67890</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav>
            <h4 className="text-xl font-semibold mb-7 tracking-wide text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-4 text-base">
              {['Home', 'About Us', 'Products', 'Categories', 'Contact', 'Blog'].map((text) => (
                <li key={text}>
                  <a
                    href={`#${text.toLowerCase().replace(/\s/g, '')}`}
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Customer Service */}
          <nav>
            <h4 className="text-xl font-semibold mb-7 tracking-wide text-[#D4AF37]">Customer Service</h4>
            <ul className="space-y-4 text-base">
              {['Help Center', 'Shipping Info', 'Returns & Refunds', 'FAQ', 'Track Your Order', '24/7 Support'].map((text) => (
                <li key={text}>
                  <a
                    href={`#${text.toLowerCase().replace(/&|\s/g, '')}`}
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-7 tracking-wide text-[#D4AF37]">Stay Connected</h4>

            {/* Social Media */}
            <div className="space-y-5">
              <p className="text-base">
                Follow us on social media for updates and special offers
              </p>
              <div className="flex space-x-5">
                {[
                  { Icon: Facebook, label: 'Facebook' },
                  { Icon: Twitter, label: 'Twitter' },
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Youtube, label: 'YouTube' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    title={label}
                    className="bg-[#D4AF37] text-[#2C2C2C] p-3 rounded-full hover:bg-[#C0C0C0] hover:text-[#2C2C2C] shadow-md transition-colors duration-300 flex items-center justify-center"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

           
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#555555] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm select-none text-[#999999]">
              © 2025 Shinesales Jewellery. All rights reserved.
            </div>
            <div className="flex space-x-8 text-sm text-[#999999]">
              <a href="#privacy" className="hover:text-[#D4AF37] transition-colors duration-300">Privacy Policy</a>
              <a href="#terms" className="hover:text-[#D4AF37] transition-colors duration-300">Terms of Service</a>
              <a href="#cookies" className="hover:text-[#D4AF37] transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
