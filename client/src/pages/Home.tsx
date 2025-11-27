import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, UtensilsCrossed, Wine, Music } from 'lucide-react';
import { motion } from 'framer-motion';

// Import generated assets
import heroImage from '@assets/60e3fd14-123e-4568-a2fa-a1001c9d094e_1764287212509.jfif';
import dishImage from '@assets/generated_images/gourmet_steak_frites_dish.png';
import drinkImage from '@assets/generated_images/signature_craft_cocktail_in_crystal_glass.png';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Distingo Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/30 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-secondary font-sans uppercase tracking-[0.2em] mb-4 text-sm md:text-base">Est. 2025 • Montréal</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
              Distingo <br />
              <span className="italic text-white/90 font-light">Resto Pub</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Où le charme rustique rencontre l'élégance culinaire. Découvrez le mélange parfait entre l'ambiance bistro chaleureuse et la gastronomie haut de gamme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground min-w-[180px] text-lg h-14">
                  Voir le Menu
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary min-w-[180px] text-lg h-14">
                  Réserver
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / About Teaser */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] md:aspect-square rounded-lg overflow-hidden shadow-xl">
              <img 
                src={dishImage} 
                alt="Plat Signature" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-8 md:pl-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Une Approche Moderne du <br />
                <span className="text-secondary italic">Confort Classique</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Situé au cœur de Montréal, Distingo offre un sanctuaire loin de l'agitation urbaine. Nous croyons au pouvoir de la bonne cuisine et de la bonne compagnie. Notre cuisine propose des classiques de pub élevés ainsi que des plats saisonniers innovants, tous préparés avec des ingrédients locaux.
              </p>
              <Link href="/about">
                <a className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors border-b border-primary hover:border-secondary pb-1">
                  Notre Histoire <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Highlights */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <UtensilsCrossed className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Cuisine Gastronomique</h3>
              <p className="text-primary-foreground/70 mb-6">
                De nos frites signature à nos burgers artisanaux, chaque plat est élaboré avec passion et précision.
              </p>
              <Link href="/menu">
                <a className="text-secondary uppercase tracking-wider text-sm font-semibold hover:text-white transition-colors">Voir Menu</a>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-8 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <Wine className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Boissons Sélectionnées</h3>
              <p className="text-primary-foreground/70 mb-6">
                Explorez notre vaste carte des vins, nos bières artisanales locales et nos cocktails signature conçus par des mixologues experts.
              </p>
              <Link href="/menu">
                <a className="text-secondary uppercase tracking-wider text-sm font-semibold hover:text-white transition-colors">Carte des Boissons</a>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="p-8 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <Music className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Atmosphère Chaleureuse</h3>
              <p className="text-primary-foreground/70 mb-6">
                Un éclairage chaleureux, des sièges confortables et une liste de lecture soignée créent le cadre idéal pour votre soirée.
              </p>
              <Link href="/gallery">
                <a className="text-secondary uppercase tracking-wider text-sm font-semibold hover:text-white transition-colors">Voir Galerie</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Parallax-ish */}
      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 z-0">
          <img 
            src={drinkImage} 
            alt="Cocktail Artisanal" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center">
           <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Goûtez à la Distinction</h2>
           <Link href="/contact">
             <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-secondary-foreground border-none h-14 px-8 text-lg">
               Réservez Votre Table
             </Button>
           </Link>
        </div>
      </section>
    </Layout>
  );
}
