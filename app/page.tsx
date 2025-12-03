import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import SalaryCalculator from '@/components/sections/SalaryCalculator';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-alpine-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 max-w-container">
        <div className="text-center space-y-8">
          {/* Logo Placeholder */}
          <div className="w-24 h-24 mx-auto bg-swiss-graphite rounded-lg flex items-center justify-center">
            <span className="text-alpine-white text-4xl font-bold">H</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl text-swiss-graphite font-bold max-w-4xl mx-auto leading-tight">
            Swiss-Standard Talent Acquisition
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-600 max-w-2xl mx-auto">
            Precision-driven recruitment for long-term workforce success.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="primary" size="lg">
              Book a Consultation
            </Button>
            <Button variant="secondary" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantee Badge Section */}
      <section className="bg-swiss-graphite text-alpine-white py-16">
        <div className="container mx-auto px-4 max-w-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-blue-400">7</div>
              <div className="text-xl">Days</div>
              <div className="text-gray-400">Shortlist Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-blue-400">14</div>
              <div className="text-xl">Days</div>
              <div className="text-gray-400">Placement Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-blue-400">90</div>
              <div className="text-xl">Days</div>
              <div className="text-gray-400">Replacement Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="container mx-auto px-4 py-24 max-w-container">
        <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold text-center mb-16">
          Why Choose Helvetiq Search
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Precision',
              description: 'Swiss-standard execution with zero errors. Every placement is thoroughly vetted.',
            },
            {
              title: 'Consistency',
              description: 'Reliable delivery within guaranteed timelines. No surprises, no delays.',
            },
            {
              title: 'Long-Term Planning',
              description: 'Strategic workforce solutions that grow with your business needs.',
            },
          ].map((item, index) => (
            <div key={index} className="space-y-4 text-center">
              <h3 className="text-2xl md:text-3xl text-swiss-graphite font-bold">{item.title}</h3>
              <p className="text-lg text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 max-w-container">
          <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold text-center mb-16">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Engineering & Manufacturing',
              'Finance & Banking',
              'IT & Technology',
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-alpine-white p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl text-swiss-graphite font-bold mb-4">{industry}</h3>
                <Button variant="text">
                  Learn More →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Calculator Section */}
      <SalaryCalculator />

      {/* Transparent Pricing Teaser */}
      <section className="container mx-auto px-4 py-24 max-w-container text-center">
        <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-8">
          Transparent Pricing
        </h2>
        <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          No hidden costs. No surprises. Just clear, upfront pricing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          {[
            { range: 'CHF 50-80K', fee: '18%' },
            { range: 'CHF 80-120K', fee: '20%' },
            { range: 'CHF 120K+', fee: '22%' },
          ].map((tier, index) => (
            <div key={index} className="p-6 border-2 border-gray-300">
              <div className="text-sm text-gray-600 mb-2">{tier.range}</div>
              <div className="text-5xl text-blue-600 font-bold">{tier.fee}</div>
              <div className="text-sm text-gray-600 mt-2">Placement Fee</div>
            </div>
          ))}
        </div>
        <Button variant="primary" size="lg">
          View Full Pricing
        </Button>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 text-alpine-white py-24">
        <div className="container mx-auto px-4 max-w-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Schedule a Discovery Call
          </h2>
          <p className="text-2xl mb-12 max-w-2xl mx-auto opacity-90">
            Let's discuss your hiring needs and how we can deliver Swiss-standard results.
          </p>
          <Button variant="secondary" size="lg">
            Book Your Consultation
          </Button>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
