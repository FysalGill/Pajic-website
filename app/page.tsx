'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X, Plus } from 'lucide-react'

const thesis = [
  ['01','AI','Artificial Intelligence','AI platforms, agents, applied intelligence and intelligent software.'],
  ['02','SOFTWARE','Software & Platforms','Vertical software, developer tools, SaaS and digital platforms.'],
  ['03','DATA','Data & Intelligence','Data infrastructure, analytics, knowledge systems and decision intelligence.'],
  ['04','CYBER','Cybersecurity','Identity, cloud security, AI security and critical digital infrastructure.'],
  ['05','SPACE','Space & Connectivity','Satellite communications, Earth observation and next-generation connectivity.'],
  ['06','DEEPTECH','DeepTech & Infrastructure','Compute, data centres, robotics, energy and advanced technology.']
]

const map = [
  ['01','INTELLIGENCE','AI · Agents · Data · Software'],
  ['02','INFRASTRUCTURE','Compute · Data Centres · Cybersecurity'],
  ['03','CONNECTIVITY','Satellite · Telecom · Networks'],
  ['04','PHYSICAL SYSTEMS','Robotics · Energy · DeepTech']
]

const images = {
  network: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=90',
  office: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85',
  technology: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=90',
  space: 'https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&w=1500&q=90',
  satellite: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?auto=format&fit=crop&w=1500&q=90',
  datacenter: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=1500&q=90',
  cybersecurity: 'https://images.unsplash.com/photo-1563770660941-10a8c3d1c8a6?auto=format&fit=crop&w=1200&q=90',
  engineering: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=90',
  data: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500&q=80',
  security: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85',
  future: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2200&q=90'
}

