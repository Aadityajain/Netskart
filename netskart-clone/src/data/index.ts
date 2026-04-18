export type CategoryKey =
  | 'bird-net'
  | 'sports-net'
  | 'safety-net'
  | 'shade-net'
  | 'spike'
  | 'monkey-net'
  | 'ropes-accessories'

export interface ProductItem {
  id: string
  slug: string
  name: string
  category: CategoryKey
  brand: 'ProNet' | 'Garware'
  price: number
  originalPrice: number
  description: string
  heading?: string
  sizes?: string[]
  colorOptions?: string[]
  features: string[]
  badge: string
  unit: string
  rating: number
  reviews: number
}

export interface CategoryMeta {
  key: CategoryKey
  label: string
  blurb: string
  accent: string
}

export const CATEGORY_META: CategoryMeta[] = [
  { key: 'bird-net', label: 'Bird Net', blurb: 'Balcony-ready pigeon and sparrow protection nets with multiple mesh options.', accent: 'from-amber-500 to-orange-600' },
  { key: 'sports-net', label: 'Sports Net', blurb: 'Cricket, basketball, volleyball, tennis, soccer and other performance nets.', accent: 'from-blue-600 to-indigo-700' },
  { key: 'safety-net', label: 'Safety Net', blurb: 'Construction and fall-protection solutions for homes, sites and open areas.', accent: 'from-emerald-500 to-green-700' },
  { key: 'shade-net', label: 'Shade Net', blurb: 'Agro and green shade nets for sunlight control, nurseries and terraces.', accent: 'from-lime-500 to-emerald-700' },
  { key: 'spike', label: 'Spike', blurb: 'Bird and monkey deterrent spikes designed for humane protection.', accent: 'from-slate-500 to-slate-700' },
  { key: 'monkey-net', label: 'Monkey Net', blurb: 'Heavy-duty anti-monkey nets for balconies, roofs and exposed openings.', accent: 'from-stone-500 to-orange-700' },
  { key: 'ropes-accessories', label: 'Ropes & Accessories', blurb: 'Support hardware and rope essentials used with premium net installations.', accent: 'from-zinc-500 to-gray-700' },
]

