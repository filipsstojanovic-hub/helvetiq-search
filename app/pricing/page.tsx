import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function Pricing() {
  const pricingTiers = [
    {
      salaryRange: 'CHF 50-80K',
      fee: '18%',
      description: 'Entry to mid-level roles',
      example: 'CHF 65,000 role = CHF 11,700 fee',
      features: [
        'Full recruitment process',
        'Candidate screening & vetting',
        'Interview coordination',
        '90-day replacement warranty',
        'Dedicated recruiter support',
      ],
    },
    {
      salaryRange: 'CHF 80-120K',
      fee: '20%',
      description: 'Senior & specialized roles',
      example: 'CHF 100,000 role = CHF 20,000 fee',
      features: [
        'All previous tier features',
        'Advanced skill assessment',
        'Cultural fit evaluation',
        'Negotiation support',
        'Onboarding assistance',
      ],
      popular: true,
    },
    {
      salaryRange: 'CHF 120K+',
      fee: '22%',
      description: 'Executive & leadership roles',
      example: 'CHF 150,000 role = CHF 33,000 fee',
      features: [
        'All previous tier features',
        'Executive search expertise',
        'Confidential process',
        'Leadership assessment',
        'Long-term succession planning',
      ],
    },
  ];

  const additionalServices = [
    {
      service: 'Contract Staffing',
      pricing: '15% markup on hourly rate',
      description: 'Flexible staffing for project-based needs',
    },
    {
      service: 'Bulk Hiring (5+ roles)',
      pricing: 'Custom pricing (10-15% discount)',
      description: 'Volume discounts for large-scale hiring',
    },
    {
      service: 'Retained Search',
      pricing: 'Upfront retainer + success fee',
      description: 'For exclusive C-suite and board positions',
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
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              No hidden costs. No surprises. Just clear, upfront pricing based on the value we deliver.
            </p>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="container mx-auto px-4 py-16 max-w-container">
          <div className="bg-blue-50 border-2 border-alpine-blue p-8 text-center">
            <h3 className="text-2xl text-swiss-graphite font-bold mb-4">
              Why Our Pricing Stands Out
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-accent-red mb-2">20-25%</div>
                <div className="text-gray-600">Industry Standard</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-alpine-blue mb-2">18-22%</div>
                <div className="text-gray-600">Helvetiq Search</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-alpine-blue mb-2">90 Days</div>
                <div className="text-gray-600">Replacement Warranty</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Pricing Tiers */}
        <section className="container mx-auto px-4 py-16 max-w-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-4">
              Permanent Placement Fees
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our fees are based on the candidate's first-year annual salary. Simple, transparent, and competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                hover
                className={`h-full relative ${tier.popular ? 'border-alpine-blue border-4' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="blue" size="md">Most Popular</Badge>
                  </div>
                )}
                <div className="space-y-6 pt-4">
                  <div className="text-center border-b-2 border-frost-silver pb-6">
                    <div className="text-sm text-gray-600 mb-2">{tier.description}</div>
                    <div className="text-3xl text-swiss-graphite font-bold mb-2">
                      {tier.salaryRange}
                    </div>
                    <div className="text-5xl text-alpine-blue font-bold mb-2">
                      {tier.fee}
                    </div>
                    <div className="text-xs text-gray-500 italic">{tier.example}</div>
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-alpine-blue font-bold mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.popular ? 'primary' : 'secondary'}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4 max-w-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Flexible pricing for specialized hiring needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((item, index) => (
                <Card key={index} className="text-center">
                  <h3 className="text-2xl text-swiss-graphite font-bold mb-4">
                    {item.service}
                  </h3>
                  <div className="text-3xl text-alpine-blue font-bold mb-4">
                    {item.pricing}
                  </div>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="container mx-auto px-4 py-24 max-w-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-8">
              Our 90-Day Guarantee
            </h2>
            <Card className="text-left">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  If a placed candidate leaves or is terminated within <strong className="text-alpine-blue">90 days</strong> of their start date for any reason other than company-wide layoffs, we will replace them at <strong className="text-alpine-blue">no additional cost</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This guarantee reflects our confidence in our vetting process and commitment to long-term placements. Unlike competitors who offer 30-60 day warranties, we stand by our candidates for a full quarter.
                </p>
                <div className="bg-blue-50 border-l-4 border-alpine-blue p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> The replacement process typically takes 7-14 days, ensuring minimal disruption to your operations.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="bg-frost-silver py-24">
          <div className="container mx-auto px-4 max-w-container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-4">
                Common Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'When is payment due?',
                  a: 'Payment is due within 30 days of the candidate\'s start date. We offer flexible payment terms for bulk hiring projects.',
                },
                {
                  q: 'Are there any upfront fees?',
                  a: 'No. We only charge upon successful placement. For retained executive search, we may require a retainer (credited toward final fee).',
                },
                {
                  q: 'What if we hire multiple candidates?',
                  a: 'We offer volume discounts for 5+ placements within a 12-month period. Contact us for custom pricing.',
                },
                {
                  q: 'Do you charge for candidate interviews?',
                  a: 'No. All screening, coordination, and interview support is included in our placement fee.',
                },
              ].map((faq, index) => (
                <Card key={index} hover>
                  <h3 className="text-xl text-swiss-graphite font-bold mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-700">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-alpine-blue text-alpine-white py-24">
          <div className="container mx-auto px-4 max-w-container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Hire with Confidence?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Let's discuss your hiring needs and create a custom plan that fits your budget and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule a Consultation
              </Button>
              <Button variant="secondary" size="lg">
                Download Pricing Sheet
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
