'use client'

import React, { useState, useEffect, useCallback } from 'react'
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
  HardHat,
  Menu,
  X
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
      
      {/* Section Galerie par Matériau */}
      <MaterialGallerySection />
      
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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
          
          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-orange-600 transition-colors">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">Services</a>
            <a href="#galerie" className="text-gray-700 hover:text-orange-600 transition-colors">Galerie</a>
            <a href="#apropos" className="text-gray-700 hover:text-orange-600 transition-colors">À propos</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
            <div className="flex items-center space-x-2 text-orange-600 font-semibold">
              <Phone className="h-4 w-4" />
              <span>0694 93 49 55</span>
            </div>
            <button className="btn-primary">Devis gratuit</button>
          </div>

          {/* Numéro de téléphone mobile */}
          <div className="flex md:hidden items-center space-x-4">
            <div className="flex items-center space-x-2 text-orange-600 font-semibold">
              <Phone className="h-4 w-4" />
              <span className="text-sm">0694 93 49 55</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/*  mobile */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#accueil" 
                className="block text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a 
                href="#services" 
                className="block text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#galerie" 
                className="block text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </a>
              <a 
                href="#apropos" 
                className="block text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
              <a 
                href="#contact" 
                className="block text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button 
                className="w-full btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Devis gratuit
              </button>
            </div>
          </motion.div>
        )}
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
      {/* Animation de soudage intense en arrière-plan */}
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
        
        {/* Arcs électriques de soudage plus lents */}
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
        
        {/* Éclairs de soudage plus doux */}
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
        
        {/* Effet de plasma de soudage plus doux */}
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
              Expertise en soudure industrielle, galva, inox et aluminium
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
 * Section des services de soudure avec animations modernes
 */
