import { useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { siteData } from '../data/siteData';

export default function MenuPage() {
  const { seo, menu, images } = siteData;
  const [activeTab, setActiveTab] = useState(menu.tabs[0].id);
  const current = menu.tabs.find((tab) => tab.id === activeTab) || menu.tabs[0];

  return (
    <>
      <Seo title={seo.menu.title} description={seo.menu.description} path={seo.menu.path} />

      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section className="relative bg-espresso-900 text-cream-100 overflow-hidden" style={{ minHeight: '46vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${images.food[1]}')` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/50 to-espresso-900" />
        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-16 md:pb-20 pt-36 md:pt-44 max-w-screen-xl mx-auto">
          <span className="block text-[10px] uppercase tracking-[0.4em] text-terracotta-200 mb-4">Cucina</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-cream-50">
            Selezioni stagionali<br />
            <em className="text-terracotta-200">e degustazioni</em>
          </h1>
          <div className="h-px w-12 bg-terracotta-400 mt-7" />
          <p className="mt-5 max-w-xl text-base md:text-lg text-cream-100/65 leading-relaxed">
            {menu.intro}
          </p>
        </div>
      </section>

      {/* ── TABS + ITEMS ─────────────────────────────────────── */}
      <section className="section-padding bg-cream-200">
        <div className="inner-max">
          {/* tab buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            {menu.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-250 ${
                  tab.id === activeTab
                    ? 'bg-espresso-900 text-cream-50 shadow-[0_8px_20px_rgba(29,23,19,0.3)]'
                    : 'bg-cream-200 text-espresso-700 hover:bg-cream-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* active tab content */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid md:grid-cols-[1fr_320px] gap-8 items-start"
          >
            {/* dishes */}
            <div className="rounded-2xl border border-espresso-100 bg-white overflow-hidden">
              <div className="bg-espresso-900 px-8 py-7">
                <h2 className="font-serif text-3xl text-cream-50">{current.label}</h2>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-terracotta-200">{current.subtitle}</p>
              </div>
              <div className="px-8 py-6 divide-y divide-espresso-50">
                {current.items.map((item) => (
                  <article key={item.name} className="py-6 grid grid-cols-[1fr_auto] items-start gap-4">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-espresso-900">{item.name}</h3>
                      <p className="mt-1 text-sm italic text-espresso-500">{item.desc}</p>
                    </div>
                    <p className="font-serif text-2xl text-terracotta-600 whitespace-nowrap">€ {item.price}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* menu photos */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl border border-espresso-100 bg-cream-100 p-4">
                <p className="text-[9px] uppercase tracking-[0.35em] text-espresso-500 mb-4">Menu del mese</p>
                <img src={images.menuFront} alt="Menu fronte" className="w-full rounded-xl object-cover" loading="lazy" />
              </div>
              <div className="rounded-2xl border border-espresso-100 bg-cream-100 p-5">
                <p className="text-xs leading-relaxed text-espresso-700">{menu.disclaimer}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MENU SCAN FULL ──────────────────────────────────── */}
      <section className="section-padding bg-espresso-900">
        <div className="inner-max text-center">
          <span className="block text-[10px] uppercase tracking-[0.4em] text-terracotta-200 mb-3">Sfoglia</span>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-10">Il menu completo</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <img src={images.menuFront} alt="Menu del mese fronte" className="w-full rounded-2xl border border-espresso-700 object-cover shadow-xl" loading="lazy" />
            <img src={images.menuRear} alt="Menu del mese retro" className="w-full rounded-2xl border border-espresso-700 object-cover shadow-xl" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
