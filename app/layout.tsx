import './globals.css'
import './pajic-refinements.css'
import './pajic-type-system.css'
import './hide-holding.css'
import './contact-refinement.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'PAJIC Holding — Technology Investment & Venture Building',description:'PAJIC invests in and builds the technologies shaping tomorrow.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}