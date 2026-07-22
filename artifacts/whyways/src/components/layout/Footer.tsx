import React from 'react';
import { Hexagon, Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiX, SiInstagram, SiFacebook, SiYoutube } from 'react-icons/si';
import { Link } from 'wouter';

export const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t border-border pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-accent">
                <Hexagon className="text-white w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">NXDigita AI Technologies</span>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm">
              We help startups, enterprises, and organizations transform ideas into scalable AI-powered software products.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-medium">Subscribe to our newsletter</h4>
              <div className="flex gap-2 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
                <button className="px-4 py-2 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Press', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {['AI Solutions', 'Web Development', 'Mobile Apps', 'Cloud Engineering', 'UI/UX Design'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@nxdigita.ai" className="flex items-start gap-3 text-muted-foreground hover:text-secondary transition-colors group">
                  <Mail size={18} className="mt-0.5 group-hover:text-secondary" />
                  <span>hello@nxdigita.ai</span>
                </a>
              </li>
              <li>
                <a href="tel:+15550000000" className="flex items-start gap-3 text-muted-foreground hover:text-secondary transition-colors group">
                  <Phone size={18} className="mt-0.5 group-hover:text-secondary" />
                  <span>+1 (555) 000-0000</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-0.5" />
                <span>San Francisco, CA<br />Innovation District</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()} NXDigita AI Technologies. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sitemap</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="X (Twitter)">
              <SiX size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Instagram">
              <SiInstagram size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Facebook">
              <SiFacebook size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="YouTube">
              <SiYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
