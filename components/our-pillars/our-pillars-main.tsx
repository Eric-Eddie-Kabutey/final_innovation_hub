'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import impactMainImg from '@/public/assets/images/impactImg.png';
import innovationImg from '@/public/assets/images/impactImg.png';
import mentorshipImg from '@/public/assets/images/impactImg.png';
import Typography from '../shared/typography';
import { Button } from '../ui/button';
import { ChevronRight, Play } from 'lucide-react';

function OurPillarsMain() {
  const tabs = [
    { id: 'impact', label: 'Impact Driven' },
    { id: 'innovation', label: 'Innovation' },
    { id: 'mentorship', label: 'Mentorship' },
    { id: 'productivity', label: 'Productivity' },
  ];

  const [activeTab, setActiveTab] = useState('impact');

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const handleScrollEvent = () => {
      const offsets = tabs.map(tab => {
        const section = document.getElementById(tab.id);
        return section ? section.offsetTop - 300 : 0;
      });

      const scrollY = window.scrollY;
      const activeIndex = offsets.findIndex(
        (offset, i) =>
          scrollY >= offset &&
          (i === offsets.length - 1 || scrollY < offsets[i + 1])
      );
      if (activeIndex !== -1) setActiveTab(tabs[activeIndex].id);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <div className='w-full py-24 flex flex-col gap-12 scroll-smooth'>
      <div className='w-full bg-gray-50 sticky top-0 z-20 border-b border-gray-200'>
        <div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex justify-center md:justify-start gap-6 py-4'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleScroll(tab.id)}
              className={`transition-all duration-300 pb-2 border-b-2 ${
                activeTab === tab.id
                  ? 'border-app-primary text-app-primary'
                  : 'border-transparent text-gray-600 hover:text-app-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatedSection
        id='impact'
        reverse={false}
        image={impactMainImg}
        title='Impact Driven'
        subtitle='Celebrating a Decade+ of Impact Across Africa'
        text='We have empowered thousands of individuals and communities through our projects. From rural development to youth empowerment, we are committed to making a measurable difference. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque suscipit ullam id iure facilis iusto eius debitis dolor ipsa consequatur deserunt laborum maxime eligendi atque corrupti facere ipsum maiores cupiditate, quisquam qui libero blanditiis sed. Dignissimos, maxime hic dicta in sunt optio consectetur soluta minima molestias eum modi consequatur quisquam, officiis nemo est neque architecto et voluptate atque ipsa maiores facere illum. Voluptate, architecto. Minus enim quae repellendus ad fugiat adipisci tempora ipsum tempore eligendi deleniti id esse in quidem odit porro iusto asperiores sequi error, exercitationem assumenda natus. Recusandae a facere fugit praesentium possimus eum, est doloribus? Voluptatibus.'
      />

      <AnimatedSection
        id='innovation'
        reverse={true}
        image={innovationImg}
        title='Innovation'
        subtitle='Transforming Africa Through Technology and Creativity'
        text='We harness innovation to solve real challenges. From digital solutions to creative programs, our work inspires new ways of thinking, creating sustainable change across the continent.'
      />

      <AnimatedSection
        id='mentorship'
        reverse={false}
        image={mentorshipImg}
        title='Mentorship'
        subtitle='Building Future Leaders Through Guidance and Mentorship'
        text='Our mentorship programs nurture leadership, creativity, and self-confidence. We connect aspiring young Africans with experts who guide them to reach their full potential. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque suscipit ullam id iure facilis iusto eius debitis dolor ipsa consequatur deserunt laborum maxime eligendi atque corrupti facere ipsum maiores cupiditate, quisquam qui libero blanditiis sed. Dignissimos, maxime hic dicta in sunt optio consectetur soluta minima molestias eum modi consequatur quisquam, officiis nemo est neque architecto et voluptate atque ipsa maiores facere illum. Voluptate, architecto. Minus enim quae repellendus ad fugiat adipisci tempora ipsum tempore eligendi deleniti id esse in quidem odit porro iusto asperiores sequi error, exercitationem assumenda natus. Recusandae a facere fugit praesentium possimus eum, est doloribus? Voluptatibus.'
      />

      <AnimatedSection
        id='productivity'
        reverse={true}
        image={innovationImg}
        title='Productivity'
        subtitle='Transforming Africa Through Technology and Creativity'
        text='We harness innovation to solve real challenges. From digital solutions to creative programs, our work inspires new ways of thinking, creating sustainable change across the continent.'
      />

    </div>
  );
}


function AnimatedSection({
  id,
  title,
  subtitle,
  text,
  image,
  reverse = false,
}: {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  image: StaticImageData;
  reverse?: boolean;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut' },
        },
      }}
      className={`max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto py-20 flex lg:items-start items-center xl:gap-20 lg:gap-16 gap-8 ${
        reverse ? 'flex-row-reverse' : ''
      }`}
    >
      <div className='md:block hidden relative xl:w-[550px] w-[450px] h-fit'>
        <Image
          src={image}
          alt={title}
          className='w-full h-full rounded-[2rem]'
        />
        <div className='absolute left-5 bottom-5 p-5 bg-white rounded-full shadow'>
          <Play color='#000' fill='#000' />
        </div>
      </div>

      <div className='flex-1 flex flex-col gap-4'>
        <div className='pt-4 flex flex-col gap-2'>
          <Typography typo='body-large-medium' className='text-app-primary uppercase'>
            {title}
          </Typography>
          <Typography typo='header-1-medium' className='xl:!leading-[4.5rem] !leading-[3rem]'>
            {subtitle}
          </Typography>
        </div>
        <div className='flex flex-col gap-3'>
          <Typography>
            {text}
          </Typography>
          <Button variant='outline' className='w-fit flex justify-start hover:bg-transparent'>
            Learn more
            <ChevronRight size={25} color='#fe0000' />
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

export default OurPillarsMain;
