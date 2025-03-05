'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
    const imageRef = useRef(null); // Initialize ref

    useEffect(() => {
        const imageElement = imageRef.current;
        if (!imageElement) return; // Ensure the ref exists

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add('scrolled');
            } else {
                imageElement.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup event listener when component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="z-50 max-w-screen-lg mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl lg:text-7xl px-10 pb-6 font-bold gradient-title">
                Empower Your Finances with Smart Management
            </h2>

            {/* Description */}
            <p className="mt-4 text-lg text-gray-600 px-10 mx-auto">
                Take control of your financial future with our powerful financial management system.
                Track expenses, manage budgets, and optimize your financial decisions with ease.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex items-center justify-center gap-4">
                <Link href="/dashboard">
                    <Button size="lg" className="px-8">Get Started</Button>
                </Link>
                <Link href="/watch-demo">
                    <Button size="lg" variant="outline" className="px-8">Watch Demo</Button>
                </Link>
            </div>

            {/* Image Section */}
            <div className="hero-image-wrapper mt-10 flex justify-center">
                <Image
                    ref={imageRef}
                    src="/bannerimg.jpg"
                    width={1280}
                    height={720}
                    alt="Dashboard preview"
                    className="rounded-lg border mx-auto shadow-lg hero-image"
                    priority
                />
            </div>
        </div>
    );
};

export default HeroSection;
