import { useState, useEffect, useRef } from 'react';
import {
    HeroAboutMobile,
    HeroAboutAirBalloon,
    HeroAboutDesktop,
    HawkHacksLogo,
} from '@assets';

import { Button } from '@components';

/*
 *
 * @description Hero section & Stats for HawkHacks 2024
 * @props {void}
 * 
 */
const HeroStatSection: React.FC = () => {
    const [translateY, setTranslateY] = useState(0);
    const heroRef = useRef<HTMLElement | null>(null);
    const aboutRef = useRef<HTMLElement | null>(null);

    const handleScroll = () => {
        const newTranslateY = window.scrollY * 0.58;
        setTranslateY(newTranslateY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (heroRef.current !== null && aboutRef.current !== null) {
            const heroSection = heroRef.current;
            const heroStyles = window.getComputedStyle(heroSection);
            aboutRef.current.style.setProperty('top', heroStyles.height);

            window.addEventListener('resize', () => {
                if (heroRef.current === null || aboutRef.current === null)
                    return;
                const heroSection = heroRef.current;
                const heroStyles = window.getComputedStyle(heroSection);
                aboutRef.current.style.setProperty('top', heroStyles.height);
            });
        }
    }, []);

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        openInNewTab('https://hawkhacks.ca/sponsorships.pdf');
    };

    return (
        <div className="relative">
            <section
                ref={heroRef}
                className="hero-section stacked bg-gradient-to-b from-peachPuff to-brightUbe sm:place-items-start"
                id="top"
            >
                <img
                    src={HeroAboutDesktop}
                    alt="Hawkhacks stats"
                    className="hidden w-full sm:block"
                    fetchpriority="high"
                    width="1920"
                    height="7149"
                />
                <img
                    src={HeroAboutMobile}
                    alt="Hawkhacks stats"
                    className="block w-full sm:hidden"
                    fetchpriority="high"
                    width="1920"
                    height="8127"
                />

                <div className="mt-16 px-4 sm:ml-16 sm:mt-16 sm:px-0 lg:ml-20 lg:mt-24 xl:ml-24 xl:mt-12 2xl:mt-10">
                    <img
                        className="hidden aspect-square hover:animate-spin sm:mb-4 sm:block sm:w-28 lg:mb-10 xl:w-36 2xl:w-60"
                        src={HawkHacksLogo}
                        alt="Hawkhacks logo"
                        style={{
                            animationDuration: '2s',
                            animationIterationCount: 'infinite',
                        }}
                    />

                    <div className="mt-12">
                        <h1 className="mb-2 bg-gradient-to-b from-[#2B6469] to-[#00CEDB] bg-clip-text pb-6 text-4xl font-extrabold text-transparent sm:pb-0 sm:text-5.5xl lg:text-7xl xl:text-8.5xl">
                            HawkHacks 2024
                        </h1>

                        <div className="hidden w-3/5 rounded-xl border-2 border-black bg-[#F2F1F0] px-7 py-5 shadow-lg lg:mt-6 lg:block xl:mt-12">
                            <p className="text-base text-[#2B6469] lg:text-xl 2xl:text-3.5xl">
                                <strong> We got big things coming soon! 😉 </strong>
                            </p>

                            <div className="mt-4 items-center 2xl:mt-8">
                                <p className="text-base text-[#2B6469] lg:text-xl 2xl:text-3.5xl">
                                    Discover how our proven Hackathons and strategic partnerships can <u>elevate your brand and connect you with top tech talent</u>.
                                </p>

                                <Button
                                    className="relative block mt-6 h-16 w-1/2 basis-0 rounded-r-lg bg-gradient-to-b from-tbrand to-tbrand-hover font-medium before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition before:duration-300 before:hover:opacity-10 sm:mx-0"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    <span className="text-xl font-medium">
                                        Upgrade your business today!
                                    </span>
                                </Button>
                            </div> 
                        </div>

                        <div className="hidden w-3/5 rounded-xl border-2 border-black bg-[#F2F1F0] px-7 py-5 shadow-lg lg:mt-6 lg:block xl:mt-12">
                            <p className="text-base text-[#2B6469] lg:text-xl 2xl:text-3.5xl">
                                HawkHacks 2024 is{' '} <strong>officially over</strong>. Check out our{' '}
                                <a
                                    className="text-base font-bold text-[#2B6469] underline lg:text-xl 2xl:text-3.5xl"
                                    href="https://www.instagram.com/wluhawkhacks/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>{' '} for highlights, and{' '}
                                <a
                                    className="text-base font-bold text-[#2B6469] underline lg:text-xl 2xl:text-3.5xl"
                                    href="https://taikai.network/hackbox/hackathons/hawkhacks/projects/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    TaiKai
                                </a>{' '} for all project submissions. 
                                
                                <br />
                                <br />
                                
                                Thank you to everyone who made HawkHacks possible, until next time! 💖
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="w-full rounded-xl border-2 border-black bg-[#F2F1F0] px-7 py-5 shadow-lg lg:hidden xl:hidden 2xl:hidden sm:w-3/4">
                            <p className="text-base text-center text-[#2B6469] lg:text-xl 2xl:text-3.5xl">
                                <strong> We got big things coming soon! 😉 </strong>
                            </p>

                            <div className="mt-4 items-center 2xl:mt-8">
                                <p className="text-base text-center text-[#2B6469] lg:text-xl 2xl:text-3.5xl">
                                    Discover how our proven Hackathons and strategic partnerships can <u>elevate your brand and connect you with top tech talent</u>.
                                </p>

                                <Button
                                    className="relative block mt-6 h-16 w-full basis-0 rounded-r-lg bg-gradient-to-b from-tbrand to-tbrand-hover font-medium before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition before:duration-300 before:hover:opacity-10 sm:mx-0"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    <span className="text-md font-medium">
                                        Upgrade your business today!
                                    </span>
                                </Button>
                            </div> 
                        </div>
                    </div>
                </div>

                <div
                    id="about-anchor"
                    className="absolute left-1/2 top-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform pt-24 text-[#1D4549] sm:top-[70%] sm:pt-36 md:top-3/4 md:pt-36 "
                >
                    <h2 className="mb-6 text-center text-4.5xl uppercase text-white drop-shadow-md lg:mb-12 lg:text-6.5xl xl:mb-16 xl:text-7.5xl 2xl:mb-24">
                        About Hawkhacks
                    </h2>

                    <div className="space-y-3 text-center text-[#1D4549] lg:space-y-10">
                        <p className="text-base md:text-lg lg:text-2xl xl:text-2.5xl 2xl:text-3xl">
                            HawkHacks came out of a desire to give everyone an
                            equal opportunity to get into tech, whether that be
                            programming, networking, researching, learning, or
                            teaching.
                        </p>
                        <p className="text-base md:text-lg lg:text-2xl xl:text-2.5xl 2xl:text-3xl">
                            Join hundreds of students across Canada (and across
                            the world) in a 36 hour period of exploration,
                            creativity, and learning!
                        </p>
                        <p className="text-base md:text-lg lg:text-2xl xl:text-2.5xl 2xl:text-3xl">
                            Remember, you don't have to be a pro to participate
                            - show up with ten years or ten minutes of
                            experience (oh yeah, and a great attitude too!)
                        </p>
                    </div>
                </div>
                
                <img
                    src={HeroAboutAirBalloon}
                    alt=""
                    className="absolute left-[70%] top-1/3 hidden w-[20%] sm:top-1/4 md:block"
                    style={{ transform: `translateY(${translateY}px)` }} // Move balloon with scroll
                />
            </section>
        </div>
    );
};

export { HeroStatSection };
