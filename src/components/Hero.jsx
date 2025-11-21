import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowDown, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-950" />

      <div className="relative z-10 container mx-auto px-6 sm:px-10 pt-28 pb-16 flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-400/20 backdrop-blur"
        >
          Portfolio • Interactive • Modern
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Roshan Yadav
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-slate-200"
        >
          Python • Data Science • Visualization • AI • SQL • Web Dev
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex items-center gap-3"
        >
          <a
            href="#projects"
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transition"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/roshan-yadav-a9971a2b3"
            target="_blank" rel="noreferrer"
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/RoshanYD"
            target="_blank" rel="noreferrer"
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
