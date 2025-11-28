import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Types
type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: 'entrees',
    title: 'Entrées',
    items: [
      { name: 'Tartare de Bœuf', description: 'Filet de bœuf coupé au couteau, câpres, échalotes, jaune d\'œuf, crostini', price: '18$', tag: 'Populaire' },
      { name: 'Frites à la Truffe', description: 'Frites maison, parmesan, huile de truffe, aïoli à l\'ail', price: '12$', tag: 'V' },
      { name: 'Salade Burrata', description: 'Tomates ancestrales, basilic frais, glaçage balsamique, croustille au levain', price: '21$', tag: 'V' },
      { name: 'Calamars Croustillants', description: 'Légèrement panés, poivre citronné, trempette marinara', price: '16$' },
      { name: 'Soupe à l\'Oignon', description: 'Oignons caramélisés, bouillon de bœuf, sherry, gratiné au gruyère', price: '14$' },
    ]
  },
  {
    id: 'plats',
    title: 'Plats Principaux',
    items: [
      { name: 'Steak Frites', description: 'Contre-filet AAA 10oz, sauce au poivre, frites maison', price: '34$', tag: 'Signature' },
      { name: 'Confit de Canard', description: 'Cuisse croustillante, risotto aux champignons sauvages, glaçage aux cerises', price: '29$' },
      { name: 'Burger Distingo', description: 'Bœuf Wagyu, cheddar vieilli, confiture de bacon, roquette, pain brioché', price: '24$' },
      { name: 'Saumon Poêlé', description: 'Saumon de l\'Atlantique, asperges, beurre blanc citron-aneth', price: '28$' },
      { name: 'Raviolis aux Champignons', description: 'Farcis à la ricotta, sauce crémeuse à la truffe, pignons de pin grillés', price: '26$', tag: 'V' },
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { name: 'Crème Brûlée', description: 'Crème vanille classique, croûte de sucre caramélisé', price: '10$' },
      { name: 'Mousse au Chocolat Noir', description: '70% cacao, fleur de sel, coulis de framboise', price: '11$' },
      { name: 'Pouding au Caramel', description: 'Gâteau aux dattes chaud, sauce caramel, glace vanille', price: '12$' },
    ]
  },
  {
    id: 'boissons',
    title: 'Boissons',
    items: [
      { name: 'Old Fashioned', description: 'Bourbon, amers, sucre, zeste d\'orange', price: '14$' },
      { name: 'Espresso Martini', description: 'Vodka, kahlua, espresso frais', price: '15$' },
      { name: 'IPA Locale', description: 'Pinte en fût (16oz)', price: '9$' },
      { name: 'Vin Maison Rouge/Blanc', description: 'Verre (6oz)', price: '10$' },
    ]
  }
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('entrees');

  return (
    <Layout>
      <div className="bg-background min-h-screen pb-20">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-20 text-center mb-12">
           <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Notre Menu</h1>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
              Plats d'inspiration saisonnière élaborés avec des ingrédients locaux.
            </p>
           </div>
        </div>

        {/* Menu Content */}
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="entrees" onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-muted/50 p-1 h-auto flex-wrap justify-center">
                {menuData.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="px-6 py-3 text-base md:text-lg font-serif data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menuData.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid gap-6"
                >
                  {category.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="group flex justify-between items-baseline border-b border-border/50 pb-4 hover:bg-muted/20 p-4 rounded-lg transition-colors"
                    >
                      <div className="flex-1 pr-8">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-bold font-serif text-foreground">{item.name}</h3>
                          {item.tag && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary-foreground px-2 py-0.5 rounded-full border border-primary/30">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground italic mt-1">{item.description}</p>
                      </div>
                      <div className="text-lg font-bold text-foreground font-serif">{item.price}</div>
                    </div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
