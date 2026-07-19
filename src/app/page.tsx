import Landing from "./components/Landing";
import Education from "./components/Education";
import Publications from "./components/Publication";
import Project from "./components/Project"
import Footer from "./components/Footer"
import TechnicalSkills from "./components/TechnicalSkills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <main style={{backgroundColor: "#f8f9ff"}}>
        <div className="flex min-h-dvh flex-col">
          <Header />
          <Landing />
        </div>
        <div className="my-15 grid grid-cols-1 items-start gap-x-10 gap-y-10 px-page lg:grid-cols-[5fr_3fr]">
          <Experience />
          <div>
            <TechnicalSkills />
            <Contact />
          </div>
        </div>
        <Project></Project>
        <div className="mb-10 grid grid-cols-1 items-start gap-x-10 px-page lg:grid-cols-2">
          <Education />
          <Publications />
        </div>

        <hr className="w-full border-0 border-t border-[var(--neutral)]" />

        <Footer />
      </main>
    </>
  );
}
