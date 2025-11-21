import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10">
      <div className="container mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Roshan Yadav. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/roshan-yadav-a9971a2b3" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/15">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="https://github.com/RoshanYD" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/15">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
