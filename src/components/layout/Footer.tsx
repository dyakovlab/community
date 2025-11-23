import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="text-xl font-bold text-white">Hope</span>
            </div>
            <p className="text-sm text-gray-400">
              Building a supportive community where everyone belongs and no one walks alone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-sm hover:text-emerald-400 transition-colors">
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm hover:text-emerald-400 transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#mission" className="text-sm hover:text-emerald-400 transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <p className="text-sm text-gray-400 mb-4">
              If you're in crisis, please reach out:
            </p>
            <ul className="space-y-2">
              <li className="text-sm">
                <span className="text-emerald-400">Crisis Hotline:</span>
                <br />
                988 (24/7)
              </li>
              <li className="text-sm">
                <span className="text-emerald-400">Text Support:</span>
                <br />
                Text HOPE to 741741
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Hope Community. Built with compassion and care.</p>
        </div>
      </Container>
    </footer>
  );
};