export default function Page() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold: .12 })
    els.forEach(e => observer.observe(e))
    const links = ['about','thesis','lab','portfolio','intelligence','press','contact']
    const onScroll = () => {
      let current = ''
      for (const id of links) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop - 180) current = id
      }
      setActive(current)
    }
    addEventListener('scroll', onScroll)
    onScroll()
    return () => { observer.disconnect(); removeEventListener('scroll', onScroll) }
  }, [])

  const nav = (id: string) => <a className={active === id ? 'active' : ''} href={'#' + id} onClick={() => setOpen(false)}>{id === 'thesis' ? 'Investment' : id[0].toUpperCase() + id.slice(1)}</a>

  return <>
    <header><div className="nav">
      <a className="brand" href="#top">PAJIC<span>.</span><small>HOLDING · TECHNOLOGY · VENTURES</small></a>
      <nav className={open ? 'open' : ''}>{['about','thesis','lab','portfolio','intelligence','press'].map(id => nav(id))}</nav>
      <a className="navcta" href="#contact">CONTACT <ArrowUpRight size={14}/></a>
      <button className="menub" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div></header>

    <main id="top">
      <section className="hero">
        <div className="heroGlow"/>
        <div className="wrap heroIn reveal"><div className="eyebrow">TECHNOLOGY INVESTMENT · VENTURE BUILDING · EMERGING MARKETS</div><h1>We invest in<br/><em>what comes next.</em></h1><p>PAJIC is a technology investment and venture-building platform focused on AI, software, data, cybersecurity, space, connectivity and DeepTech.</p><div className="actions"><a className="gold" href="#thesis">OUR INVESTMENT THESIS <ArrowUpRight/></a><a className="ghost" href="#contact">WORK WITH PAJIC</a></div></div>
        <div className="heroMeta">01 — 07 <span>TECHNOLOGY · CAPITAL · EXECUTION</span></div>
      </section>

      <section id="about" className="wrap section reveal">
        <div className="split"><div><div className="eyebrow">01 / ABOUT PAJIC</div><h2>Technology is changing the map.</h2></div><p>We back technologies with the potential to reshape industries, create new markets and build durable advantage. Our perspective combines deep technology understanding with an emerging-market lens.</p></div>
        <div className="imageStrip">
          <div><img className="wide" src={images.office} alt="Technology and capital"/><div className="imageCaption">Technology & Capital</div></div>
          <div><img src={images.technology} alt="Technology"/><div className="imageCaption">Technology</div></div>
          <div><img src={images.space} alt="Space technology"/><div className="imageCaption">Space & Connectivity</div></div>
        </div>
      </section>

      <section id="thesis" className="dark section"><div className="wrap reveal"><div className="split"><div><div className="eyebrow">02 / INVESTMENT THESIS</div><h2>Structural advantage.</h2></div><p>Our focus spans the technology stack — from intelligent software and data to the infrastructure that powers the digital economy.</p></div><div className="cards">{thesis.map(([n,k,t,d]) => <article key={n} className="card"><span>{n} / {k}</span><h3>{t}</h3><p>{d}</p><Plus className="plus" size={18}/></article>)}</div></div></section>

      <section className="feature"><div className="featureImg"><img src={images.satellite} alt="Satellite and connectivity"/></div><div className="featureCopy reveal"><div className="eyebrow">03 / CONNECTIVITY</div><h2>From infrastructure beneath us to networks above us.</h2><p className="quote">The next technology cycle will be built across physical and digital infrastructure.</p><p>Satellite · Telecom · Infrastructure</p></div></section>

      <section id="lab" className="lab section"><div className="wrap reveal"><div className="labGrid"><div className="labPhoto"><img src={images.technology} alt="AI Lab technology"/><div className="labBadge">PAJIC AI LAB</div></div><div><div className="eyebrow">04 / PAJIC AI LAB</div><h2>From opportunity<br/>to company.</h2><p>PAJIC AI Lab identifies high-potential AI opportunities and helps turn them into companies through pre-seed investment, technology strategy and venture building.</p><div className="tags"><span>AI</span><span>AGENTS</span><span>DATA</span><span>PAKISTAN</span></div></div></div></div></section>

      <section className="dark section"><div className="wrap reveal"><div className="split"><div><div className="eyebrow">05 / PAJIC TECHNOLOGY MAP</div><h2>The layers shaping the future.</h2></div><p>A focused view across the systems where PAJIC sees structural opportunity.</p></div><div className="map">{map.map(([n,t,d]) => <div className="mapCard" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div><div className="mosaic"><img src={images.datacenter} alt="Data centre"/><div className="mosaicSide"><img src={images.cybersecurity} alt="Cybersecurity technology"/><img src={images.engineering} alt="Advanced engineering"/></div></div></div></section>

      <section id="portfolio" className="section"><div className="wrap reveal"><div className="split"><div><div className="eyebrow">06 / PORTFOLIO</div><h2>Building the next generation.</h2></div><p>A focused portfolio across AI, software, data, space and DeepTech.</p></div><div className="portfolio">
        <article className="portfolioImage"><img src={images.data} alt="AI data visualization"/><div className="portfolioOverlay"/><div className="portfolioContent"><span>AI PLATFORM · PAKISTAN</span><h3>PakAI</h3><p>Democratizing intelligence for Pakistan.</p></div><ArrowUpRight/></article>
        <article><span>VENTURE BUILDING</span><h3>PAJIC<br/>AI Lab</h3><p>Pre-seed AI ventures and company creation.</p><ArrowUpRight/></article>
        <article><span>FUTURE INVESTMENTS</span><h3>Next.</h3><p>AI · Software · Data · Space · DeepTech</p><ArrowUpRight/></article>
      </div></div></section>

      <section id="intelligence" className="dark section"><div className="wrap reveal"><div className="split"><div><div className="eyebrow">07 / PAJIC INTELLIGENCE</div><h2>We study where technology is going.</h2></div><p>Research and perspectives across technology, markets, infrastructure and the forces reshaping emerging economies.</p></div><div className="insights">
        <article className="article"><img src={images.security} alt="Cybersecurity"/><div className="articleBody"><small>AI & SECURITY</small><h3>The new architecture of intelligent systems.</h3><p>How AI changes software, infrastructure and the security perimeter.</p></div></article>
        <article className="article"><img src={images.technology} alt="Compute infrastructure"/><div className="articleBody"><small>INFRASTRUCTURE</small><h3>Compute is becoming strategic infrastructure.</h3><p>Why the physical layer matters as intelligence scales.</p></div></article>
        <article className="article"><img src={images.network} alt="Digital networks"/><div className="articleBody"><small>EMERGING MARKETS</small><h3>Technology is changing the map.</h3><p>Where new technology ecosystems and markets are taking shape.</p></div></article>
      </div></div></section>

      <section id="press" className="press section"><div className="wrap reveal"><div className="eyebrow">PRESS</div><h2>PAJIC in the news.</h2><article className="pressCard"><div><span>PAJIC AI LAB · 2026</span><h3>PAJIC AI Lab Pre-Seeds Two AI Startups to Democratize AI Access in Pakistan</h3></div><ArrowUpRight/></article></div></section>

      <section id="contact" className="contact section"><div className="contactVisual"><img src={images.future} alt="PAJIC technology and emerging markets"/></div><div className="contactShade"/><div className="wrap reveal"><div className="eyebrow">CONTACT PAJIC</div><div className="contactGrid"><div><h2>Let's work<br/><em>together.</em></h2><p>Technology founders, investors, strategic partners and emerging-market opportunities.</p></div><div className="details"><div><small>ADDRESS</small><p>PAJIC Tower, Ph7, Bahria Town,<br/>Islamabad 44000, Pakistan</p></div><div><small>EMAIL</small><p><a href="mailto:contact@pajic.ltd">contact@pajic.ltd</a></p></div><div><small>PHONE</small><p><a href="tel:+923378000008">+92 337 8000008</a></p></div></div></div></div></section>
    </main>
    <footer><div className="wrap foot"><span>© 2026 PAJIC Holding Ltd. All rights reserved.</span><span>ISLAMABAD · PAKISTAN · EMERGING MARKETS / GLOBAL</span></div></footer>
  </>
}
