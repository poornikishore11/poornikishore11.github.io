import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

interface CareerItem {
  company: string;
  role: string;
  period: string;
  workItems: string[];
  color: string;
}

const careerPath: CareerItem[] = [
  {
    company: "Neo Technology",
    role: "Frontend Engineer",
    period: "2026 — Present",
    workItems: [
      "Optimized Next.js build times by 15% across large-scale enterprise monorepos.",
      "Implemented advanced edge middleware patterns for dynamic content localization.",
      "Spearheaded the migration of legacy design system components to Tailwind CSS v4."
    ],
    color: "bg-primary"
  },
    {
    company: "Career Break",
    role: "",
    period: "2022 — 2025",
    workItems: [
      "I have taken a career break over the past three years due to the relocation process from India to the UK following my wedding. Additionally, between 2023 and June 2025, I was advised to refrain from work due to health reasons. I am now fully fit and ready to resume my professional career.",
    ],
    color: "bg-secondary"
  },
  {
    company: "Unify",
    role: "Senior Software Developer",
    period: "2022 — 2024",
    workItems: [
      "Led the frontend development team on key projects to contribute to the success of the company as well as enhancing governance and security capabilities",
      "Contributed as a key member of the internal team in the development of Rufous,HR management tool designed for efficient employee management within the company.",
      "Sole responsibility for the development of a File Integrity Monitoring tool for Windows, utilizing React as the primary front-end technology to bolster governance and security"
    ],
    color: "bg-primary"
  },
  {
    company: "Pick My Solar",
    role: "Front End Developer",
    period: "2018 — 2020",
    workItems: [
      " As a member of a duo front-end team, I played a significant role in successfully mirroring all features of PickMySolar.com onto Solar.com,utilizing Angular.",
      "Contributed to the development of a bids page, enabling customers to view a variety of solar panelling options along with compatible batteries for their properties",
      "Constructed an Incentive Dashboard using Metronic and Angular, showcasing the various incentives offered by different solar panel companies in their specific regions."
    ],
    color: "bg-dark"
  },
  {
    company: "Peel Inc",
    role: "UI Engineer",
    period: "2016 — 2018",
    workItems: [
      "Developed front-end features enhancing user engagement and functionality.",
      "Implemented app rating on Google Store for improved feedback collection",
      "Created Android testing feature ensuring reliable media-renderer performance.."
    ],
    color: "bg-primary"
  },
  {
    company: "Xamcheck",
    role: "Software Developer",
    period: "2015 — 2016",
    workItems: [
      "Automated report cards using Python, boosting efficiency and accuracy",
      "Digitized textbooks to enhance accessibility and learning outcomes",
      "Collaborated on edu-tech projects, leading digital transformation.",
      "Streamlined educational content with Python, optimizing processes"
    ],
    color: "bg-dark"
  }
];

export const Career = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div>
          <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-extrabold mb-4 block">Professional History</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-dark font-medium font-display tracking-tighter leading-none">
            Work<br/><span className="italic">Experience</span>
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:items-end">
          <p className="text-secondary/60 font-medium max-w-xs text-lg leading-snug text-left md:text-right">
            A decade of building products at the intersection of design and engineering.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {careerPath.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative bg-white border border-dark/5 rounded-[3.5rem] p-10 md:p-14 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col overflow-hidden"
          >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-64 h-64 ${item.color}/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000`} />
            
            <div className="flex justify-between items-start mb-16 relative z-10">
              <div className={`w-20 h-20 ${item.color} rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-dark/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                <Briefcase className="w-10 h-10" />
              </div>
              <div className="px-6 py-3 bg-accent/30 rounded-full border border-dark/5 backdrop-blur-sm">
                <span className="text-dark text-[10px] uppercase font-black tracking-[0.2em]">{item.period}</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-10">
                <h3 className="text-4xl md:text-5xl text-dark font-medium font-display tracking-tighter mb-3 leading-none">{item.company}</h3>
                <p className="text-primary text-sm font-black uppercase tracking-[0.3em]">{item.role}</p>
              </div>

              <div className="space-y-6">
                <p className="text-dark/40 text-[10px] uppercase tracking-[0.4em] font-black">Key Contributions</p>
                <ul className="grid grid-cols-1 gap-4">
                  {item.workItems.map((work, idx) => (
                    <li key={idx} className="flex gap-4 text-secondary/50 text-base font-medium leading-snug group-hover:text-secondary/70 transition-colors">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0 group-hover:bg-primary transition-colors" />
                      {work}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
