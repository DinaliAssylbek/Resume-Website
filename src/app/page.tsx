import Image from "next/image";
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
        <Header></Header>
        <div className="my-15 flex">
          <div className="flex-2">
            <Experience />
          </div>
          <div className="flex-1">
            <div>
              <TechnicalSkills />
              <Contact />
            </div>
          </div>
        </div>
        <Project></Project>
        <div className="mb-10 flex">
          <div className="flex-1">
            <Education />
          </div>

          <div className="flex-1">
            <Publications />
          </div>
        </div>

        <hr className="-mx-8 border-0 border-t border-[var(--neutral)]" />

        <Footer />
      </main>
    </>
  );
}