export const PRODUCTS: ProductItem[] = [
  { id: 'pronet-nylon-pigeon-net-25mm', slug: 'pronet-nylon-pigeon-net-25mm', name: 'ProNet® Nylon Bird Net / Pigeon Net for Balcony, Anti Bird Net, Balcony Bird Net 25 MM Mesh with Border', category: 'bird-net', brand: 'ProNet', price: 7500, originalPrice: 8200, description: 'ProNet® Nylon Bird Net is designed to keep pigeons and similar birds away from balconies and open spaces so the area stays clean and peaceful.', heading: 'Our Goal Is Your Solution to Keeping Birds Away from Your Balcony.', sizes: ['06 x 06', '06 x 12', '08 x 15', '10 x 10', '10 x 20', '10 x 50'], colorOptions: ['Black'], features: ['25 MM mesh', 'Balcony-safe', 'DIY friendly', 'Bird-safe solution'], badge: 'Premium Nylon', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-bird-net-hdpe-50-mm', slug: 'garware-bird-net-hdpe-50-mm', name: 'Garware HDPE Bird Net, Pigeon Net for Balcony, Pigeon Net, Balcony Bird Net 50 MM Mesh with Border', category: 'bird-net', brand: 'Garware', price: 2800, originalPrice: 3400, description: 'Garware Bird Net helps keep spaces clean and bird-free while allowing humane protection for larger open areas with a 50 MM mesh.', heading: 'Welcome to Garware Birds Nets — keep your spaces clean and bird-free.', sizes: ['06 x 06', '06 x 12', '08 x 15', '10 x 10', '10 x 20', '10 x 50'], colorOptions: ['Black'], features: ['50 MM mesh', 'HDPE build', 'Border included', 'Balcony use'], badge: 'Value Pick', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'pronet-nylon-bird-net-32-mm', slug: 'pronet-nylon-bird-net-32-mm', name: 'ProNet® Nylon Bird Net / Pigeon Net for Balcony, Anti Bird Net, Balcony Bird Net 32 MM Mesh with Border', category: 'bird-net', brand: 'ProNet', price: 7150, originalPrice: 7850, description: 'A ProNet® nylon bird net for balconies that helps keep unwanted birds away while preserving airflow and a clean look.', heading: 'Keep Your Balcony Clean and Free from Birds with ProNet® Nylon Bird Net.', sizes: ['06 x 06', '06 x 12', '08 x 15', '10 x 10', '10 x 20'], colorOptions: ['Black'], features: ['32 MM mesh', 'Custom size ready', 'Peaceful balcony', 'Nylon strength'], badge: 'Best Seller', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-bird-net-hdpe-35-mm', slug: 'garware-bird-net-hdpe-35-mm', name: 'Garware HDPE Bird Net, Pigeon Net for Balcony, Pigeon Net, Balcony Bird Net 35 MM Mesh with Border', category: 'bird-net', brand: 'Garware', price: 3400, originalPrice: 4100, description: 'Garware HDPE bird net made to solve bird problems across balconies and larger areas while staying durable in outdoor conditions.', heading: 'Garware Bird Nets for keeping birds away from home and large spaces.', sizes: ['06 x 06', '06 x 12', '08 x 15', '10 x 10', '10 x 20', '10 x 50'], colorOptions: ['Black'], features: ['35 MM mesh', 'HDPE material', 'Outdoor-ready', 'Border rope'], badge: 'HDPE Option', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-bird-sparrow-net-19-mm', slug: 'garware-bird-sparrow-net-19-mm', name: 'Garware HDPE Bird Net, Sparrow Net, Balcony Bird Net 19 MM Mesh with Border', category: 'bird-net', brand: 'Garware', price: 8500, originalPrice: 9300, description: 'A tighter 19 MM mesh Garware bird net designed for sparrow and small-bird control in balconies and sensitive openings.', heading: 'Keeping your spaces bird-free and happy with Garware Bird Nets.', sizes: ['06 x 06', '06 x 12', '08 x 15', '10 x 10', '10 x 20', '10 x 50'], colorOptions: ['White'], features: ['19 MM mesh', 'Small bird control', 'HDPE durability', 'Border included'], badge: 'Fine Mesh', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-bird-net-hdpe-25-mm', slug: 'garware-bird-net-hdpe-25-mm', name: 'Garware HDPE Bird Net, Pigeon Net for Balcony, Pigeon Net, Balcony Bird Net 25 MM Mesh with Border', category: 'bird-net', brand: 'Garware', price: 4500, originalPrice: 5200, description: 'Garware’s 25 MM mesh balcony bird net offers a balanced option for pigeon protection and daily outdoor use.', heading: 'A 25 MM mesh Garware solution for everyday balcony bird control.', sizes: ['06 x 06', '06 x 12', '08 x 15', '10 x 10', '10 x 20', '10 x 50'], colorOptions: ['White'], features: ['25 MM mesh', 'Pigeon control', 'HDPE build', 'Border rope'], badge: 'Popular', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'pronet-hdpe-bird-net', slug: 'pronet-hdpe-bird-net', name: 'ProNet® HDPE Bird Net, Pigeon Net for Balcony, Pigeon Net, Balcony Bird Net 25 MM Mesh with Border', category: 'bird-net', brand: 'ProNet', price: 2800, originalPrice: 3400, description: 'ProNet® HDPE bird net made to keep balconies and larger openings free from pigeons without harming birds.', heading: 'A safe ProNet® solution to keep birds away with 25 MM mesh protection.', sizes: ['06 x 06', '06 x 12', '08 x 15', '10 x 10', '10 x 20'], colorOptions: ['Black'], features: ['25 MM mesh', 'HDPE material', 'Bird-safe', 'Balcony ready'], badge: 'Factory Direct', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-sportiva-basketball-net', slug: 'garware-sportiva-basketball-net', name: 'Garware Sportiva® Basketball Net (Per Pair)', category: 'sports-net', brand: 'Garware', price: 400, originalPrice: 520, description: 'Premium basketball nets built with durable materials, strong shock resistance and a standard fit for regular and professional play.', heading: 'High-quality basketball nets India.', sizes: ['Standard'], colorOptions: ['White'], features: ['Per pair', 'HDPE twine', 'Shock resistant', 'Standard rim fit'], badge: 'Court Essential', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-sportiva-volley-ball-net', slug: 'garware-sportiva-volley-ball-net', name: 'Garware Sportiva® Volley Ball Net', category: 'sports-net', brand: 'Garware', price: 3785, originalPrice: 4390, description: 'A durable volleyball net designed for regular and professional use, easy to fix and made for long service life.', heading: 'Durable and high-quality nets for all your volleyball needs.', sizes: ['10 X 1'], colorOptions: ['Black'], features: ['10 x 1', 'Tournament-ready', 'Long lasting', 'Easy setup'], badge: 'Tournament Ready', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'pickle-ball-net', slug: 'pickle-ball-net', name: 'Garware Sportiva® Pickle Ball Net', category: 'sports-net', brand: 'Garware', price: 4061, originalPrice: 4690, description: 'Sportiva pickleball net made for recreational and professional play with sturdy construction and performance-led materials.', heading: 'Crafted for durability and performance.', sizes: ['22 X 3'], colorOptions: ['Black'], features: ['22 x 3', 'Pickleball-specific', 'Strong frame fit', 'Performance grade'], badge: 'New Demand', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-sportiva-hockey-net', slug: 'garware-sportiva-hockey-net', name: 'Garware Sportiva® Hockey Net Black (Per Pair)', category: 'sports-net', brand: 'Garware', price: 9180, originalPrice: 10100, description: 'High-performance hockey nets built with superior workmanship for professional fields and serious training setups.', heading: 'High-quality hockey nets India.', sizes: ['Per Pair'], colorOptions: ['Black'], features: ['Per pair', 'Professional use', 'Heavy duty', 'Field-ready'], badge: 'Pro Grade', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-tennis-net', slug: 'garware-tennis-net', name: 'Garware Sportiva® Tennis Net', category: 'sports-net', brand: 'Garware', price: 8510, originalPrice: 9300, description: 'Premium tennis net engineered for durability, reliable play and court-side longevity for both amateur and professional setups.', heading: 'Premium quality and durability for every court.', sizes: ['Standard'], colorOptions: ['Black'], features: ['Court standard', 'Durable build', 'Sportiva range', 'Long-life tension'], badge: 'Premium Court', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-sportiva-soccer-net', slug: 'garware-sportiva-soccer-net', name: 'Garware Sportiva® Soccer Net (Per Pair)', category: 'sports-net', brand: 'Garware', price: 7275, originalPrice: 8050, description: 'Quality football nets suitable for trainers, players and sports centres, designed to handle regular use across India.', heading: 'Premium quality for professional football performance.', sizes: ['Per Pair'], colorOptions: ['White'], features: ['Per pair', 'Football ready', 'Training use', 'Strong mesh'], badge: 'Match Ready', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-badminton-net', slug: 'garware-badminton-net', name: 'Garware Sportiva® Badminton Net', category: 'sports-net', brand: 'Garware', price: 680, originalPrice: 790, description: 'Badminton net offering an effective mix of durability, user friendliness and standards-based play for clubs and home courts.', heading: 'High-quality, durable and easy to install.', sizes: ['Standard'], colorOptions: ['Brown'], features: ['Easy install', 'Club use', 'Standards based', 'Durable build'], badge: 'Fast Mover', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'cricket-net-braided-2mm-thickness', slug: 'cricket-net-braided-2mm-thickness', name: 'ProNet® HDPE Virgin Cricket Net Braided 2.0 MM Thickness / 50 MM Mesh Size With Border Rope', category: 'sports-net', brand: 'ProNet', price: 8700, originalPrice: 9600, description: 'A premium HDPE cricket net built for batting and bowling practice, safe ball retention and dependable outdoor use.', heading: 'Enjoy premium quality cricket net from the renowned brand ProNet.', sizes: ['Practice lane'], colorOptions: ['Green'], features: ['2.0 MM thickness', '50 MM mesh', 'Border rope', 'Indoor/outdoor use'], badge: 'Cricket Pro', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'pronet-construction-safety-net-50mm', slug: 'pronet-construction-safety-net-50mm', name: 'Pronet Safety Net Green 2.5 MM Thickness With 50 MM Hole, Construction Safety Net, Construction Net', category: 'safety-net', brand: 'ProNet', price: 5250, originalPrice: 5900, description: 'A construction safety net meant to stop falling objects and improve safety across elevated work sites and exposed areas.', heading: 'A special net that helps stop things from falling at building sites.', sizes: ['Custom by area'], colorOptions: ['Green'], features: ['2.5 MM thickness', '50 MM hole', 'Construction grade', 'Safety focused'], badge: 'Site Safety', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'pronet-green-shade-net-90', slug: 'pronet-green-shade-net-90', name: 'ProNet® Green Shade Net / Agro Net / Green Net 90% with Border and Eyelets', category: 'shade-net', brand: 'ProNet', price: 1920, originalPrice: 2280, description: 'A 90% shade green agro net created to protect plants and outdoor spaces from harsh sun while staying easy to install.', heading: 'Perfect for keeping outdoor places cool and protected from too much sun.', sizes: ['Standard with eyelets'], colorOptions: ['Green'], features: ['90% shade', 'Border & eyelets', 'Agro use', 'Outdoor cooling'], badge: 'Agro Net', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'pronet-bird-spikes-transparent-3-row', slug: 'pronet-bird-spikes-transparent-3-row', name: 'ProNet® Bird Spikes Pigeon Control Spikes, Polycarbonate Transparent 3 Row', category: 'spike', brand: 'ProNet', price: 2250, originalPrice: 2640, description: 'Transparent 3-row bird spikes designed to stop pigeons from landing while blending into balconies, ledges and rooftops.', heading: 'Keep your property clean and safe with transparent bird spikes.', sizes: ['3 Row'], colorOptions: ['Transparent'], features: ['Polycarbonate', 'UV resistant', '3 row', 'Low maintenance'], badge: 'Humane Deterrent', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-monkey-net-2-5mm-50mm', slug: 'garware-monkey-net-2-5mm-50mm', name: 'Garware Monkey Net / Monkey Net for Balcony / Monkey Safety Net 2.5 MM Thickness With 50 MM Mesh with Border', category: 'monkey-net', brand: 'Garware', price: 5250, originalPrice: 5950, description: 'A strong HDPE monkey net meant for balconies, roofs and gardens where humane monkey protection is required.', heading: 'Keep monkeys away from balconies and roofs without hurting them.', sizes: ['Custom by area'], colorOptions: ['Green'], features: ['2.5 MM thickness', '50 MM mesh', 'HDPE build', 'Outdoor durable'], badge: 'Heavy Duty', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-ropes-thick-hdpe', slug: 'garware-ropes-thick-hdpe', name: 'Garware Ropes Thick (HDPE)', category: 'ropes-accessories', brand: 'Garware', price: 5900, originalPrice: 6600, description: 'Premium quality thick Garware rope for versatile support and installation use across netting applications.', heading: 'Premium quality rope for versatile use.', sizes: ['50', '100', '220'], colorOptions: ['Dark Green'], features: ['HDPE rope', 'Thick grade', 'Support accessory', 'Versatile use'], badge: 'Accessory', unit: 'Starting price', rating: 4.8, reviews: 12 },
  { id: 'garware-ropes-hdpe', slug: 'garware-ropes-hdpe', name: 'Garware Ropes (HDPE)', category: 'ropes-accessories', brand: 'Garware', price: 850, originalPrice: 980, description: 'Standard Garware HDPE rope suitable for net support, tying and accessory use in installations.', heading: 'Premium quality rope for versatile support jobs.', sizes: ['Standard'], colorOptions: ['Dark Green'], features: ['HDPE rope', 'Installation support', 'Accessory line', 'Utility use'], badge: 'Utility', unit: 'Starting price', rating: 4.8, reviews: 12 },
]

