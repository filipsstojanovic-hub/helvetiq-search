'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function SalaryCalculator() {
  const [role, setRole] = useState('');
  const [canton, setCanton] = useState('Zürich');
  const [experience, setExperience] = useState('5');
  const [result, setResult] = useState<{
    min: number;
    max: number;
    median: number;
  } | null>(null);

  const cantons = [
    'Zürich',
    'Geneva',
    'Basel',
    'Bern',
    'Lausanne',
    'Lucerne',
    'St. Gallen',
    'Lugano',
  ];

  const roles = [
    'Software Engineer',
    'Mechanical Engineer',
    'Financial Analyst',
    'Product Manager',
    'Data Scientist',
    'Project Manager',
    'DevOps Engineer',
    'Business Analyst',
  ];

  const calculateSalary = () => {
    // Mock calculation - in production, this would call an API
    const baselineSalaries: { [key: string]: number } = {
      'Software Engineer': 95000,
      'Mechanical Engineer': 85000,
      'Financial Analyst': 90000,
      'Product Manager': 105000,
      'Data Scientist': 100000,
      'Project Manager': 95000,
      'DevOps Engineer': 98000,
      'Business Analyst': 88000,
    };

    const cantonMultipliers: { [key: string]: number } = {
      'Zürich': 1.1,
      'Geneva': 1.08,
      'Basel': 1.05,
      'Bern': 1.0,
      'Lausanne': 1.02,
      'Lucerne': 0.98,
      'St. Gallen': 0.95,
      'Lugano': 0.97,
    };

    const baseline = baselineSalaries[role] || 85000;
    const multiplier = cantonMultipliers[canton] || 1.0;
    const experienceBonus = 1 + (parseInt(experience) * 0.05);

    const median = Math.round(baseline * multiplier * experienceBonus);
    const min = Math.round(median * 0.85);
    const max = Math.round(median * 1.15);

    setResult({ min, max, median });
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-swiss-graphite font-bold mb-4">
            Swiss Salary Calculator
          </h2>
          <p className="text-xl text-gray-600">
            Get real-time salary insights for Swiss markets. No login required.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {/* Role Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-swiss-graphite">
                Role <span className="text-accent-red">*</span>
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="px-4 py-3 border-2 border-frost-silver focus:border-alpine-blue focus:outline-none text-base"
              >
                <option value="">Select a role...</option>
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Canton Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-swiss-graphite">
                Canton <span className="text-accent-red">*</span>
              </label>
              <select
                value={canton}
                onChange={(e) => setCanton(e.target.value)}
                className="px-4 py-3 border-2 border-frost-silver focus:border-alpine-blue focus:outline-none text-base"
              >
                {cantons.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="text-sm font-medium text-swiss-graphite block mb-2">
                Years of Experience: <span className="font-bold text-alpine-blue">{experience}</span>
              </label>
              <input
                type="range"
                min="0"
                max="20"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full h-2 bg-frost-silver rounded-lg appearance-none cursor-pointer accent-alpine-blue"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0 years</span>
                <span>20+ years</span>
              </div>
            </div>

            {/* Calculate Button */}
            <Button
              variant="primary"
              size="lg"
              onClick={calculateSalary}
              disabled={!role}
              className="w-full"
            >
              Calculate Salary Range
            </Button>

            {/* Results */}
            {result && (
              <div className="mt-8 p-6 bg-alpine-blue bg-opacity-5 border-2 border-alpine-blue">
                <h3 className="text-lg font-bold text-swiss-graphite mb-4">
                  Estimated Salary Range for {role} in {canton}
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Minimum</div>
                    <div className="text-2xl font-bold text-swiss-graphite">
                      CHF {result.min.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Median</div>
                    <div className="text-3xl font-bold text-alpine-blue">
                      CHF {result.median.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Maximum</div>
                    <div className="text-2xl font-bold text-swiss-graphite">
                      CHF {result.max.toLocaleString()}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Based on {experience} years of experience in {canton}
                </p>
              </div>
            )}

            <p className="text-xs text-gray-500 text-center mt-4">
              *Salary ranges are estimates based on market data and may vary. Contact us for personalized salary insights.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
