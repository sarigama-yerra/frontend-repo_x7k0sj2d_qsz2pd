import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    title: 'Pursuing MCA (2025–Present)',
    inst: 'MET Bhujbal Knowledge City, Adgaon, Nashik',
    detail: 'Currently pursuing Master of Computer Applications.'
  },
  {
    title: 'B.Sc. in Computer Science (2025)',
    inst: 'HPT Arts and RYK Science College, Nashik',
    detail: 'First Class, CGPA 7.38.'
  },
  {
    title: 'HSC (2022)',
    inst: 'HPT Arts and RYK Science College, Nashik',
    detail: 'Scored 60%.'
  },
  {
    title: 'SSC (2020)',
    inst: 'St. Francis High School, Tidke Colony, Nashik',
    detail: 'Scored 79.80%.'
  }
]

export default function Education() {
  return (
    <section id="education" className="relative py-20 bg-slate-900">
      <div className="relative container mx-auto px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Education
        </motion.h2>

        <div className="space-y-4">
          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5"><GraduationCap className="w-5 h-5 text-emerald-400" /></div>
                <div>
                  <h3 className="text-white font-semibold">{e.title}</h3>
                  <p className="text-slate-300 text-sm">{e.inst}</p>
                  <p className="text-slate-400 text-sm mt-1">{e.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
