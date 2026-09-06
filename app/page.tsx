'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Copy,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  MoreHorizontal,
  Pencil,
  Phone,
} from 'lucide-react'

const contactItems = [
  { icon: Mail, label: 'Email', value: 'alex.morgan@example.com', href: 'mailto:alex.morgan@example.com' },
  { icon: Phone, label: 'Phone', value: '+1 (415) 555-0184', href: 'tel:+14155550184' },
  { icon: Globe2, label: 'Website', value: 'alexmorgan.design', href: 'https://alexmorgan.design' },
]

export default function Page() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText('alex.morgan@example.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#1d1d1b]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#profile" className="flex items-center gap-2 text-sm font-semibold tracking-tight" aria-label="Northstar home">
          <span className="flex size-8 items-center justify-center rounded-full bg-[#1d1d1b] text-sm text-white">N</span>
          northstar
        </a>
        <div className="flex items-center gap-3">
          <button type="button" className="hidden rounded-full px-4 py-2 text-sm font-medium text-[#676762] transition hover:bg-white hover:text-[#1d1d1b] sm:block">Directory</button>
          <button type="button" className="flex items-center gap-2 rounded-full border border-[#deded8] bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:border-[#b9b9b0]">
            <Pencil className="size-3.5" aria-hidden="true" /> Edit profile
          </button>
        </div>
      </header>

      <section id="profile" className="mx-auto max-w-6xl px-6 pb-20 pt-10 lg:px-10 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-24">
          <div>
            <div className="flex flex-col gap-7 sm:flex-row sm:items-end">
              <div className="relative shrink-0">
                <img src="/placeholder-user.jpg" alt="Portrait of Alex Morgan" className="size-32 rounded-[2rem] object-cover grayscale sm:size-40" />
                <span className="absolute -bottom-2 -right-2 flex size-8 items-center justify-center rounded-full border-4 border-[#f7f7f5] bg-[#b6d96c]" aria-label="Available for work" />
              </div>
              <div className="pb-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a83]">Product &amp; brand designer</p>
                <h1 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">Alex Morgan</h1>
              </div>
            </div>

            <div className="mt-12 max-w-2xl">
              <p className="text-xl leading-relaxed tracking-[-0.02em] text-[#4e4e49] sm:text-2xl">I help ambitious teams turn complex ideas into clear, useful, and memorable products.</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#777770]">
                <span className="inline-flex items-center gap-2"><MapPin className="size-4" aria-hidden="true" /> San Francisco, CA</span>
                <span className="inline-flex items-center gap-2"><BriefcaseBusiness className="size-4" aria-hidden="true" /> Independent designer</span>
              </div>
            </div>

            <div className="mt-14 border-t border-[#deded8] pt-7">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a8a83]">About</h2>
                <button type="button" aria-label="More profile options" className="rounded-full p-2 text-[#8a8a83] transition hover:bg-white hover:text-[#1d1d1b]"><MoreHorizontal className="size-5" /></button>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5e5e58]">With over a decade of experience across startups and global teams, I bring strategy, systems thinking, and craft to every project. Currently exploring thoughtful ways technology can make everyday work feel a little more human.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['Product strategy', 'Brand systems', 'UX design', 'Design leadership'].map((tag) => <span key={tag} className="rounded-full bg-[#e9e9e3] px-3.5 py-2 text-xs font-medium text-[#5e5e58]">{tag}</span>)}
              </div>
            </div>
          </div>

          <aside className="lg:pt-1">
            <div className="rounded-[1.5rem] bg-[#e9e9e3] p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold">Contact information</h2>
                <span className="rounded-full bg-[#f7f7f5] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8a8a83]">Public</span>
              </div>
              <div className="mt-6 space-y-5">
                {contactItems.map(({ icon: Icon, label, value, href }) => <a key={label} href={href} className="group flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#f7f7f5] text-[#676762]"><Icon className="size-4" /></span><span><span className="block text-xs text-[#8a8a83]">{label}</span><span className="mt-1 block text-sm font-medium underline decoration-[#c8c8c0] underline-offset-4 transition group-hover:decoration-[#1d1d1b]">{value}</span></span></a>)}
              </div>
              <button type="button" onClick={copyEmail} className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1d1d1b] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#3c3c38]">{copied ? <Check className="size-4" /> : <Copy className="size-4" />} {copied ? 'Email copied' : 'Copy email address'}</button>
            </div>
            <a href="#work" className="mt-4 flex items-center justify-between rounded-[1.5rem] border border-[#deded8] bg-white p-6 transition hover:border-[#b9b9b0]"><span><span className="block text-xs text-[#8a8a83]">Selected work</span><span className="mt-1 block text-sm font-semibold">View Alex&apos;s portfolio</span></span><ArrowUpRight className="size-5 text-[#676762]" /></a>
            <p className="mt-8 flex items-center gap-2 px-1 text-xs text-[#8a8a83]"><span className="size-1.5 rounded-full bg-[#b6d96c]" /> Usually responds within a day</p>
          </aside>
        </div>
      </section>
      <footer className="mx-auto flex max-w-6xl items-center justify-between border-t border-[#deded8] px-6 py-6 text-xs text-[#8a8a83] lg:px-10"><span>© 2025 Northstar</span><a href="#profile" className="flex items-center gap-1 transition hover:text-[#1d1d1b]">Share profile <ExternalLink className="size-3" /></a></footer>
    </main>
  )
}
