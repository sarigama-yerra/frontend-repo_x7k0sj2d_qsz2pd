import { motion } from 'framer-motion'
import { Brain, Code2, Database, BarChart3, LineChart, Globe } from 'lucide-react'

const skills = [
  { icon: Brain, label: 'AI' },
  { icon: Code2, label: 'Python' },
  { icon: BarChart3, label: 'Data Science' },
  { icon: LineChart, label: 'Visualization' },
  { icon: Database, label: 'SQL' },
  { icon: Globe, label: 'Web Dev' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06),transparent_60%)]" />
      <div className="relative container mx-auto px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-medium">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
