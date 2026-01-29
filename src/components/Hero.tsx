import React from "react";
import { motion } from "motion/react";
import {
  MapPin,
  ArrowUpRight,
  Circle,
  Github,
  Phone,
  Mail,
  Linkedin,
} from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-6 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 bg-white border border-dark/5 rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-between h-full shadow-sm"
        >
          <div>
            <div className="flex items-center gap-2 text-primary mb-12">
              <Circle className="w-2 h-2 fill-current animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold font-sans">
                Available for projects
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-dark font-semibold font-display tracking-tight leading-[0.95] mb-8">
              Poorni Kishore
              <br />
              <span className="text-primary">
                Front End Developer
              </span>
            </h1>
          </div>
          <p className="text-secondary/80 text-lg md:text-xl max-w-md font-medium font-sans leading-relaxed">
            Crafting precise digital experiences through
            meticulous design and strategic product thinking.
          </p>
        </motion.div>

        {/* Right Column Column */}
        <div className="grid grid-cols-1 gap-6">
          {/* Socials Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between text-white h-full min-h-[400px]"
          >
            <span className="text-accent/60 text-[10px] uppercase tracking-[0.25em] font-semibold font-sans">
              Connect
            </span>
            <div className="flex flex-col gap-2 mt-6">
              <a
                href="#contact"
                className="flex flex-col group py-3 border-b border-white/5 last:border-0"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-accent/60">
                    <Mail className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">
                      Email
                    </span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-base md:text-lg font-medium font-display group-hover:text-accent transition-colors break-all">
                  poornigopikrishnan@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/poornikishore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col group py-3 border-b border-white/5 last:border-0"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-accent/60">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">
                      LinkedIn
                    </span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-base md:text-lg font-medium font-display group-hover:text-accent transition-colors break-all">
                  linkedin.com/in/poornikishore
                </span>
              </a>

              <a
                href="https://github.com/poorani11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col group py-3 border-b border-white/5 last:border-0"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-accent/60">
                    <Github className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">
                      GitHub
                    </span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-base md:text-lg font-medium font-display group-hover:text-accent transition-colors break-all">
                  github.com/poorani11
                </span>
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-accent border border-dark/5 rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[144px]"
          >
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <p className="text-dark font-semibold text-lg">
                London, UK
              </p>
              <p className="text-primary font-bold text-[10px] uppercase tracking-widest">
                GMT +0:00
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};