'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import john from './john-copy.png'
import johncompany from './john_company.png'
import alex from './alex-copy.png'
import alexcompany from './alex_company.png'
import jane from './jane-copy.png'
import janecompany from './jane_company.png'
import micheal from './micheal-copy.png'
import michealcomapny from './micheal_company.png'
import sarah from './sarah-copy.png'
import sarahcompany from './sarah_company.png'
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';


const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      logo: johncompany,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus euismod, hendrerit turpis id, pulvinar tellus.',
      profilePic: john,
      fullName: 'John Doe',
      jobTitle: 'Web Developer'
    },
    {
      id: 2,
      logo: janecompany,
      text: 'Nullam non neque et dolor rutrum tempor in a ligula. Sed id mauris eu dolor eleifend euismod.',
      profilePic: jane,
      fullName: 'Jane Smith',
      jobTitle: 'Graphic Designer'
    },
    {
      id: 3,
      logo: alexcompany,
      text: 'Vestibulum consectetur elit at mi tempor, ut viverra lorem faucibus. Sed eleifend metus id nibh elementum feugiat.',
      profilePic: alex,
      fullName: 'Alex Johnson',
      jobTitle: 'UX Designer'
    },
    {
      id: 4,
      logo: sarahcompany,
      text: 'Cras auctor mattis odio nec varius. Pellentesque at mi consectetur, congue nulla a, fermentum orci.',
      profilePic: sarah,
      fullName: 'Sarah Davis',
      jobTitle: 'Marketing Manager'
    },
    {
      id: 5,
      logo: michealcomapny,
      text: 'Fusce rutrum elit eget dolor lobortis, in accumsan lectus pretium. Proin congue enim eu tincidunt feugiat.',
      profilePic: micheal,
      fullName: 'Michael Wilson',
      jobTitle: 'Product Manager'
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="flex flex-col mx-auto items-center justify-center max-w-7xl lg:max-w-6xl md:max-w-3xl">
      <div className="flex items-center flex-col">
        <div className="h-16">
          <Image src={testimonial.logo} alt="Logo" className="w-20" />
        </div>
        <p className="font-bold text-lg mt-5">Torquent</p>
        <div className="flex items-center mt-10 gap-24">
          <button
            className="text-black text-1xl py-5 px-6 bg-black bg-opacity-5 text-center max-sm:hidden"
            onClick={handlePrevTestimonial}
          >
            <ChevronLeftIcon
              className="h-5 w-5 scale-150 stroke-0 stroke-black hover:stroke-current"
              aria-hidden="true"
            />
          </button>
          <div className="flex-1 max-w-3xl max-xs:h-[150px] max-sm:h-[150px] max-md:h-[180px] md:h-[200px] lg:h-[150px]">
            <p className="text-center text-3xl max-xs:text-lg max-md:text-2xl text-ellipsis">{testimonial.text}</p>
          </div>
          <button
            className="text-black text-1xl py-5 px-6 bg-black bg-opacity-5 text-center max-sm:hidden"
            onClick={handleNextTestimonial}
          >
            <ChevronRightIcon
              className="h-5 w-5 scale-150 stroke-0 stroke-black hover:stroke-current"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <Image
            src={testimonial.profilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-2"
          />
        </div>
        <div className='ml-3'>
          <div>
            <span className="font-bold">{testimonial.fullName} - </span>
            <span>{testimonial.jobTitle}</span>
          </div>
        </div>
      </div>
      <div className="hidden items-center mt-10 max-sm:flex gap-1">
        <button
          className="text-black text-1xl py-4 px-5 bg-black bg-opacity-5 text-center"
          onClick={handlePrevTestimonial}
        >
          <ChevronLeftIcon
            className="h-5 w-5 scale-150 stroke-0 stroke-black hover:stroke-current"
            aria-hidden="true"
          />
        </button>
        <button
          className="text-black text-1xl py-4 px-5 bg-black bg-opacity-5 text-center"
          onClick={handleNextTestimonial}
        >
          <ChevronRightIcon
            className="h-5 w-5 scale-150 stroke-0 stroke-black hover:stroke-current"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;



