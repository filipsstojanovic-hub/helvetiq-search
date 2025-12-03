'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'hiring',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission - in production, this would call an API
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        inquiryType: 'hiring',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@helvetiqsearch.ch',
      link: 'mailto:hello@helvetiqsearch.ch',
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+41 44 XXX XX XX',
      link: 'tel:+41XXXXXXXX',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Zürich, Switzerland',
      link: null,
    },
    {
      icon: '⏰',
      label: 'Business Hours',
      value: 'Mon-Fri, 9:00-18:00 CET',
      link: null,
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Whether you're hiring or exploring career opportunities, we're here to help. Let's start a conversation.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="container mx-auto px-4 py-24 max-w-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-3xl text-swiss-graphite font-bold mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="bg-alpine-blue bg-opacity-10 border-2 border-alpine-blue p-8 text-center">
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl text-alpine-blue font-bold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-700">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        placeholder="john@company.ch"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Company & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Company"
                        type="text"
                        name="company"
                        placeholder="Company AG"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      <Input
                        label="Phone Number"
                        type="tel"
                        name="phone"
                        placeholder="+41 XX XXX XX XX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-swiss-graphite">
                        I'm interested in <span className="text-accent-red">*</span>
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="px-4 py-3 border-2 border-frost-silver focus:border-alpine-blue focus:outline-none text-base"
                      >
                        <option value="hiring">Hiring for my company</option>
                        <option value="career">Exploring career opportunities</option>
                        <option value="partnership">Partnership inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-swiss-graphite">
                        Message <span className="text-accent-red">*</span>
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your hiring needs or career goals..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="px-4 py-3 border-2 border-frost-silver focus:border-alpine-blue focus:outline-none text-base resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Send Message
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <h3 className="text-2xl text-swiss-graphite font-bold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-3xl">{info.icon}</div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-alpine-blue font-medium hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-swiss-graphite font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-blue-50 border-2 border-alpine-blue">
                <h3 className="text-xl text-swiss-graphite font-bold mb-3">
                  Quick Response Guarantee
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We respond to all inquiries within <strong>24 hours</strong> during business days. For urgent hiring needs, call us directly.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl text-swiss-graphite font-bold mb-3">
                  Prefer a Call?
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Schedule a 15-minute discovery call to discuss your needs.
                </p>
                <Button variant="secondary" size="md" className="w-full">
                  Book a Call
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4 max-w-container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-4">
                Why Companies Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: '7-14 Day Delivery',
                  description: 'Guaranteed shortlist within 7 days, placement within 14 days.',
                },
                {
                  title: '90-Day Warranty',
                  description: 'Free replacement if the candidate doesn't work out in the first quarter.',
                },
                {
                  title: 'Transparent Pricing',
                  description: 'Clear, upfront fees with no hidden costs. 18-22% placement fee.',
                },
              ].map((item, index) => (
                <Card key={index} hover className="text-center">
                  <h3 className="text-xl text-swiss-graphite font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-alpine-blue text-alpine-white py-24">
          <div className="container mx-auto px-4 max-w-container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Swiss-standard recruitment for companies that value precision, speed, and long-term results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                View Our Services
              </Button>
              <Button variant="secondary" size="lg">
                See Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
