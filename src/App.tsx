/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Wallet, 
  PieChart, 
  BarChart3, 
  Smartphone, 
  Mail, 
  Instagram, 
  Twitter, 
  Linkedin,
  ChevronRight,
  Zap,
  Heart,
  Home,
  Briefcase,
  Dog,
  User
} from 'lucide-react';

// --- Sub-components ---

const SectionTitle = ({ children, subtitle, dark = false }: { children: React.ReactNode, subtitle?: string, dark?: boolean }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-display font-bold mb-4 ${dark ? 'text-white' : 'text-dark'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-2xl mx-auto ${dark ? 'text-white/70' : 'text-dark/70'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const FlipCard = ({ front, back, title }: { front: React.ReactNode, back: React.ReactNode, title: string }) => (
  <div className="flip-card h-64 w-full">
    <div className="flip-card-inner">
      <div className="flip-card-front bg-white shadow-xl border border-dark/5 flex flex-col items-center justify-center p-6">
        <div className="mb-4">{front}</div>
        <h3 className="font-display font-bold text-xl">{title}</h3>
      </div>
      <div className="flip-card-back bg-secondary text-white flex items-center justify-center p-6 shadow-xl">
        <p className="text-sm leading-relaxed">{back}</p>
      </div>
    </div>
  </div>
);

const GoalBlock = ({ title, items, color }: { title: string, items: string[], color: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-white p-8 rounded-2xl shadow-lg border-t-4 transition-all duration-300"
    style={{ borderTopColor: color }}
  >
    <h3 className="text-2xl font-display font-bold mb-6" style={{ color }}>{title}</h3>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-dark/80">
          <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const HabitBlock = ({ title, quote, icon: Icon, bg }: { title: string, quote: string, icon: any, bg: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`relative overflow-hidden rounded-3xl p-8 h-80 flex flex-col justify-end group cursor-pointer shadow-2xl ${bg}`}
  >
    <div className="absolute top-8 right-8 text-white/20 group-hover:text-white/40 transition-colors">
      <Icon size={80} />
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-display font-bold text-white mb-4 transition-transform duration-300 group-hover:-translate-y-2">
        {title}
      </h3>
      <p className="text-white/0 group-hover:text-white/90 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 italic">
        "{quote}"
      </p>
    </div>
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [activeInsurance, setActiveInsurance] = useState<string | null>(null);

  const insuranceCategories = [
    { id: 'vida', name: 'Vida', icon: Heart, desc: 'Protege el futuro de quienes más amas ante cualquier imprevisto.' },
    { id: 'salud', name: 'Salud', icon: Zap, desc: 'Acceso a la mejor atención médica cuando tú o tu familia lo necesiten.' },
    { id: 'hogar', name: 'Hogar', icon: Home, desc: 'Tu refugio seguro, protegido contra daños, robos o desastres naturales.' },
    { id: 'empleo', name: 'Empleo', icon: Briefcase, desc: 'Respaldo financiero mientras encuentras tu próxima gran oportunidad.' },
    { id: 'mascotas', name: 'Mascotas', icon: Dog, desc: 'Cuidado y bienestar para los miembros más peludos de tu familia.' },
  ];

  return (
    <div className="min-h-screen selection:bg-primary selection:text-dark">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-dark/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">M</div>
            <span className="text-2xl font-display font-bold tracking-tighter text-dark">MAKERS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-dark/70">
            <a href="#diagnostico" className="hover:text-secondary transition-colors">Diagnóstico</a>
            <a href="#metas" className="hover:text-secondary transition-colors">Metas</a>
            <a href="#habitos" className="hover:text-secondary transition-colors">Hábitos</a>
            <a href="#inversiones" className="hover:text-secondary transition-colors">Inversiones</a>
            <button className="bg-primary text-dark px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-primary/30 transition-all">
              Comenzar ahora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-6">
              Hacedores de su futuro financiero
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-dark mb-8 leading-[1.1]">
              Control total de <br />
              <span className="text-secondary">tus finanzas!</span>
            </h1>
            <p className="text-xl text-dark/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Maker es para quienes quieren <span className="relative inline-block">
                <span className="relative z-10 font-bold italic">hacer</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/40 -z-10" />
              </span> de sus sueños una realidad.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-dark text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-secondary transition-all flex items-center justify-center gap-2 group">
                Comenzar ahora
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white text-dark border-2 border-dark/10 px-10 py-4 rounded-2xl font-bold text-lg hover:border-primary transition-all">
                Ver demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Diagnóstico */}
      <section id="diagnostico" className="py-24 bg-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                ¿Sabes cómo están <br /> tus finanzas?
              </h2>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Para tener mejores finanzas primero tienes que conocer cómo están tus finanzas. Nuestro diagnóstico integral te da la claridad que necesitas.
              </p>
              <button className="bg-primary text-dark px-8 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                <PieChart />
                Diagnóstico financiero 360
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary p-6 rounded-2xl text-dark">
                    <TrendingUp size={32} className="mb-4" />
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-xs uppercase font-bold opacity-70">Progreso</div>
                  </div>
                  <div className="bg-secondary p-6 rounded-2xl text-white">
                    <Wallet size={32} className="mb-4" />
                    <div className="text-2xl font-bold">$2.4k</div>
                    <div className="text-xs uppercase font-bold opacity-70">Ahorro</div>
                  </div>
                  <div className="col-span-2 bg-white/10 p-6 rounded-2xl">
                    <div className="flex justify-between items-end mb-4">
                      <div className="h-20 w-4 bg-primary rounded-full" />
                      <div className="h-32 w-4 bg-secondary rounded-full" />
                      <div className="h-24 w-4 bg-primary rounded-full" />
                      <div className="h-40 w-4 bg-secondary rounded-full" />
                      <div className="h-28 w-4 bg-primary rounded-full" />
                    </div>
                    <div className="text-xs uppercase font-bold opacity-50 text-center">Análisis Mensual</div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Metas de Vida */}
      <section id="metas" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Ya sabes cómo están tus finanzas. Ahora pregúntate qué te permitiría lograr tener unas finanzas más ordenadas. ¿Con qué sueñas?">
            Tus Metas de Vida
          </SectionTitle>
          
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-dark/70 italic">
              "Recuerda: el dinero es un medio, no un fin en sí mismo. Por eso es importante que aprendas a identificar primero cuáles son tus metas u objetivos vitales."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GoalBlock 
              title="Corto Plazo" 
              color="#FFB13B"
              items={["Ir de paseo al pueblo de mis padres", "Hacer un curso de inglés", "Comprar una laptop"]}
            />
            <GoalBlock 
              title="Mediano Plazo" 
              color="#7E46E2"
              items={["Cambiar la moto", "Viajar al exterior", "Terminar de estudiar"]}
            />
            <GoalBlock 
              title="Largo Plazo" 
              color="#E59B5C"
              items={["Comprar una casa para mi familia", "Iniciar mi propio negocio", "Terminar de pagar la hipoteca", "Pagar la universidad de mis hijos"]}
            />
          </div>
        </div>
      </section>

      {/* Section 4: Hábitos Financieros */}
      <section id="habitos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Para lograr todas esas metas es necesario una sola cosa: Tener mejores hábitos financieros.">
            Hábitos para el Éxito
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            <HabitBlock 
              title="Hábitos de gasto"
              quote="No se trata de gastar menos, sino de gastar mejor."
              icon={BarChart3}
              bg="bg-dark"
            />
            <HabitBlock 
              title="Hábitos de ahorro"
              quote="El ahorro no es lo que sobra, es lo que decides priorizar."
              icon={Wallet}
              bg="bg-secondary"
            />
            <HabitBlock 
              title="Hábitos de deuda"
              quote="Las deudas pueden ser una herramienta o una trampa."
              icon={TrendingUp}
              bg="bg-support"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Inversiones */}
      <section id="inversiones" className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle dark subtitle="El juego del dinero no solo se trata de aprender a gastar, ahorrar y endeudarse bien. Bienvenido al fascinante mundo de las inversiones inteligentes.">
            Inversiones Inteligentes
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Renta Fija */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-primary text-center mb-8">Renta Fija</h3>
              <FlipCard 
                title="Bonos"
                front={<ShieldCheck size={48} className="text-secondary" />}
                back="Préstamos que haces a gobiernos o empresas a cambio de un interés fijo y seguro."
              />
              <FlipCard 
                title="CDT"
                front={<Wallet size={48} className="text-secondary" />}
                back="Certificado de Depósito a Término: dinero guardado por un tiempo fijo con rentabilidad garantizada."
              />
              <FlipCard 
                title="Fondos Conservadores"
                front={<PieChart size={48} className="text-secondary" />}
                back="Carteras diversificadas que priorizan la seguridad de tu capital."
              />
            </div>

            {/* Renta Variable */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-secondary text-center mb-8">Renta Variable</h3>
              <FlipCard 
                title="Acciones"
                front={<TrendingUp size={48} className="text-primary" />}
                back="Conviértete en socio de las empresas más grandes del mundo y participa de sus ganancias."
              />
              <FlipCard 
                title="ETFs"
                front={<BarChart3 size={48} className="text-primary" />}
                back="Fondos que cotizan en bolsa y te permiten invertir en cientos de activos a la vez."
              />
              <FlipCard 
                title="Fondos de Inversión"
                front={<PieChart size={48} className="text-primary" />}
                back="Gestión profesional para hacer crecer tu dinero en diferentes mercados."
              />
            </div>

            {/* Activos Alternativos */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-support text-center mb-8">Activos Alternativos</h3>
              <FlipCard 
                title="Criptomonedas"
                front={<Zap size={48} className="text-dark" />}
                back="Activos digitales descentralizados con alto potencial de crecimiento y tecnología blockchain."
              />
              <FlipCard 
                title="Inmobiliaria"
                front={<Home size={48} className="text-dark" />}
                back="Inversión en propiedad raíz para generar rentas mensuales y valorización."
              />
              <FlipCard 
                title="Capital de Riesgo"
                front={<Briefcase size={48} className="text-dark" />}
                back="Inversión en startups y empresas emergentes con gran potencial de disrupción."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Plataformas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Herramientas digitales seleccionadas para que des tu primer paso hoy mismo.">
            Plataformas de Inversión
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Habi', desc: 'La plataforma líder para invertir en el sector inmobiliario de forma digital y segura.', color: 'bg-primary' },
              { name: 'Trip', desc: 'Invierte en las mejores empresas de tecnología y startups con montos accesibles.', color: 'bg-secondary' },
              { name: 'Tyba', desc: 'Tu aliado para invertir en fondos, CDTs y acciones desde la palma de tu mano.', color: 'bg-support' },
            ].map((platform, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-dark/5 flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 ${platform.color} rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-8 shadow-lg`}>
                  {platform.name[0]}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{platform.name}</h3>
                <p className="text-dark/60 mb-8 leading-relaxed">{platform.desc}</p>
                <button className="mt-auto flex items-center gap-2 font-bold text-secondary hover:gap-4 transition-all">
                  Explorar <ChevronRight size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Seguros (Interactive Wheel) */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Si piensas que un seguro es un gasto, piénsalo dos veces. Protege lo que has construido.">
            Tu Red de Seguridad
          </SectionTitle>

          <div className="relative flex flex-col items-center">
            <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
              {/* Center Circle */}
              <div className="absolute z-10 w-32 h-32 md:w-48 md:h-48 bg-dark rounded-full flex flex-col items-center justify-center text-white text-center p-4 shadow-2xl border-4 border-primary">
                <ShieldCheck size={32} className="mb-2 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">Protección</span>
              </div>

              {/* Orbiting items */}
              {insuranceCategories.map((cat, i) => {
                const angle = (i * 360) / insuranceCategories.length;
                const radius = 40; // percentage
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.button
                    key={cat.id}
                    onMouseEnter={() => setActiveInsurance(cat.id)}
                    onMouseLeave={() => setActiveInsurance(null)}
                    className={`absolute w-20 h-20 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center transition-all duration-500 shadow-lg border-2 ${
                      activeInsurance === cat.id ? 'bg-secondary text-white border-secondary scale-110 z-20' : 'bg-white text-dark border-dark/10'
                    }`}
                    style={{
                      left: `${50 + x}%`,
                      top: `${50 + y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <cat.icon size={24} className="mb-1" />
                    <span className="text-[10px] md:text-xs font-bold uppercase">{cat.name}</span>
                  </motion.button>
                );
              })}

              {/* Decorative rings */}
              <div className="absolute w-[80%] h-[80%] border-2 border-dashed border-dark/10 rounded-full animate-[spin_60s_linear_infinite]" />
            </div>

            {/* Description Box */}
            <AnimatePresence mode="wait">
              {activeInsurance && (
                <motion.div
                  key={activeInsurance}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-12 p-8 bg-white rounded-3xl shadow-2xl border border-secondary/20 max-w-md text-center"
                >
                  <h4 className="text-2xl font-display font-bold text-secondary mb-2">
                    Seguro de {insuranceCategories.find(c => c.id === activeInsurance)?.name}
                  </h4>
                  <p className="text-dark/70 leading-relaxed">
                    {insuranceCategories.find(c => c.id === activeInsurance)?.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Section 8: Registro */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-dark/20 blur-[100px] rounded-full -ml-48 -mb-48" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Comienza a construir mejores hábitos financieros
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Únete a miles de personas que ya están transformando su futuro. Tu camino hacia la libertad financiera empieza con un solo paso.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-dark"><CheckCircle2 size={16} /></div>
                  <span>Acceso gratuito a herramientas de diagnóstico</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-dark"><CheckCircle2 size={16} /></div>
                  <span>Comunidad exclusiva de "Hacedores"</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-dark"><CheckCircle2 size={16} /></div>
                  <span>Contenido educativo premium semanal</span>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl text-dark"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-dark/50">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full px-6 py-4 bg-gray-50 border border-dark/10 rounded-2xl focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-dark/50">Email</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="w-full px-6 py-4 bg-gray-50 border border-dark/10 rounded-2xl focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-dark/50">Contraseña</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-6 py-4 bg-gray-50 border border-dark/10 rounded-2xl focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <button className="w-full bg-primary text-dark py-5 rounded-2xl font-bold text-xl hover:bg-support transition-all shadow-lg shadow-primary/20">
                  Crear mi cuenta
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: Newsletter */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block p-4 bg-white/5 rounded-3xl mb-8">
            <Mail size={48} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Recibe herramientas para mejorar tu relación con el dinero.
          </h2>
          <p className="text-white/60 mb-12 text-lg">
            Suscríbete a nuestro newsletter y recibe consejos prácticos cada semana.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Nombre"
              className="flex-1 px-8 py-5 bg-white/10 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white"
            />
            <input 
              type="email" 
              placeholder="Tu mejor email"
              className="flex-1 px-8 py-5 bg-white/10 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white"
            />
            <button className="bg-primary text-dark px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all">
              Suscribirme
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">M</div>
                <span className="text-2xl font-display font-bold tracking-tighter text-dark">MAKERS</span>
              </div>
              <p className="text-xl text-dark/70 max-w-md leading-relaxed">
                Haz parte de la comunidad de hacedores de su futuro financiero más grande de Latinoamérica.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-dark/40">Compañía</h4>
              <ul className="space-y-4 text-dark/70">
                <li><a href="#" className="hover:text-secondary transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Prensa</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-dark/40">Legal</h4>
              <ul className="space-y-4 text-dark/70">
                <li><a href="#" className="hover:text-secondary transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Seguridad</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-dark/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-dark/40 text-sm">
              © 2026 MAKERS. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="w-12 h-12 rounded-full bg-dark/5 flex items-center justify-center text-dark hover:bg-primary transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-dark/5 flex items-center justify-center text-dark hover:bg-primary transition-all"><Twitter size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-dark/5 flex items-center justify-center text-dark hover:bg-primary transition-all"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