export const FEATURED_PRODUCT_SLUGS = ['pronet-hdpe-bird-net', 'cricket-net-braided-2mm-thickness', 'pronet-construction-safety-net-50mm', 'pronet-green-shade-net-90', 'pronet-bird-spikes-transparent-3-row', 'garware-ropes-thick-hdpe']
export const FEATURED_PRODUCTS = FEATURED_PRODUCT_SLUGS.map((slug) => PRODUCTS.find((product) => product.slug === slug)!)

export const PROBLEMS = [
  { icon: '🐦', title: 'Pigeons on balcony', product: 'Bird Net', href: '/products/pronet-hdpe-bird-net' },
  { icon: '🏏', title: 'Cricket practice setup', product: 'Cricket Net', href: '/products/cricket-net-braided-2mm-thickness' },
  { icon: '🏗️', title: 'Construction safety', product: 'Safety Net', href: '/products/pronet-construction-safety-net-50mm' },
  { icon: '🌿', title: 'Too much sunlight', product: 'Shade Net', href: '/products/pronet-green-shade-net-90' },
  { icon: '🐒', title: 'Monkey intrusion', product: 'Monkey Net', href: '/products/garware-monkey-net-2-5mm-50mm' },
  { icon: '🪝', title: 'Need accessories', product: 'Ropes & Accessories', href: '/products/garware-ropes-thick-hdpe' },
]

