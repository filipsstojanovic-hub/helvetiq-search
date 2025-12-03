export default function Footer() {
  const footerLinks = {
    services: [
      { name: 'For Companies', href: '/services/companies' },
      { name: 'For Candidates', href: '/services/candidates' },
      { name: 'Executive Search', href: '/services/executive' },
      { name: 'Workforce Planning', href: '/services/planning' },
    ],
    industries: [
      { name: 'Engineering & Manufacturing', href: '/industries/engineering' },
      { name: 'Finance & Banking', href: '/industries/finance' },
      { name: 'IT & Technology', href: '/industries/technology' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Process', href: '/about/process' },
      { name: 'Team', href: '/about/team' },
      { name: 'Pricing', href: '/pricing' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Salary Calculator', href: '/calculator' },
      { name: 'Compliance Guides', href: '/resources/compliance' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-swiss-graphite text-alpine-white">
      <div className="container mx-auto px-4 py-16 max-w-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-alpine-white rounded-lg flex items-center justify-center">
                <span className="text-swiss-graphite text-xl font-bold">H</span>
              </div>
              <span className="text-lg font-bold">Helvetiq Search</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Swiss-standard talent acquisition. Precision-driven recruitment for long-term workforce success.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-alpine-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-alpine-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-bold mb-4 text-alpine-white">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-alpine-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-alpine-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-alpine-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-alpine-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-alpine-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Helvetiq Search. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-alpine-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-alpine-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-alpine-white transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
