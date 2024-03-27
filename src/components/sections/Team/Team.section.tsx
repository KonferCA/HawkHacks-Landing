import { departments } from './data';

interface Member {
    name: string;
    title: string;
    profile: string;
}

interface DepartmentProps {
    title: string;
    members: Member[];
}

const Department: React.FC<DepartmentProps> = ({ title, members }) => {
    return (
        <div className="department">
            <h3 className="mb-6 text-3xl text-white drop-shadow-md font-bold capitalize md:mb-8">
                {title}
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
                {members.map((member, index) => (
                    <li key={index} className="flex items-center gap-x-4">
                        <img
                            className="aspect-square w-20 rounded-full object-cover lg:w-32"
                            src={member.profile}
                            alt={title}
                        />

                        <div>
                            <p className="text-lg text-white drop-shadow-md font-extrabold lg:text-2xl">
                                {member.name}
                            </p>
                            <p className="text-base drop-shadow-md text-white font-normal lg:text-lg">
                                {member.title}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const TeamSection = () => {
    return (
        <section
            id="team-section"
            className="relative isolate overflow-hidden bg-[#9f7eca] p-4 md:p-8 lg:p-12"
        >
            {/* top images */}
            <div className="relative mx-auto mb-10 w-fit sm:mb-24 lg:mb-32">
                <img
                    className="mx-auto w-full max-w-fit sm:hidden"
                    src="src/assets/team/meet-the-team-banner.webp"
                    alt=""
                />
                <img
                    className="mx-auto hidden w-full max-w-[70rem] sm:block"
                    src="src/assets/team/meet-the-team-balloon-banner.webp"
                    alt=""
                />
                <img
                    className="absolute bottom-0 z-10  hidden translate-y-1/2 sm:block"
                    src="src/assets/team/clouds.svg"
                    alt=""
                />
            </div>

            {/* right building image */}
            <img
                className="absolute right-0 -z-10 hidden translate-x-1/3 lg:block 2xl:translate-x-32"
                src="src/assets/team/meet-the-team-building-right.svg"
                alt=""
            />
            {/* left building image */}
            <img
                className="absolute bottom-0 left-0 -z-10 hidden -translate-x-1/3 translate-y-1/2 lg:block 2xl:translate-y-[30%]"
                src="src/assets/team/meet-the-team-building-left.svg"
                alt=""
            />

            <div className="mx-auto max-w-7xl space-y-12 pb-52 md:pb-80 lg:pb-96">
                {departments.map((department) => (
                    <Department {...department} key={department.title} />
                ))}
            </div>
        </section>
    );
};

export { TeamSection };
