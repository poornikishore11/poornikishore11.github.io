import React from "react";
import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Zap,
  GitBranch,
  Github,
  Cloud,
  IterationCcw,
  Webhook,
  Figma,
  FileCode2,
  LineChart,
  Wind,
} from "lucide-react";

const skills = [
  { name: "HTML5", icon: Code2 },
  { name: "CSS3", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "React", icon: Atom },
  { name: "Angular", icon: Atom },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Next.JS", icon: Zap },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Git", icon: GitBranch },
  { name: "Github", icon: Github },
  { name: "Microsoft Azure", icon: Cloud },
  { name: "Scrum/Agile", icon: IterationCcw },
  { name: "Rest API", icon: Webhook },
  { name: "Figma", icon: Figma },
  { name: "HighCharts", icon: LineChart },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-12 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-dark/5 rounded-[3.5rem] p-10 md:p-16 lg:p-20 shadow-sm overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,rgba(241,192,151,0.15),transparent_40%)] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Story Side */}
            <div className="lg:w-7/12">
              <span className="text-primary text-[10px] uppercase tracking-[0.4em] mb-12 block font-black">
                About Me
              </span>
              <h2 className="text-4xl md:text-6xl text-dark font-medium font-display tracking-tighter leading-[1.05] mb-12">
                Elevating utility through{" "}
                <span className="italic text-primary/80">
                  strategic design
                </span>{" "}
                and precision code.
              </h2>
              <div className="space-y-8 text-secondary/70 font-medium text-lg md:text-xl leading-relaxed max-w-2xl">
                <p>
                  Frontend Developer with 7 years of experience
                  leading innovative projects in software
                  engineering, specializing in{" "}
                  <span className="text-dark">
                    HTML5, CSS3,JavaScript, and React
                  </span>
                  , with a strong focus on collaborative
                  problem-solving and driving impactful
                  improvements in web application accessibility
                  and performance.
                </p>
                <p>
                  With extensive experience across all phases of
                  the{" "}
                  <span className="text-dark">
                    Software Development Life Cycle (SDLC)
                  </span>
                  —from requirement analysis to deployment—I am
                  always eager to learn and adapt to new
                  technologies and challenges.
                </p>
              </div>
            </div>

            {/* Tech Stack Side */}
            <div className="lg:w-5/12">
              <div className="bg-dark rounded-[2.5rem] p-8 md:p-10 border border-white/5 h-full flex flex-col shadow-2xl shadow-dark/20 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16" />

                <div className="flex items-center justify-between mb-10 relative z-10">
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">
                    Tech Stack
                  </span>
                  <div className="h-px flex-1 bg-white/10 ml-6" />
                </div>

                <div className="flex flex-wrap gap-2.5 relative z-10">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <skill.icon size={16} />
                      </div>
                      <span className="text-white text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};