function ServicesSection() {
  const services = [   
    {
      icon: Zap,
      title: "Soudure Arc",
      description: "Procédé robuste et économique pour tous types de métaux. Idéal pour les travaux en extérieur et les matériaux épais.",
      features: ["Puissance", "Économique", "Polyvalence"],
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50"
    }, 
    {
      icon: Flame,  
      title: "Soudure TIG",
      description: "Service de soudure de haute précision pour vos projets exigeants. Idéal pour les finitions soignées.",
      features: ["Précision", "Qualité", "Fiabilité"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: Shield,
      title: "Soudure MIG",
      description: "Solution de soudage polyvalente adaptée à vos besoins. Parfait pour tous types de projets.",
      features: ["Polyvalence", "Efficacité", "Adaptabilité"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Excellence Technique
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos Services de <span className="text-gradient bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Soudure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nous maîtrisons tous les procédés de soudage industriel avec des équipements de pointe pour répondre à vos besoins les plus exigeants
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm overflow-hidden`}
            >
              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Icône avec gradient */}
              <div className="relative mb-6">
                <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} p-4 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                    className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 group-hover:scale-110 transition-transform duration-300`}></div>
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Bouton d'action */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}
              >
                En savoir plus
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Section galerie par type de matériau avec popup modal
 */
function MaterialGallerySection() {
  const materials = [
    {
      name: "Soudure en Acier",
      description: "Nos travaux de soudure sur acier couvrent une variété d'applications pour bateaux, automobiles et structures diverses. Notre expertise garantit des résultats durables et précis pour tous vos projets métalliques.",
      images: [
        "/soudure-en-acier.jpg",
        "/pose-tôle.jpg",
        "/fabrication-de-charpente-métallique-3.jpg",
        "/réparation-de-Godet.jpg",
        "/autre.jpg",
        "/fabrication-escalier.jpg",
        "/fabrication-portail-coulissant.jpg",
        "/whatsapp-image-1.jpg",
        "/whatsapp-image-2.jpg"
      ],
      features: ["Fabrication sur mesure", "Réparation et renforcement", "Assemblage de structures", "Finition professionnelle"]
    },
    {
      name: "Soudure en Inox",
      description: "L'inox exige des techniques spécifiques pour garantir des soudures propres et résistantes à la corrosion. Nos services s'adressent aux secteurs exigeant une haute qualité sanitaire et esthétique.",
      images: [],
      features: ["Résistance à la corrosion", "Finition miroir possible", "Soudures propres et discrètes", "Idéal pour contextes hygiéniques"]
    },
    {
      name: "Soudure en Aluminium",
      description: "La soudure sur aluminium demande une expertise particulière que notre équipe maîtrise parfaitement. Idéale pour les projets légers nécessitant résistance et légèreté.",
      images: [],
      features: ["Poids réduit", "Excellente résistance mécanique", "Parfait pour structures légères", "Résistance à la corrosion"]
    }
  ]

  const [selectedMaterial, setSelectedMaterial] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  /**
   * Ouvre le modal avec l'image sélectionnée et définit l'index de départ
   */
  const openModal = (imageIndex: number) => {
    setCurrentSlideIndex(imageIndex)
    setIsModalOpen(true)
  }

  /**
   * Ferme le modal
   */
  const closeModal = () => {
    setIsModalOpen(false)
  }

  /**
   * Navigation vers l'image suivante
   */
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => 
      prev === materials[selectedMaterial].images.length - 1 ? 0 : prev + 1
    )
  }, [materials, selectedMaterial])

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => 
      prev === 0 ? materials[selectedMaterial].images.length - 1 : prev - 1
    )
  }, [materials, selectedMaterial])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      
      switch (e.key) {
        case 'Escape':
          closeModal()
          break
        case 'ArrowLeft':
          prevSlide()
          break
        case 'ArrowRight':
          nextSlide()
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isModalOpen, closeModal, prevSlide, nextSlide])

  return (
    <section id="galerie" className="section-padding bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Grille de points décorative */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-8 h-full">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-orange-400 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              Portfolio Excellence
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Nos <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Réalisations</span> par Matériau
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez nos travaux de soudure spécialisés selon le type de matériau, témoins de notre expertise et de notre savoir-faire
          </p>
        </motion.div>

        {/* Onglets de sélection des matériaux modernisés */}
        <div className="flex flex-wrap justify-center mb-16 gap-6">
          {materials.map((material, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setSelectedMaterial(index)
                setSelectedImage(0)
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 overflow-hidden ${
                selectedMaterial === index
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl shadow-orange-500/25'
                  : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative z-10">{material.name}</span>
              
              {/* Indicateur actif */}
              {selectedMaterial === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Contenu du matériau sélectionné */}
        <motion.div
          key={selectedMaterial}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Informations du matériau */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
            >
              {materials[selectedMaterial].name}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 mb-8 text-lg leading-relaxed"
            >
              {materials[selectedMaterial].description}
            </motion.p>
            
            <div className="grid grid-cols-1 gap-4">
              {materials[selectedMaterial].features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="group flex items-center p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:from-orange-500/10 hover:to-red-500/10 transition-all duration-300"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-red-400 mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Bouton d'action */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
            >
              Demander un devis pour ce matériau
            </motion.button>
          </motion.div>

          {/* Galerie d'images modernisée */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Affichage conditionnel basé sur la présence d'images */}
            {materials[selectedMaterial].images && materials[selectedMaterial].images.length > 0 ? (
              <>
                {/* Image principale avec effets */}
                <div className="relative mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={materials[selectedMaterial].images[selectedImage]}
                    alt={`Exemple de réalisation en ${materials[selectedMaterial].name.toLowerCase()}`}
                    className="relative w-full h-80 object-cover rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-all duration-500 border border-white/20"
                    onClick={() => openModal(selectedImage)}
                  />
                
                  {/* Miniatures modernisées */}
                  <div className="grid grid-cols-4 gap-4 mt-6">
                    {materials[selectedMaterial].images.map((image, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx, duration: 0.3 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group cursor-pointer"
                        onClick={() => setSelectedImage(idx)}
                      >
                        <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                          selectedImage === idx
                            ? 'bg-gradient-to-r from-orange-500/30 to-red-500/30 blur-lg scale-110'
                            : 'bg-white/10 blur-sm group-hover:blur-md group-hover:scale-105'
                        }`}></div>
                        
                        <img
                          src={image}
                          alt={`Exemple ${idx + 1} de réalisation en ${materials[selectedMaterial].name.toLowerCase()}`}
                          className={`relative h-20 w-full object-cover rounded-xl transition-all duration-300 border-2 ${
                            selectedImage === idx
                              ? 'border-orange-400 shadow-lg shadow-orange-500/25'
                              : 'border-white/20 group-hover:border-white/40'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            openModal(idx)
                          }}
                        />
                        
                        {/* Overlay d'activation */}
                        {selectedImage === idx && (
                          <motion.div
                            layoutId="activeImage"
                            className="absolute inset-0 border-2 border-orange-400 rounded-xl"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        
                        {/* Icône de lecture */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                          selectedImage === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}>
                          <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="relative h-60 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10">
                <p className="text-gray-400 text-center px-6">
                  Les photos de nos réalisations en {materials[selectedMaterial].name.toLowerCase()} seront disponibles prochainement
                </p>
              </div>
            )}
          </motion.div>

        {/* Modal carrousel pour affichage en grand */}
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Bouton fermer */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white hover:text-gray-300 z-20 bg-black bg-opacity-50 rounded-full p-3 transition-all duration-200 hover:bg-opacity-70"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Bouton précédent */}
              {materials[selectedMaterial].images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevSlide()
                  }}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-20 bg-black bg-opacity-50 rounded-full p-3 transition-all duration-200 hover:bg-opacity-70"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Bouton suivant */}
              {materials[selectedMaterial].images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextSlide()
                  }}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-20 bg-black bg-opacity-50 rounded-full p-3 transition-all duration-200 hover:bg-opacity-70"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Image principale avec animation */}
              <motion.img
                key={currentSlideIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={materials[selectedMaterial].images[currentSlideIndex]}
                alt={`${materials[selectedMaterial].name} - Image ${currentSlideIndex + 1}`}
                className="max-w-[85vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Indicateurs de position */}
              {materials[selectedMaterial].images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {materials[selectedMaterial].images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentSlideIndex(idx)
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        idx === currentSlideIndex
                          ? 'bg-white scale-125'
                          : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Compteur d'images */}
              <div className="absolute top-6 left-6 text-white bg-black bg-opacity-50 rounded-lg px-3 py-2 text-sm font-medium z-20">
                {currentSlideIndex + 1} / {materials[selectedMaterial].images.length}
              </div>

              {/* Titre de l'image */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center z-20">
                <h3 className="text-lg font-semibold bg-black bg-opacity-50 rounded-lg px-4 py-2">
                  {materials[selectedMaterial].name}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
        </motion.div>
      </div>
    </section>
)}

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
              Entreprise fondée en 2021 avec l'<span className="text-gradient">Excellence</span> de MR. LONGA
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fondée en 2021, notre entreprise s'appuie sur plus de 20 années d'expérience dans le domaine de la soudure, acquise bien avant sa création. Nous mettons notre savoir-faire et notre rigueur au service de vos projets.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
               
              </div>
              <div className="text-center">
                
              
              </div>
            </div>
          
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
                <p className="text-gray-600">Nos installations modernes à Matoury, équipées des dernières technologies de soudage professionnel.</p>
              </div>
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
      text: "Junes Soudure a réalisé nos assemblages en acier avec une grande précision. Leur maîtrise des techniques de soudage sur structures métalliques lourdes a dépassé nos attentes.",
      rating: 5
    },
    {
      name: "Catherine Roussel",
      company: "Constructions Industrielles",
      text: "Travail remarquable sur nos charpentes en acier. Les délais ont été respectés et la qualité des soudures est irréprochable. Une équipe sérieuse et expérimentée.",
      rating: 5
    },
    {
      name: "Michel Bertrand",
      company: "Ateliers Mécaniques de l'Est",
      text: "Les soudures sur acier épais réalisées par Junes Soudure sont d’une excellente tenue. Leur savoir-faire dans le domaine industriel est un vrai atout pour nos projets.",
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