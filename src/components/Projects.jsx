import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Campfly Sales Analysis',
    desc: 'An end-to-end data analytics dashboard exploring sales performance, revenue trends, and customer insights using interactive charts and filters. Focus on actionable KPIs and storytelling through data.',
    live: 'https://camply-sales-analysis.netlify.app/',
    code: 'https://github.com/RoshanYd/campfly-sales-analysis-dashboard',
    tags: ['Data Analytics', 'Dashboard', 'Visualization']
  },
  {
    title: 'ARcricinfo Web App',
    desc: 'A modern cricket info experience with clean UI and responsive design. Built to explore match data, player stats and news with smooth interactions.',
    live: 'https://arcricinfo1.netlify.app/',
    code: 'https://github.com/RoshanYd/ARcricinfo',
    tags: ['Web App', 'UI/UX', 'Responsive']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />
              <h3 className="text-white text-xl font-semibold">{p.title}</h3>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-1 rounded-full text-xs bg-white/10 text-slate-200 border border-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-slate-900 font-semibold">
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
                <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/15">
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
