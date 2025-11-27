import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

// Reuse generated images
import img1 from '@assets/generated_images/upscale_cozy_gastropub_interior_at_night.png';
import img2 from '@assets/generated_images/gourmet_steak_frites_dish.png';
import img3 from '@assets/generated_images/signature_craft_cocktail_in_crystal_glass.png';
import img4 from '@assets/generated_images/cozy_bistro_table_setting_detail.png';

const galleryImages = [
  { src: img1, alt: 'Ambiance Intérieure', span: 'col-span-2 row-span-2' },
  { src: img2, alt: 'Steak Frites', span: 'col-span-1 row-span-1' },
  { src: img3, alt: 'Cocktail Signature', span: 'col-span-1 row-span-1' },
  { src: img4, alt: 'Détail de Table', span: 'col-span-1 row-span-1' },
  // Duplicating for grid fullness since we only generated 4
  { src: img3, alt: 'Ambiance Bar', span: 'col-span-1 row-span-1' },
  { src: img2, alt: 'Détail Culinaire', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  return (
    <Layout>
      <div className="bg-background min-h-screen pb-20">
        <div className="bg-primary text-primary-foreground py-20 text-center mb-12">
           <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Galerie</h1>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
              Un aperçu de l'expérience Distingo.
            </p>
           </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg group ${img.span}`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-6">
                  <p className="text-white font-serif font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