export const TESTIMONIALS = [
  { name: 'Rohan Mehta', location: 'Mumbai, Maharashtra', rating: 5, text: 'Got the bird net installed for our balcony and the buying flow was much clearer. The size blocks and product sections made selection easy.', product: 'Bird Net', avatar: 'RM' },
  { name: 'Sunita Krishnan', location: 'Bengaluru, Karnataka', rating: 5, text: 'The sports net pages now feel organised and premium. It is much easier to compare products and understand starting prices.', product: 'Sports Net', avatar: 'SK' },
  { name: 'Arjun Sharma', location: 'Delhi NCR', rating: 5, text: 'The block layout makes the site look more like a real catalogue. It feels cleaner, faster and easier to trust.', product: 'Catalogue Experience', avatar: 'AS' },
]

export const STATS = [
  { value: '47+', label: 'Products on live catalogue' },
  { value: '7', label: 'Main categories' },
  { value: '2005', label: 'Brand legacy since' },
  { value: 'Pan India', label: 'Delivery footprint' },
]

export const TRUST_BADGES = [
  { icon: '🏭', label: 'Factory Direct' },
  { icon: '🇮🇳', label: 'Made in India' },
  { icon: '🔒', label: 'Secure Checkout' },
  { icon: '🚚', label: 'Pan-India Shipping' },
  { icon: '🧰', label: 'DIY Friendly' },
  { icon: '📞', label: 'Support Available' },
]

export const NAV_LINKS = [
  { label: 'Products', href: '/products', children: CATEGORY_META.map((category) => ({ label: category.label, href: `/products#${category.key}` })) },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/enquire' },
]
