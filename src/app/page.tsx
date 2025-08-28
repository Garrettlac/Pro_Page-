

import { Mail, Linkedin, Phone, FileText, Award, Code2, Briefcase } from "lucide-react";

import Image from "next/image";


export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-200 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900 text-gray-900 dark:text-gray-100 font-sans overflow-x-hidden">
      {/* Subtle colored overlay for extra vibrancy */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-br from-blue-100/60 via-purple-100/40 to-blue-300/30 dark:from-blue-900/60 dark:via-purple-900/40 dark:to-blue-950/30" />
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
  <section className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="mb-6">
          <div className="mx-auto rounded-full border-4 border-blue-400 shadow-xl w-36 h-36 overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
            <Image
              src="/IMG_0256.jpg"
              alt="Profile photo of Garrett Edward Laconis"
              width={144}
              height={144}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-blue-700 via-purple-600 to-blue-400 bg-clip-text text-transparent drop-shadow-xl">
          Garrett Edward Laconis
        </h1>
  <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 font-medium italic">
          Electrical Engineering Student @ Texas A&M University
        </p>
  <div className="flex flex-wrap gap-4 justify-center mb-4">
  <div className="flex flex-wrap gap-4 justify-center mb-4">
          <a href="tel:8324172701" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800/80 hover:bg-blue-100 dark:hover:bg-blue-900 transition font-semibold shadow-md border border-blue-200 dark:border-blue-900">
            <Phone className="w-5 h-5 text-blue-500" /> (832) 417-2701
          </a>
          <a href="mailto:laconisegarrett@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800/80 hover:bg-blue-100 dark:hover:bg-blue-900 transition font-semibold shadow-md border border-blue-200 dark:border-blue-900">
            <Mail className="w-5 h-5 text-blue-500" /> laconisegarrett@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/garrettla" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800/80 hover:bg-blue-100 dark:hover:bg-blue-900 transition font-semibold shadow-md border border-blue-200 dark:border-blue-900">
            <Linkedin className="w-5 h-5 text-blue-500" /> LinkedIn
          </a>
        </div>
      {/* Sticky Download Resume Button */}
      <a
        href="/Garrett_Laconis_Resume.pdf"
        download
        className="fixed z-50 bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition font-semibold shadow-xl border border-blue-700"
        style={{ textDecoration: 'none' }}
      >
        <FileText className="w-5 h-5 animate-bounce" /> Download Resume
      </a>
        </div>
        <p className="max-w-2xl text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-2">
          Passionate about electrical engineering, hands-on problem solving, and driving innovation in fast-paced environments. Experienced in program management, electrical design, and cross-functional collaboration.
        </p>
      </section>

  {/* Education */}
  <section className="relative z-10 max-w-3xl mx-auto py-8 px-4">
  <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300 border-b-2 border-blue-200 dark:border-blue-800 pb-2"><FileText className="w-6 h-6" /> Education</h2>
  <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900 mb-4 transition-transform hover:scale-[1.015] hover:shadow-xl">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <span className="font-bold">Texas A&M University</span> <span className="text-gray-500">— College Station, Texas</span>
            </div>
            <div className="text-gray-500">Dec 2026</div>
          </div>
          <div>Bachelor of Science in Electrical Engineering</div>
          <div className="text-gray-500 text-sm">GPA: 3.25</div>
          <div className="text-gray-700 dark:text-gray-300 text-sm mt-1">Relevant Courses: Circuit Theory, Digital System Design, Program Design Concept (C++, Python)</div>
        </div>
  </section>

      {/* Experience */}
  <section className="relative z-10 max-w-3xl mx-auto py-8 px-4">
  <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300 border-b-2 border-blue-200 dark:border-blue-800 pb-2"><Briefcase className="w-6 h-6" /> Experience</h2>
  <div className="space-y-8">
          {/* Tesla EPM Intern */}
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900 transition-transform hover:scale-[1.01] hover:shadow-xl backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="flex items-center gap-2 mb-1">
                <Image src="/Tesla_logo.png" alt="Tesla logo" width={28} height={28} className="rounded" />
                <span className="font-bold">Tesla — <span className="text-gray-500 font-normal">Austin, TX</span></span>
              </div>
              <span className="text-gray-500">May 2025 – Present</span>
            </div>
            <div className="font-semibold">Engineering Program Management Intern</div>
            <ul className="list-disc ml-5 mt-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Identified and tracked construction clashes across disciplines, driving resolution strategies to prevent schedule delays</li>
              <li>Collaborated with factory stakeholders and engineers to refine requirements and drive deliverables</li>
              <li>Drove weekly coordination meetings between engineering and field teams</li>
              <li>Monitored design revisions and change requests, improving build accuracy and reducing rework</li>
            </ul>
          </div>
          {/* Total Motion inc. */}
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900 transition-transform hover:scale-[1.01] hover:shadow-xl backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="flex items-center gap-2 mb-1">
                <Image src="/totalmotion.svg" alt="Total Motion logo" width={28} height={28} className="rounded" />
                <span className="font-bold">Total Motion inc. — <span className="text-gray-500 font-normal">Katy, TX</span></span>
              </div>
              <span className="text-gray-500">Jan 2020 – Present</span>
            </div>
            <div className="font-semibold">Prototype Evaluator</div>
            <ul className="list-disc ml-5 mt-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Advised and reviewed changes when problems arose</li>
              <li>Discovered previously unnoticed issues amidst prototype processes</li>
              <li>Tested products and subassemblies for functionality</li>
            </ul>
          </div>
          {/* Tesla Electrical Engineering Intern */}
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900 transition-transform hover:scale-[1.01] hover:shadow-xl backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="flex items-center gap-2 mb-1">
                <Image src="/Tesla_logo.png" alt="Tesla logo" width={28} height={28} className="rounded" />
                <span className="font-bold">Tesla — <span className="text-gray-500 font-normal">Robstown, TX</span></span>
              </div>
              <span className="text-gray-500">Jan 2025 – May 2025</span>
            </div>
            <div className="font-semibold">Electrical Engineering Intern</div>
            <ul className="list-disc ml-5 mt-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Created SIO designs aligned with project specifications and field requirements</li>
              <li>Designed control schematics and one-line diagrams for power distribution systems</li>
              <li>Performed hands-on field troubleshooting, minimizing downtime and maintaining safety</li>
            </ul>
          </div>
          {/* Shell */}
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900 transition-transform hover:scale-[1.01] hover:shadow-xl backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="flex items-center gap-2 mb-1">
                <Image src="/Shell_logo.png" alt="Shell logo" width={28} height={28} className="rounded" />
                <span className="font-bold">Shell — <span className="text-gray-500 font-normal">Norco, LA</span></span>
              </div>
              <span className="text-gray-500">May 2024 – Aug 2024</span>
            </div>
            <div className="font-semibold">Electrical Engineering Intern</div>
            <ul className="list-disc ml-5 mt-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Led design and implementation of a motor space heater alarm system, reducing fire risk</li>
              <li>Coordinated replacement of a steam turbine with an electric motor, assuring seamless integration</li>
              <li>Conducted safety review of substation, developing robust design packages to mitigate risks</li>
            </ul>
          </div>
          {/* Pine Cove */}
          <div className="bg-white/95 dark:bg-gray-800/95 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900 transition-transform hover:scale-[1.01] hover:shadow-xl">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="flex items-center gap-2 mb-1">
                <Image src="/Pine_Cove_logo.jpg" alt="Pine Cove logo" width={28} height={28} className="rounded" />
                <span className="font-bold">Pine Cove — <span className="text-gray-500 font-normal">Columbus, TX</span></span>
              </div>
              <span className="text-gray-500">May 2023 – Aug 2023</span>
            </div>
            <div className="font-semibold">Ridge Wake Park Driver</div>
            <ul className="list-disc ml-5 mt-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Conducted maintenance and repairs on wake park equipment to guarantee 100% uptime</li>
              <li>Operated cable systems, ensuring safe and enjoyable experiences</li>
              <li>Responded swiftly to emergencies to maintain a secure environment</li>
            </ul>
          </div>
        </div>
  </section>

  {/* Technical Skills */}
  <section className="relative z-10 max-w-3xl mx-auto py-8 px-4">
  <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300 border-b-2 border-blue-200 dark:border-blue-800 pb-2"><Code2 className="w-6 h-6" /> Technical Skills</h2>
  <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900 flex flex-wrap gap-8 transition-transform hover:scale-[1.01] hover:shadow-xl backdrop-blur-sm">
          <div>
            <div className="font-semibold">Software</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">ETAP, AutoCAD, Inventor (Certified), Fusion 360</div>
          </div>
          <div>
            <div className="font-semibold">Coding Proficient</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Python, C++</div>
          </div>
          <div>
            <div className="font-semibold">Electrical Design</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Safety analysis, one-line diagrams, control schematics, SIO cabinet design</div>
          </div>
        </div>
  </section>

  {/* Organizations & Awards */}
  <section className="relative z-10 max-w-3xl mx-auto py-8 px-4 pb-16">
  <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300 border-b-2 border-blue-200 dark:border-blue-800 pb-2"><Award className="w-6 h-6" /> Organizations & Awards</h2>
  <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900 space-y-4 transition-transform hover:scale-[1.01] hover:shadow-xl backdrop-blur-sm">
          <div>
            <span className="font-bold">Professional Brotherhood of Engineers</span>
            <div className="ml-2 mt-1">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="font-semibold">Public Relations Officer</div>
                  <span className="text-gray-500 font-normal">May 2023 – May 2024</span>
                </div>
                <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <li>Tracked and reported on fundraising progress, optimizing strategies to meet targets</li>
                </ul>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="font-semibold">Fundraising Officer</div>
                  <span className="text-gray-500 font-normal">May 2024 – December 2024</span>
                </div>
                <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <li>Organized and executed fundraising events, securing consistent funding streams</li>
                </ul>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="font-semibold">Career Chair</div>
                  <span className="text-gray-500 font-normal">May 2025 – Present</span>
                </div>
                <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Coordinated professional development workshops and networking events</li>
                  <li>Facilitated connections between members and industry professionals</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="font-bold">Society of Hispanic Professional Engineers</span>
            <span className="text-gray-500 font-normal">Aug 2023 – Present</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="font-bold">Boy Scouts of America - Eagle Scout</span>
            <span className="text-gray-500 font-normal">Oct 2021</span>
          </div>
          <div className="text-gray-700 dark:text-gray-300 text-sm ml-2">Achieved the highest rank, demonstrating leadership, commitment, and community service</div>
        </div>
  </section>
    </div>
  );
}
