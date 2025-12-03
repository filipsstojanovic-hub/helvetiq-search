import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Services() {
  const companyServices = [
    {
      title: 'Permanent Placement',
      description: 'End-to-end recruitment for full-time positions. We identify, vet, and deliver top-tier talent that aligns with your company culture and long-term goals.',
      features: ['Full role scoping', 'Comprehensive candidate screening', 'Cultural fit assessment', '90-day replacement warranty'],
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible workforce solutions for project-based needs. Access pre-vetted professionals ready to integrate into your team immediately.',
      features: ['Immediate availability', 'Pre-screened candidates', 'Flexible contract terms', 'Quick turnaround (7 days)'],
    },
    {
      title: 'Executive Search',
      description: 'Strategic C-suite and senior leadership recruitment. Discreet, thorough, and focused on finding leaders who drive transformation.',
      features: ['Confidential process', 'Global talent network', 'Leadership assessment', 'Succession planning support'],
    },
    {
      title: 'Workforce Planning',
      description: 'Strategic advisory for long-term talent needs. We help you build scalable hiring strategies aligned with business growth.',
      features: ['Market insights', 'Salary benchmarking', 'Talent pipeline development', 'Quarterly strategic reviews'],
    },
  ];

  const candidateServices = [
    {
      title: 'Career Consultation',
      description: 'Personalized career guidance from Swiss market experts. We help you navigate your career path with clarity and confidence.',
      features: ['1-on-1 career strategy sessions', 'CV optimization', 'Personal branding', 'Market positioning advice'],
    },
    {
      title: 'Salary Benchmarking',
      description: 'Real-time salary insights for the Swiss market. Know your worth and negotiate with confidence.',
      features: ['Role-specific salary data', 'Canton-based analysis', 'Experience level adjustments', 'Compensation package review'],
    },
    {
      title: 'Interview Preparation',
      description: 'Expert coaching to help you ace interviews. We prepare you for common and advanced interview scenarios.',
      features: ['Mock interviews', 'Technical assessment prep', 'Behavioral question coaching', 'Negotiation strategies'],
    },
    {
      title: 'Career Transition Support',
      description: 'Guidance during career changes and relocations. We support your transition with practical advice and connections.',
      features: ['Industry transition planning', 'Relocation assistance', 'Network building', 'Ongoing support'],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-alpine-white">
        {/* Hero Section */}
        <section className="bg-swiss-graphite text-alpine-white py-24">
          <div className="container mx-auto px-4 max-w-container text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Swiss-standard recruitment solutions for companies and candidates. Precision-driven, results-focused.
            </p>
          </div>
        </section>

        {/* For Companies Section */}
        <section className="container mx-auto px-4 py-24 max-w-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-4">
              For Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build your workforce with precision. From permanent hires to strategic planning, we deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyServices.map((service, index) => (
              <Card key={index} hover className="h-full">
                <div className="space-y-4">
                  <h3 className="text-2xl text-swiss-graphite font-bold">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-alpine-blue font-bold mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-frost-silver" />

        {/* For Candidates Section */}
        <section className="container mx-auto px-4 py-24 max-w-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-4">
              For Candidates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Navigate your career with expert guidance. We support every step of your professional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {candidateServices.map((service, index) => (
              <Card key={index} hover className="h-full">
                <div className="space-y-4">
                  <h3 className="text-2xl text-swiss-graphite font-bold">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-alpine-blue font-bold mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" size="lg">
              Explore Career Opportunities
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-alpine-blue text-alpine-white py-24">
          <div className="container mx-auto px-4 max-w-container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Whether you're hiring or looking for your next career move, we're here to deliver Swiss-standard results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Book a Consultation
              </Button>
              <Button variant="secondary" size="lg">
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
