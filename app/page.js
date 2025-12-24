'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Leaf, 
  Droplets, 
  Sun, 
  MapPin, 
  Phone, 
  ShoppingBag, 
  Menu 
} from 'lucide-react';

// --- Navbar Component ---
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-green-950/70 border-b border-green-800/30">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Leaf className="text-lime-400" size={24} />
        <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
          SITAMARHI <span className="text-lime-400">MUSHROOM</span>
        </div>
      </div>
      
      <div className="hidden md:flex space-x-8 text-sm font-medium text-green-100">
        <a href="#fresh" className="hover:text-lime-400 transition-colors">Our Harvest</a>
        <a href="#process" className="hover:text-lime-400 transition-colors">Organic Process</a>
        <a href="#contact" className="hover:text-lime-400 transition-colors">Visit Farm</a>
      </div>

      <button className="bg-lime-400 text-green-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-lime-300 transition-all flex items-center gap-2">
        <ShoppingBag size={18} />
        <span className="hidden sm:inline">Order Fresh</span>
      </button>
    </div>
  </nav>
);

// --- Hero Section with Parallax ---
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image: High quality Oyster Mushrooms */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-green-900/40 to-green-950 z-10" />
        <img 
          src="https://plus.unsplash.com/premium_photo-1671397681313-147210861360?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Fresh Oyster Mushrooms" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1 border border-lime-400/30 rounded-full bg-green-900/50 backdrop-blur-sm text-lime-300 text-sm font-medium tracking-wide"
        >
          100% ORGANIC • GROWN IN SITAMARHI
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-white mb-6 leading-[1.1]"
        >
          Pure. Fresh. <br />
          <span className="text-lime-400">Oyster Mushrooms.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto"
        >
          Experience the taste of nature. Cultivated with care at Sitamarhi Mushroom Farm using sustainable, chemical-free methods.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-lime-500 hover:bg-lime-400 text-green-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(132,204,22,0.4)] flex items-center gap-2 mx-auto"
        >
          Buy Fresh Harvest <ArrowRight size={20} />
        </motion.button>
      </div>
    </section>
  );
};

// --- Statistics / Highlights ---
const Stats = () => (
  <div className="bg-green-950 border-y border-green-800/30 relative z-20">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { label: "Daily Harvest", value: "Fresh" },
        { label: "Chemicals", value: "0%" },
        { label: "Protein Rich", value: "High" },
        { label: "Local Farm", value: "100%" },
      ].map((stat, i) => (
        <div key={i}>
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-green-400 text-sm uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

// --- Product Showcase ---
const ProductCard = ({ title, price, desc, image, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group bg-green-900/40 rounded-3xl overflow-hidden border border-green-800/50 hover:border-lime-500/50 transition-all hover:bg-green-900/60"
  >
    <div className="h-72 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent z-10" />
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute bottom-4 left-4 z-20">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
    </div>
    <div className="p-6">
      <p className="text-green-200 mb-6 min-h-[48px]">{desc}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-lime-400">{price}</span>
        <button className="bg-white text-green-950 px-6 py-2 rounded-xl font-bold hover:bg-lime-400 transition-colors">
          Add
        </button>
      </div>
    </div>
  </motion.div>
);

// --- Why Oyster Mushrooms? ---
const Benefits = () => (
  <section className="py-24 bg-green-950 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our <span className="text-lime-400">Oyster Mushrooms?</span></h2>
          <p className="text-green-200 text-lg mb-8 leading-relaxed">
            Grown right here in Sitamarhi, our Oyster mushrooms are known for their velvety texture and mild, savory flavor. They are a superfood powerhouse.
          </p>
          
          <ul className="space-y-6">
            {[
              { icon: <Droplets />, title: "Hydration & Freshness", text: "Harvested at dawn for maximum moisture content." },
              { icon: <Sun />, title: "Immunity Booster", text: "Rich in antioxidants and beta-glucans." },
              { icon: <Leaf />, title: "Sustainably Grown", text: "Grown on organic substrate using minimal water." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="bg-lime-500/20 p-3 rounded-full text-lime-400 h-fit">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-green-400">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-green-800"
        >
          <img 
            src="https://plus.unsplash.com/premium_photo-1671377388704-c7b6a543dde8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3lzdGVyJTIwbXVzaHJvb218ZW58MHx8MHx8fDA%3D" 
            alt="Close up of Oyster Mushroom" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-green-950 to-transparent">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <p className="text-white italic">&quot;The freshest mushrooms I&apos;ve found in Bihar. The quality from Sitamarhi Farm is unmatched.&quot;</p>
              <p className="text-lime-400 mt-2 font-bold">- Local Restaurant Chef</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-green-900 border-t border-green-800 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">
      <div>
        <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
           <Leaf className="text-lime-400" /> SITAMARHI FARM
        </div>
        <p className="text-green-200 max-w-sm">
          Providing high-quality, organic Oyster mushrooms to our local community and beyond. Eat healthy, live healthy.
        </p>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-6 text-xl">Visit Us</h4>
        <ul className="space-y-4 text-green-200">
          <li className="flex items-start gap-3">
            <MapPin className="text-lime-400 shrink-0" />
            <span>Sitamarhi Mushroom Farm,<br/>Sitamarhi, Bihar, India</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="text-lime-400" />
            <span>+91 98765 43210</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6 text-xl">Quick Links</h4>
        <div className="flex flex-col space-y-3 text-green-200">
          <a href="#" className="hover:text-lime-400">Wholesale Orders</a>
          <a href="#" className="hover:text-lime-400">Training Programs</a>
          <a href="#" className="hover:text-lime-400">Sustainability</a>
        </div>
      </div>
    </div>
    <div className="text-center text-green-400/60 text-sm border-t border-green-800 pt-8">
      © 2024 Sitamarhi Mushroom Farm. Growing with love.
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <main className="bg-green-950 min-h-screen selection:bg-lime-400 selection:text-green-950">
      <Navbar />
      <Hero />
      <Stats />
      
      <section id="fresh" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-lime-400 font-bold tracking-wider uppercase mb-2 block">Direct From Farm</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Harvest</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard 
            title="Fresh Grey Oyster" 
            price="₹250 / kg" 
            desc="Picked this morning. Juicy, thick, and perfect for curries and stir-fry." 
            image="https://images.unsplash.com/photo-1726177972908-9afd108bb079?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            delay={0}
          />
          <ProductCard 
            title="Sun-Dried Oyster" 
            price="₹400 / pkt" 
            desc="Naturally sun-dried to preserve Vitamin D and intense umami flavor." 
            image="https://images.unsplash.com/photo-1726177973715-9d17703e8d68?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            delay={0.2}
          />
          <ProductCard 
            title="Mushroom Spawn" 
            price="₹100 / pkt" 
            desc="Start your own farm. High-yield, contamination-free Oyster spawn." 
            image="https://plus.unsplash.com/premium_photo-1671377668955-0061f4e0aa45?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            delay={0.4}
          />
        </div>
      </section>

      <Benefits />

      {/* Call to Action Banner */}
      <section className="py-20 bg-lime-400 text-green-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Taste the freshness of Sitamarhi</h2>
          <p className="text-xl font-medium mb-8 opacity-80">We deliver fresh harvest every morning within the city limits.</p>
          <button className="bg-green-950 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-950 transition-all">
            Order via WhatsApp
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}