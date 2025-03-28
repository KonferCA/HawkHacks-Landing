import { departments, faqData } from './data';

import { Accordion } from '@components';

import {
    FaqBackground,
    Clouds,
    MeetTheTeamBalloon,
    MeetTheTeamBanner,
    MeetTheTeamBuildingLeft,
    MeetTheTeamBuildingRight,
} from '@assets';

/*
 *
 * @description Member interface
 * @props {string} name, {string} title, {string} profile, {string} company (optional)
 * 
 */
interface Member {
    name: string;
    title: string;
    profile: string;
    company?: string;
}

/*
 *
 * @description DepartmentProps interface
 * @props {string} title, {Member[]} members
 * 
 */
interface DepartmentProps {
    title: string;
    members: Member[];
}

/*
 *
 * @description Department component
 * @props {string} title, {Member[]} members
 * 
 */
const Department: React.FC<DepartmentProps> = ({ title, members }) => {
    return (
        <div className="department">
            <h3 className="mb-6 text-3xl font-bold capitalize text-white drop-shadow-md md:mb-8">
                {title}
            </h3>

            <ul className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
                {members.map((member, index) => (
                    <li key={index} className="flex items-center gap-x-4">
                        <img
                            className="aspect-square w-20 rounded-full object-cover lg:w-32"
                            src={member.profile}
                            alt={title}
                            loading='lazy'
                        />

                        <div>
                            <p className="text-lg font-extrabold text-white drop-shadow-md lg:text-2xl">
                                {member.name}
                            </p>
                            <p className="text-base font-normal text-white drop-shadow-md lg:text-lg">
                                {member.title}
                            </p>
                            {member.company && (
                                <p className="text-base font-normal text-white drop-shadow-md lg:text-lg">
                                    {member.company}
                                </p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

/*
 *
 * @description TeamFAQSection component
 * @props {void}
 * 
 */
const TeamFAQSection: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-[#CBAAF4] to-[#85C1C5] to-[120%]">
            <section id="faq" className="stacked -mb-24 bg-cover">
                <img src={FaqBackground} alt="" className="w-full" />
                <div className="container mx-auto px-4">
                    <h2
                        id="faq-anchor"
                        className="mt-20 text-center font-bold text-white drop-shadow-md md:mt-32"
                    >
                        FAQ
                    </h2>

                    <div className="mx-auto max-w-6xl pb-12">
                        <Accordion sections={faqData} />
                    </div>
                </div>
            </section>

            <section
                id="team"
                className="relative isolate p-4 md:-translate-y-[2%] md:p-8 lg:p-12 xl:-translate-y-[15%]"
            >
                <div className="relative mx-auto mb-10 w-fit sm:mb-24 lg:mb-32">
                    <img
                        className="mx-auto hidden w-full max-w-fit sm:block md:mt-24"
                        src={MeetTheTeamBalloon}
                        alt=""
                    />
                    <img
                        className="mx-auto w-full max-w-[70rem] sm:hidden"
                        src={MeetTheTeamBanner}
                        alt=""
                    />
                    <img
                        className="absolute bottom-0 z-10 hidden translate-y-1/2 sm:block"
                        src={Clouds}
                        alt=""
                    />
                    <span
                        className="anchor sr-only bottom-1/4 left-0 -translate-y-1/2"
                        id="team-anchor"
                    ></span>
                </div>

                <img
                    className="absolute right-0 -z-10 hidden lg:block "
                    src={MeetTheTeamBuildingRight}
                    alt=""
                />

                <img
                    className="absolute bottom-0 left-0 -z-10 hidden -translate-x-1/3 translate-y-1/2 lg:block 2xl:translate-y-[30%]"
                    src={MeetTheTeamBuildingLeft}
                    alt=""
                />

                <div className="mx-auto max-w-7xl space-y-12 pb-52 md:pb-80 lg:pb-96">
                    {departments.map((department) => (
                        <Department {...department} key={department.title} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export { TeamFAQSection };