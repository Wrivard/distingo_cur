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
    id: 'starters',
    title: 'Starters',
    items: [
      { name: 'Beef Tartare', description: 'Hand-cut beef tenderloin, capers, shallots, egg yolk, crostini', price: '$18', tag: 'Popular' },
      { name: 'Truffle Fries', description: 'House-cut fries, parmesan, truffle oil, garlic aioli', price: '$12', tag: 'V' },
      { name: 'Burrata Salad', description: 'Heirloom tomatoes, fresh basil, balsamic glaze, sourdough crisp', price: '$21', tag: 'V' },
      { name: 'Crispy Calamari', description: 'Lightly dusted, lemon pepper, marinara dip', price: '$16' },
      { name: 'Onion Soup', description: 'Caramelized onions, beef broth, sherry, gruyère gratiné', price: '$14' },
    ]
  },
  {
    id: 'mains',
    title: 'Mains',
    items: [
      { name: 'Steak Frites', description: '10oz AAA New York Strip, peppercorn sauce, house fries', price: '$34', tag: 'Signature' },
      { name: 'Duck Confit', description: 'Crispy leg, wild mushroom risotto, cherry glaze', price: '$29' },
      { name: 'Distingo Burger', description: 'Wagyu beef, aged cheddar, bacon jam, arugula, brioche bun', price: '$24' },
      { name: 'Pan-Seared Salmon', description: 'Atlantic salmon, asparagus, lemon-dill beurre blanc', price: '$28' },
      { name: 'Mushroom Ravioli', description: 'Ricotta stuffed, truffle cream sauce, toasted pine nuts', price: '$26', tag: 'V' },
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { name: 'Crème Brûlée', description: 'Classic vanilla bean custard, caramelized sugar crust', price: '$10' },
      { name: 'Dark Chocolate Mousse', description: '70% cocoa, sea salt, raspberry coulis', price: '$11' },
      { name: 'Sticky Toffee Pudding', description: 'Warm date sponge, toffee sauce, vanilla ice cream', price: '$12' },
    ]
  },
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      { name: 'Old Fashioned', description: 'Bourbon, bitters, sugar, orange peel', price: '$14' },
      { name: 'Espresso Martini', description: 'Vodka, kahlua, fresh espresso', price: '$15' },
      { name: 'Local IPA', description: 'Draft pint (16oz)', price: '$9' },
      { name: 'House Red/White', description: 'Glass (6oz)', price: '$10' },
    ]
  }
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('starters');

  return (
    <Layout>
      <div className="bg-background min-h-screen pb-20">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-20 text-center mb-12">
           <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Menu</h1>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
              Seasonally inspired dishes crafted with locally sourced ingredients.
            </p>
           </div>
        </div>

        {/* Menu Content */}
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="starters" onValueChange={setActiveTab} className="w-full">
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
                          <h3 className="text-xl font-bold font-serif text-primary">{item.name}</h3>
                          {item.tag && (
                            <span className="text-xs font-bold uppercase tracking-wider bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground font-light italic">{item.description}</p>
                      </div>
                      <div className="text-xl font-bold text-secondary font-serif">{item.price}</div>
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
