import Image from "next/image";
import Education from "./components/Education";
import Publications from "./components/Publication";
import Project from "./components/Project"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <main className="px-8">
        <Project></Project>
        <div className="mb-15 flex">
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
