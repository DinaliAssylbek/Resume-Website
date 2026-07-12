import { RiGraduationCapLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";

const Education = () => {
    return (
        <section className="py-12">

            {/* Section Header */}
            <div className="flex items-center gap-4 mb-12">
                <RiGraduationCapLine
                    className="text-[var(--secondary)] text-3xl"
                />

                <h2 className="text-3xl font-bold text-[var(--primary)]">
                    Education
                </h2>
            </div>

            {/* Education Entry */}
            <div className="flex gap-8">

                {/* Timeline */}
                <div className="w-1 bg-[var(--secondary)] rounded-full"></div>

                {/* Content */}
                <div className="flex-1 py-2">

                    {/* University */}
                    <div className="flex justify-between items-center mb-6">

                        <h3 className="text-xl font-semibold text-[var(--primary)]">
                            University of Utah
                        </h3>

                        <span
                            className="text-xl text-[var(--neutral)]"
                            style={{ fontFamily: "var(--font-label)" }}
                        >
                            Salt Lake City, UT
                        </span>

                    </div>

                    {/* Degree */}
                    <h4 className="text-2xl font-bold text-[var(--primary)] mb-6">
                        Bachelor of Science: Computer Engineering
                    </h4>

                    {/* GPA / Dates */}
                    <div className="flex justify-between items-center mb-8">

                        <span className="text-xl text-[var(--neutral)]">
                            GPA: 3.94
                        </span>

                        <span
                            className="text-xl text-[var(--neutral)]"
                            style={{ fontFamily: "var(--font-label)" }}
                        >
                            Jan 2023 – Aug 2025
                        </span>

                    </div>

                    {/* Honors */}
                    <div className="space-y-5">

                        <div className="flex items-center gap-4">

                            <FaRegCircleCheck
                                className="text-[var(--neutral)] text-xl"
                            />

                            <span className="text-xl text-[var(--neutral)]">
                                Honors: Dean's List (all semesters)
                            </span>

                        </div>

                        <div className="flex items-center gap-4">

                            <FaRegCircleCheck
                                className="text-[var(--neutral)] text-xl"
                            />

                            <span className="text-xl text-[var(--neutral)]">
                                Academic Excellence Scholarship
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Education;