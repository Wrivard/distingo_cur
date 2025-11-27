import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

// Reuse images
import interiorImage from '@assets/generated_images/upscale_cozy_gastropub_interior_at_night.png';
import tableImage from '@assets/generated_images/cozy_bistro_table_setting_detail.png';

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Notre Histoire</h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Création de souvenirs à travers une cuisine exceptionnelle et une hospitalité chaleureuse depuis 2025.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">Le Concept</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Distingo Resto Pub est né d'un désir simple : créer un lieu où l'élégance d'un bistro rencontre le confort d'un pub local. Nous voulions un espace où vous pourriez déguster un repas gastronomique en t-shirt, ou une bière artisanale en costume.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Situé dans le cœur vibrant de Montréal, notre établissement reflète la double nature de la ville — sophistiquée mais accessible, classique mais moderne.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <img src={interiorImage} alt="Intérieur" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <Separator className="my-12 opacity-50" />

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <img src={tableImage} alt="Mise en table" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">L'Atmosphère</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Entrez et laissez le bruit de la ville derrière vous. Notre intérieur présente du bois récupéré, des banquettes en cuir souple et un éclairage ambré chaleureux qui crée une ambiance intime et confortable.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Que vous soyez ici pour un dîner romantique, une rencontre décontractée entre amis ou un verre en solo au bar, Distingo offre le cadre idéal pour se détendre et se faire plaisir.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
