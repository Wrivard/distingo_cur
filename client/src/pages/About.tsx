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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Story</h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Crafting memories through exceptional food and warm hospitality since 2025.
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">The Concept</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Distingo Resto Pub was born from a simple desire: to create a place where the elegance of a bistro meets the comfort of a local pub. We wanted a space where you could enjoy a gourmet meal in a t-shirt, or a craft beer in a suit.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Located in the vibrant heart of Montreal, our establishment reflects the city's dual nature—sophisticated yet approachable, classic yet modern.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <img src={interiorImage} alt="Interior" className="w-full h-full object-cover" />
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
            <img src={tableImage} alt="Table Setting" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">The Atmosphere</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Step inside and leave the noise of the city behind. Our interior features reclaimed wood, soft leather banquettes, and warm amber lighting that creates an intimate, cozy vibe.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're here for a romantic dinner, a casual catch-up with friends, or a solo drink at the bar, Distingo offers the perfect setting to relax and indulge.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
