'use client';
import React, { useState } from 'react';
import { InformationCircleIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface PricingOption {
  id: string;
  label: string;
  price: string;
  features: string[];
}

interface FeaturePlan {
  name: string,
  included: boolean,
  info?: string,
}

interface Plan {
  name: string,
  description: string,
  valueMonth: number,
  valueYear: number,
  features: FeaturePlan[],
  isPopular: boolean,
}

const PricingSection: React.FC = () => {
  const pricingOptions: PricingOption[] = [
    {
      id: 'monthly',
      label: 'Monthly',
      price: '$10',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      id: 'yearly',
      label: 'Yearly',
      price: '$90',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    }
  ];

  const plans: Plan[] = [
    {
      name: 'Personal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      valueMonth: 50,
      valueYear: 40,
      features: [
        { name: 'ipsum deserunt nisi tampor labor', included: true },
        { name: 'ipsum deserunt nisi tampor labor', included: true, info: 'ipsum deserunt nisi tampor labor' },
        { name: 'ipsum deserunt nisi tampor labor', included: false },
        { name: 'ipsum deserunt nisi tampor labor', included: false }
      ],
      isPopular: false,
    },
    {
      name: 'Startup',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      valueMonth: 100,
      valueYear: 80,
      features: [
        { name: 'ipsum deserunt nisi tampor labor', included: true },
        { name: 'ipsum deserunt nisi tampor labor', included: true, info: 'ipsum deserunt nisi tampor labor' },
        { name: 'ipsum deserunt nisi tampor labor', included: true },
        { name: 'ipsum deserunt nisi tampor labor', included: false }
      ],
      isPopular: true,
    },
    {
      name: 'Organization',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      valueMonth: 200,
      valueYear: 120,
      features: [
        { name: 'ipsum deserunt nisi tampor labor', included: true },
        { name: 'ipsum deserunt nisi tampor labor', included: true, info: 'ipsum deserunt nisi tampor labor' },
        { name: 'ipsum deserunt nisi tampor labor', included: true },
        { name: 'ipsum deserunt nisi tampor labor', included: true }
      ],
      isPopular: false,
    }
  ]

  const [selectedOption, setSelectedOption] = useState<string>(pricingOptions[0].id);

  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
  };

  return (
    <div className="flex flex-col items-center justify-center py-28 mx-auto max-w-7xl lg:max-w-6xl md:max-w-3xl">
      <p className="text-5xl font-bold">Pricing</p>
      <p className="text-black-500 my-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex flex-col bg-white p-2 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {pricingOptions.map((option) => (
          <button
            key={option.id}
            className={`py-3 px-8 transition-colors duration-300 text-black ${selectedOption === option.id ? 'bg-black text-white' : 'bg-white'
              }`}
            onClick={() => handleOptionChange(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mt-8 max-w-6xl">
        {
          plans.map(plan => (
            <div key={plan.name} className={`flex flex-col max-w-[420px] bg-white justify-between p-6 pt-9 border-black ${plan.isPopular ? 'border-2 my-0' : 'border my-5'}`}>
              <div>
                <div className='flex items-center justify-between'>
                  <p className="text-4xl font-bold">{plan.name}</p>
                  { plan.isPopular && <span className='text-xs text-white bg-black p-2 px-2 rounded-3xl'>Popular</span> }
                </div>
                <p className='mt-2 text-sm'>{plan.description}</p>
                <div className='flex mt-5 items-center'>
                  <span className='text-4xl font-bold'>${selectedOption === 'monthly' ? plan.valueMonth : plan.valueYear}</span><span className='ml-2'>/user/month</span>
                </div>
                <ul className='my-4 space-y-2'>
                  {
                    plan.features.map(feature => (
                      <li key={feature.name} className='flex flex-row items-center'>
                        {feature.included ? <CheckCircleIcon className="w-8 text-green-500" /> : <XMarkIcon className="w-8 text-red-500" />}
                        <span className='text-sm ml-2'>{feature.name}</span>
                        {feature.info ? (
  <div className="relative inline-block group">
    <InformationCircleIcon className="ml-2 w-6 text-gray-600" aria-hidden="true" />
    <div className="hidden group-hover:block absolute bg-white p-2 rounded-md shadow-lg">
      <p className="text-gray-800 text-sm">{feature.info}</p>
    </div>
  </div>
) : null}

                      </li>
                    ))
                  }
                </ul>
              </div>
              <button className={`border-black border-solid border mt-3 py-2 ${plan.isPopular ? 'bg-black text-accent hover:bg-gray-600 border-gray-600' : ''}`}>{plan.name === 'Organization' ? 'Contact Sale' : 'Upgrade'}</button>

            </div>))
        }
      </div>
    </div>
  );
};

export default PricingSection;