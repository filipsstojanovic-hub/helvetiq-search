import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Industries() {
  const industries = [
    {
      id: 'engineering',
      title: 'Engineering & Manufacturing',
      icon: '⚙️',
      description: 'Precision engineering talent for Switzerland\'s industrial backbone',
      overview: 'Switzerland\'s engineering and manufacturing sector demands highly skilled professionals who combine technical expertise with Swiss precision. We specialize in placing engineers across mechanical, electrical, and industrial disciplines.',
      roles: [
        'Mechanical Engineers',
        'Electrical Engineers',
        'Process Engineers',
        'Quality Assurance Engineers',
        'Production Managers',
        'R&D Specialists',
        'CAD/CAM Designers',
        'Supply Chain Engineers',
      ],
      challenges: [
        'Shortage of qualified Swiss engineers with industry-specific certifications',
        'High competition for senior engineering talent',
        'Need for multilingual professionals (German, French, English)',
        'Compliance with Swiss safety and quality standards',
      ],
      solutions: [
        'Access to international engineering talent with Swiss work permits',
        'Pre-screening for technical competencies and Swiss certifications',
        'Salary benchmarking to ensure competitive offers',
        'Cultural fit assessment for Swiss manufacturing environments',
      ],
      stats: [
        { label: 'Average Salary Range', value: 'CHF 85K-120K' },
        { label: 'Typical Placement Time', value: '10-14 days' },
        { label: 'Success Rate', value: '92%' },
      ],
    },
    {
      id: 'finance',
      title: 'Finance & Banking',
      icon: '💼',
      description: 'Elite financial professionals for Switzerland\'s banking capital',
      overview: 'As a global financial hub, Switzerland requires finance professionals who understand regulatory compliance, wealth management, and international markets. We connect you with top-tier banking and finance talent.',
      roles: [
        'Financial Analysts',
        'Investment Bankers',
        'Risk Managers',
        'Compliance Officers',
        'Wealth Advisors',
        'Portfolio Managers',
        'Financial Controllers',
        'Auditors',
      ],
      challenges: [
        'Strict regulatory requirements (FINMA compliance)',
        'High demand for multilingual finance professionals',
        'Need for discretion in executive-level searches',
        'Competitive salary expectations in Zürich and Geneva',
      ],
      solutions: [
        'Confidential executive search for C-suite roles',
        'Compliance background checks and FINMA certification verification',
        'Market insights on Swiss vs. international compensation',
        'Network of professionals from UBS, Credit Suisse, and private banks',
      ],
      stats: [
        { label: 'Average Salary Range', value: 'CHF 90K-150K+' },
        { label: 'Typical Placement Time', value: '14-21 days' },
        { label: 'Success Rate', value: '89%' },
      ],
    },
    {
      id: 'technology',
      title: 'IT & Technology',
      icon: '💻',
      description: 'Cutting-edge tech talent for Switzerland\'s digital transformation',
      overview: 'Switzerland\'s tech sector is booming, with demand for software developers, data scientists, and cybersecurity experts. We place professionals who drive innovation and digital transformation.',
      roles: [
        'Software Engineers',
        'DevOps Engineers',
        'Data Scientists',
        'Cybersecurity Specialists',
        'Product Managers',
        'Cloud Architects',
        'Frontend/Backend Developers',
        'IT Project Managers',
      ],
      challenges: [
        'Global competition for top tech talent',
        'Rapid technology evolution requiring constant upskilling',
        'High salary expectations in Zürich tech hubs',
        'Need for both technical and business acumen',
      ],
      solutions: [
        'Access to international tech talent networks (Berlin, London, Silicon Valley)',
        'Technical assessment and coding challenges',
        'Salary data for competitive offers (CHF 95K-130K range)',
        'Cultural fit for Swiss vs. startup environments',
      ],
      stats: [
        { label: 'Average Salary Range', value: 'CHF 95K-130K' },
        { label: 'Typical Placement Time', value: '7-14 days' },
        { label: 'Success Rate', value: '94%' },
      ],
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
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Deep industry expertise across Switzerland's key sectors. We understand your market, challenges, and talent needs.
            </p>
          </div>
        </section>

        {/* Industry Sections */}
        {industries.map((industry, index) => (
          <section
            key={industry.id}
            className={`py-24 ${index % 2 === 0 ? 'bg-alpine-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4 max-w-container">
              {/* Industry Header */}
              <div className="text-center mb-16">
                <div className="text-6xl mb-4">{industry.icon}</div>
                <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-4">
                  {industry.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {industry.description}
                </p>
              </div>

              {/* Overview */}
              <Card className="mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {industry.overview}
                </p>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {industry.stats.map((stat, idx) => (
                  <Card key={idx} className="text-center">
                    <div className="text-3xl text-alpine-blue font-bold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </Card>
                ))}
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Roles */}
                <Card>
                  <h3 className="text-2xl text-swiss-graphite font-bold mb-4">
                    Roles We Fill
                  </h3>
                  <ul className="space-y-2">
                    {industry.roles.map((role, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-alpine-blue font-bold mt-1">✓</span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Challenges */}
                <Card>
                  <h3 className="text-2xl text-swiss-graphite font-bold mb-4">
                    Industry Challenges
                  </h3>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-accent-red font-bold mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Solutions */}
              <Card className="bg-blue-50 border-2 border-alpine-blue">
                <h3 className="text-2xl text-swiss-graphite font-bold mb-4">
                  How We Help
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-alpine-blue font-bold mt-1">→</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* CTA */}
              <div className="text-center mt-12">
                <Button variant="primary" size="lg">
                  Discuss Your {industry.title} Hiring Needs
                </Button>
              </div>
            </div>
          </section>
        ))}

        {/* Cross-Industry Capabilities */}
        <section className="bg-swiss-graphite text-alpine-white py-24">
          <div className="container mx-auto px-4 max-w-container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cross-Industry Capabilities
              </h2>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                Beyond our core sectors, we also support hiring for:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                'Healthcare & Life Sciences',
                'Legal & Compliance',
                'Marketing & Communications',
                'Operations & Logistics',
                'Sales & Business Development',
                'HR & Administration',
                'Real Estate & Construction',
                'Consulting & Advisory',
              ].map((sector, index) => (
                <div
                  key={index}
                  className="bg-alpine-white bg-opacity-10 p-4 text-center border border-alpine-white border-opacity-20"
                >
                  <span className="text-alpine-white font-medium">{sector}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg opacity-90 mb-6">
                Don't see your industry? We work across all sectors.
              </p>
              <Button variant="secondary" size="lg">
                Contact Us About Your Industry
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-24 max-w-container text-center">
          <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-8">
            Ready to Build Your Team?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss your specific hiring challenges and create a tailored recruitment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Schedule a Consultation
            </Button>
            <Button variant="secondary" size="lg">
              View Our Process
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
