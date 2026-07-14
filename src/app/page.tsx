import Image from "next/image";
import Education from "./components/Education";
import Publications from "./components/Publication";
import Project from "./components/Project"

export default function Home() {
  return (
    <>
      <main className="px-8">
        <Project></Project>
        <div className="flex">
          <div className="flex-1">
            <Education />
          </div>

          <div className="flex-1">
            <Publications />
          </div>
        </div>
      </main>
    </>
  );
}
