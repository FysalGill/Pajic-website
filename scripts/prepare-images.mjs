import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const images = {
  network: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=90',
  office: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90',
  technology: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=90',
  space: 'https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&w=1600&q=90',
  satellite: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?auto=format&fit=crop&w=1600&q=90',
  datacenter: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=1600&q=90',
  cybersecurity: 'https://images.unsplash.com/photo-1563770660941-10a8c3d1c8a6?auto=format&fit=crop&w=1600&q=90',
  engineering: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=90',
  data: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=90',
  security: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=90',
  future: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2200&q=90'
}

const out = path.join(process.cwd(), 'public', 'images')
await fs.mkdir(out, { recursive: true })

for (const [name, url] of Object.entries(images)) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to download ${name}: ${res.status}`)
  const input = Buffer.from(await res.arrayBuffer())
  await sharp(input)
    .resize(1600, 900, { fit: 'cover', position: 'centre' })
    .grayscale()
    .tint('#d8be79')
    .modulate({ brightness: 0.78, saturation: 0.65 })
    .jpeg({ quality: 88, progressive: true })
    .toFile(path.join(out, `${name}.jpg`))
}

console.log(`Prepared ${Object.keys(images).length} PAJIC black/gold images at 1600x900.`)
