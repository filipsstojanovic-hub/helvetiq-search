import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function About() {
  const values = [
    {
      title: 'Precision',
      description: 'Swiss-standard execution with zero errors. Every placement is thoroughly vetted through our multi-stage assessment process.',
      icon: '🎯',
    },
    {
      title: 'Transparency',
      description: 'Clear communication at every step. No hidden fees, no surprises, just honest partnership.',
      icon: '💎',
    },
    {
      title: 'Consistency',
      description: 'Reliable delivery within guaranteed timelines. 7-day shortlist, 14-day placement, every time.',
      icon: '⚙️',
    },
    {
      title: 'Long-Term Focus',
      description: 'We don't just fill roles—we build lasting partnerships. Our 90-day warranty reflects our commitment to sustainable placements.',
      icon: '🌱',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery Call',
      duration: 'Day 1',
      description: 'We deep-dive into your company culture, role requirements, and long-term hiring goals.',
    },
    {
      step: '2',
      title: 'Candidate Sourcing',
      duration: 'Days 2-5',
      description: 'Our team taps into Swiss and international talent networks, screening candidates against your criteria.',
    },
    {
      step: '3',
      title: 'Shortlist Delivery',
      duration: 'Day 7',
      description: 'Receive 3-5 pre-vetted candidates with detailed profiles, assessments, and our recommendation.',
    },
    {
      step: '4',
      title: 'Interview Coordination',
      duration: 'Days 8-12',
      description: 'We coordinate interviews, gather feedback, and support negotiation to ensure smooth progression.',
    },
    {
      step: '5',
      title: 'Placement',
      duration: 'Day 14',
      description: 'Candidate accepts offer and begins onboarding. We provide integration support for the first 90 days.',
    },
  ];

  const differentiators = [
    {
      feature: 'Guaranteed Timelines',
      us: '7-14 days',
      competitors: '3-6 weeks',
    },
    {
      feature: 'Replacement Warranty',
      us: '90 days',
      competitors: '30-60 days',
    },
    {
      feature: 'Placement Fee',
      us: '18-22%',
      competitors: '20-25%',
    },
    {
      feature: 'Salary Transparency',
      us: 'Free live calculator',
      competitors: 'Gated or unavailable',
    },
    {
      feature: 'Tech Stack',
      us: 'Modern, fast',
      competitors: 'Slow, bloated CMS',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-alpine-white">
        {/* Hero Section */}
        <section className="bg-swiss-graphite text-alpine-white py-24">
          <div className="container mx-auto px-4 max-w-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Helvetiq Search
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                We bring Swiss precision to talent acquisition. No fluff, no delays—just consistent, high-quality placements that drive long-term success.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-24 max-w-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              <strong className="text-alpine-blue">"Precision in Talent"</strong>
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We exist to eliminate the inefficiencies and uncertainties of traditional recruitment. By applying Swiss-standard rigor to every placement, we help companies build teams that last and professionals find roles that align with their career goals.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4 max-w-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These principles guide every decision we make and every placement we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} hover>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{value.icon}</div>
                    <div>
                      <h3 className="text-2xl text-swiss-graphite font-bold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-24 max-w-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 14-day recruitment process designed for speed without compromising quality.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {process.map((item, index) => (
              <Card key={index} hover className="relative">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-alpine-blue text-alpine-white flex items-center justify-center text-3xl font-bold">
                    {item.step}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl text-swiss-graphite font-bold">
                        {item.title}
                      </h3>
                      <span className="text-alpine-blue font-bold text-sm">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" size="lg">
              See How We Work
            </Button>
          </div>
        </section>

        {/* Competitive Advantage Section */}
        <section className="bg-frost-silver py-24">
          <div className="container mx-auto px-4 max-w-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-4">
                Why Helvetiq Search?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We analyzed 7 major Swiss recruitment firms. Here's how we stack up:
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-frost-silver">
                        <th className="text-left py-4 px-4 text-swiss-graphite font-bold">
                          Feature
                        </th>
                        <th className="text-center py-4 px-4 text-alpine-blue font-bold">
                          Helvetiq Search
                        </th>
                        <th className="text-center py-4 px-4 text-gray-600">
                          Competitors
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {differentiators.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-200 last:border-b-0"
                        >
                          <td className="py-4 px-4 text-gray-700 font-medium">
                            {item.feature}
                          </td>
                          <td className="py-4 px-4 text-center font-bold text-alpine-blue">
                            {item.us}
                          </td>
                          <td className="py-4 px-4 text-center text-gray-600">
                            {item.competitors}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Swiss Positioning Section */}
        <section className="container mx-auto px-4 py-24 max-w-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-6">
                Built for the Swiss Market
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card hover>
                <h3 className="text-2xl text-swiss-graphite font-bold mb-4">
                  🇨🇭 Swiss Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Deep understanding of Swiss labor laws, canton-specific regulations, and cultural expectations. We navigate the complexities so you don't have to.
                </p>
              </Card>

              <Card hover>
                <h3 className="text-2xl text-swiss-graphite font-bold mb-4">
                  🌍 International Reach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Access to global talent networks with local expertise. Whether you're hiring in Zürich or seeking international candidates, we deliver.
                </p>
              </Card>

              <Card hover>
                <h3 className="text-2xl text-swiss-graphite font-bold mb-4">
                  📊 Data-Driven Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Real-time salary benchmarks, market insights, and predictive analytics to inform your hiring decisions and stay competitive.
                </p>
              </Card>

              <Card hover>
                <h3 className="text-2xl text-swiss-graphite font-bold mb-4">
                  ⚡ Modern Technology
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Unlike competitors still using legacy CMS platforms, we leverage modern tech for faster, more efficient processes—and a better user experience.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-alpine-blue text-alpine-white py-24">
          <div className="container mx-auto px-4 max-w-container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Ready to work with a recruitment partner that values your time and delivers results? Let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule a Discovery Call
              </Button>
              <Button variant="secondary" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
