'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Flame, 
  Shield, 
  Zap, 
  Settings, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  ArrowRight,
  Wrench,
  Factory,
  HardHat
} from 'lucide-react'

/**
 * Page d'accueil principale du site SoudurePro
 * Contient toutes les sections : hero, services, à propos, témoignages, contact
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Section Hero */}
      <HeroSection />
      
      {/* Section Services */}
      <ServicesSection />
      
      {/* Section À propos */}
      <AboutSection />
      
      {/* Section Témoignages */}
      <TestimonialsSection />
      
      {/* Section Contact */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}

/**
 * Composant de navigation avec menu responsive
 */
function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50"
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Junes Soudure Logo" 
              width={60} 
              height={60} 
              className="rounded-full"
            />
        <span className="text-xl font-bold text-gray-900">Junes Soudure</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-orange-600 transition-colors">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">Services</a>
            <a href="#apropos" className="text-gray-700 hover:text-orange-600 transition-colors">À propos</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
            <div className="flex items-center space-x-2 text-orange-600 font-semibold">
              <Phone className="h-4 w-4" />
              <span>0694 93 49 55</span>
            </div>
            <button className="btn-primary">Devis gratuit</button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

/**
 * Section hero avec animation et call-to-action
 */
function HeroSection() {
  return (
    <section id="accueil" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero-background.jpg")',
          filter: 'brightness(0.3) contrast(1.1)'
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-blue-900/70" />
      {/* Animation de découpage laser intense en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Étincelles réduites et plus subtiles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-1.5 h-1.5 bg-yellow-300 shadow-md shadow-yellow-300/30' :
              i % 3 === 1 ? 'w-1 h-1 bg-orange-400 shadow-sm shadow-orange-400/30' :
              'w-0.5 h-0.5 bg-red-500 shadow-xs shadow-red-500/30'
            }`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0,
              scale: 0
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: [0, 0.7, 0.5, 0],
              scale: [0, 1, 0.8, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Arcs électriques de découpage laser plus lents */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 via-white to-transparent shadow-md shadow-cyan-400/50"
          initial={{ scaleX: 0, opacity: 0, rotateZ: 0 }}
          animate={{ 
            scaleX: [0, 1, 0.8, 0], 
            opacity: [0, 0.8, 0.6, 0],
            rotateZ: [0, 1, -0.5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-2/3 right-1/4 w-36 h-1 bg-gradient-to-r from-transparent via-blue-300 via-white to-transparent shadow-md shadow-blue-300/50"
          initial={{ scaleX: 0, opacity: 0, rotateZ: 0 }}
          animate={{ 
            scaleX: [0, 1, 0.7, 0], 
            opacity: [0, 0.7, 0.5, 0],
            rotateZ: [0, -1.5, 0.5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 4,
            ease: "easeInOut"
          }}
        />
        
        {/* Éclairs de découpe plus doux */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-1.5 h-20 bg-gradient-to-b from-transparent via-yellow-200 via-white to-transparent shadow-lg shadow-yellow-200/50"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ 
            scaleY: [0, 1, 0.6, 0], 
            opacity: [0, 0.6, 0.4, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 6,
            ease: "easeOut"
          }}
        />
        
        {/* Gerbes d'étincelles réduites et plus espacées */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`burst-${i}`}
            className="absolute w-12 h-12"
            style={{
              left: `${25 + i * 15}%`,
              top: `${35 + (i % 2) * 25}%`
            }}
          >
            {[...Array(4)].map((_, j) => (
              <motion.div
                key={`particle-${j}`}
                className="absolute w-0.5 h-0.5 bg-orange-300 rounded-full shadow-xs shadow-orange-300/30"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: Math.cos((j * 90) * Math.PI / 180) * 15,
                  y: Math.sin((j * 90) * Math.PI / 180) * 15,
                  opacity: [0, 0.7, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 2 + j * 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        ))}
        
        {/* Lueurs douces et espacées */}
        <motion.div
          className="absolute top-1/4 left-1/2 w-60 h-60 bg-orange-300 rounded-full blur-3xl"
          initial={{ scale: 0.3, opacity: 0.05 }}
          animate={{ scale: [0.3, 1.2, 0.7, 0.3], opacity: [0.05, 0.2, 0.1, 0.05] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/3 w-40 h-40 bg-cyan-200 rounded-full blur-2xl"
          initial={{ scale: 0.2, opacity: 0.03 }}
          animate={{ scale: [0.2, 1, 0.5, 0.2], opacity: [0.03, 0.15, 0.08, 0.03] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 4,
            ease: "easeInOut"
          }}
        />
        
        {/* Effet de plasma de découpe plus doux */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-28 bg-gradient-to-b from-white via-cyan-200 to-transparent shadow-lg shadow-cyan-200/60 blur-sm"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ 
            scaleY: [0, 1, 0.8, 0], 
            opacity: [0, 0.7, 0.4, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 8,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
              <span className="text-gradient bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Junes Soudure</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-200 mb-6">
              20 ans d'expertise en soudure industrielle, galva, inox et aluminium
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Spécialiste en fabrication et réparation sur mesure. Notre savoir-faire couvre tous les types de soudure, pour les secteurs industriels, professionnels et particuliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary">
                Nos réalisations
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-orange-500 to-primary-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm opacity-90">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24h</div>
                  <div className="text-sm opacity-90">Service d'urgence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Satisfaction client</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/**
 * Section des services de soudure avec animations
 */
function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "Découpe laser",
      description: "Machine découpe laser 3KW de haute précision. Capacités : Acier de 1 à 20mm, Inox de 0.2 à 12mm, Aluminium de 1 à 8mm.",
      features: ["Précision extrême", "Tous métaux", "Épaisseurs variées"]
    },
    {
      icon: Settings,
      title: "Pliage & Cintrage",
      description: "2 Plieuses de 160 tonnes avec tablier de 3m et 1 Rouleuse (capacité : 1m50). Solutions complètes pour la transformation des métaux.",
      features: ["160 tonnes", "Tablier 3m", "Rouleuse 1m50"]
    },
    {
      icon: Flame,
      title: "Soudure TIG (Tungsten Inert Gas)",
      description: "Nombreux postes équipés de TIG pour soudage de haute qualité. Idéal pour les finitions parfaites et les métaux nobles.",
      features: ["Haute qualité", "Finition parfaite", "Métaux nobles"]
    },
    {
      icon: Shield,
      title: "Soudure MIG (Metal Inert Gas)",
      description: "Postes MIG professionnels pour soudage rapide et efficace. Parfait pour la production industrielle et les gros volumes.",
      features: ["Soudage rapide", "Production industrielle", "Gros volumes"]
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos Services de <span className="text-gradient">Soudure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous maîtrisons tous les procédés de soudage industriel pour répondre à vos besoins spécifiques
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <service.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Section à propos avec valeurs et expertise
 */
function AboutSection() {
  return (
    <section id="apropos" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Plus de 20 ans d'<span className="text-gradient">Excellence</span> à Matoury
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Junes Soudure est votre partenaire de confiance en fabrication et réparation industrielle. 
              Depuis notre création, nous avons évolué pour devenir un acteur incontournable 
              dans le domaine du soudage et de la réparation industrielle.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <HardHat className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Équipements de Pointe</div>
                <div className="text-sm text-gray-600">Machines performantes</div>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">CFAO Performante</div>
                <div className="text-sm text-gray-600">Conception assistée</div>
              </div>
            </div>
            <button className="btn-primary">
              En savoir plus
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Image de l'entreprise */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <Image 
                src="/entreprise-image.jpg" 
                alt="Extérieur de l'entreprise Junes Soudure" 
                width={600} 
                height={400} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Notre Atelier</h3>
                <p className="text-gray-600">Nos installations modernes à Matoury, équipées des dernières technologies de soudage et de découpe laser.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nos Équipements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2" />
                  1 machine découpe laser 3KW
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2" />
                  2 Plieuses de 160 tonnes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2" />
                  1 Rouleuse (capacité : 1m50)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/**
 * Section témoignages clients
 */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jean-Claude Moreau",
      company: "Métallurgie Lorraine",
      text: "Junes Soudure a réalisé nos travaux de soudage avec une qualité exceptionnelle. Leur expertise en galva et inox nous a permis d'obtenir des résultats parfaits.",
      rating: 5
    },
    {
      name: "Catherine Roussel",
      company: "Constructions Industrielles Nancy",
      text: "Excellent travail de pliage avec leurs plieuses 160 tonnes. Respect des délais et qualité irréprochable pour notre projet.",
      rating: 5
    },
    {
      name: "Michel Bertrand",
      company: "Ateliers Mécaniques de l'Est",
      text: "Soudures de très haute qualité sur aluminium et inox. L'équipe de Junes Soudure maîtrise parfaitement son métier. Je recommande.",
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xl text-gray-600">
            La satisfaction de nos clients est notre priorité
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Section contact avec formulaire
 */
function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Contactez-nous pour votre <span className="text-orange-400">Projet</span>
          </h2>
          <p className="text-xl text-gray-300">
            Devis gratuit sous 24h - Intervention rapide
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Informations de Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-orange-400 mr-4" />
                <div>
                  <div className="font-semibold">Téléphone</div>
          <div className="text-gray-300">0694 93 49 55</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-orange-400 mr-4" />
                <div>
                  <div className="font-semibold">Email</div>
          <div className="text-gray-300">junes.longa@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-orange-400 mr-4" />
                <div>
                  <div className="font-semibold">Adresse</div>
                  <div className="text-gray-300">Carrefour du Larivot, 179 rue du POLYGONE, 97351 Matoury</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                placeholder="Sujet"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <textarea
                rows={4}
                placeholder="Décrivez votre projet..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              ></textarea>
              <button type="submit" className="w-full btn-primary">
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/**
 * Footer du site
 */
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-max">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image 
              src="/logo.png" 
              alt="Junes Soudure Logo" 
              width={50} 
              height={50} 
              objectFit='cover'
              className="rounded-full "
            />
      <span className="text-xl font-bold">Junes Soudure</span>
          </div>
          <p className="text-gray-400">
      © 2024 Junes Soudure. Tous droits réservés. Expert en soudure industrielle.
    </p>
        </div>
      </div>
    </footer>
  )
}