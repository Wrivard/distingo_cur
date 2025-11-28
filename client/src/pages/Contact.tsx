import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const premiumEase = [0.25, 0.4, 0.25, 1];

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse courriel invalide"),
  phone: z.string().min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres"),
  date: z.string().min(1, "Veuillez sélectionner une date"),
  time: z.string().min(1, "Veuillez sélectionner une heure"),
  guests: z.string().min(1, "Veuillez sélectionner le nombre d'invités"),
  notes: z.string().optional(),
});

const contactInfo = [
  { icon: MapPin, title: "Adresse", content: "1234 Rue Saint-Denis, Montréal, QC H2X 3K4" },
  { icon: Phone, title: "Téléphone", content: "(514) 555-0123", href: "tel:+15145550123" },
  { icon: Mail, title: "Courriel", content: "info@distingo.com", href: "mailto:info@distingo.com" },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Demande Envoyée",
      description: "Nous avons bien reçu votre demande de réservation. Nous vous confirmerons sous peu.",
    });
    form.reset();
  }

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary py-24 md:py-32 text-center overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="eyebrow text-gold mb-4"
            >
              Réservations
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-primary-foreground mb-6"
            >
              Contactez-nous
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-light"
            >
              Réservez une table ou contactez-nous. Nous avons hâte de vous accueillir.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="space-y-12"
          >
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="eyebrow"
              >
                Nous Joindre
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-foreground mb-6"
              >
                Entrer en <span className="elegant-italic text-gold">Contact</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-muted-foreground mb-10 leading-relaxed"
              >
                Des questions sur notre menu, les événements privés ou les restrictions alimentaires ? Appelez-nous ou envoyez-nous un courriel.
              </motion.p>
              
              <div className="space-y-8">
                {contactInfo.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-5"
                  >
                    <div className="bg-accent/20 p-4 rounded-full transition-colors duration-300 hover:bg-accent/30">
                      <item.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-xl text-foreground mb-1">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground text-lg hover:text-gold transition-colors duration-300">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-lg">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {/* Hours */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-start gap-5"
                >
                  <div className="bg-accent/20 p-4 rounded-full">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl text-foreground mb-2">Heures d'Ouverture</h4>
                    <div className="text-muted-foreground text-lg space-y-1">
                      <p>Lun–Mer: 16h–23h</p>
                      <p>Jeu–Ven: 16h–01h</p>
                      <p>Sam: 17h–02h</p>
                      <p>Dim: 17h–23h</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="w-full h-72 bg-card rounded-sm overflow-hidden relative border border-border"
            >
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-gold mx-auto mb-3" />
                  <span className="text-muted-foreground">Carte Google Maps</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
            className="bg-card shadow-2xl rounded-sm p-8 md:p-10 border border-border"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="eyebrow text-gold mb-2"
            >
              Réserver
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-foreground mb-8"
            >
              Faire une <span className="elegant-italic">Réservation</span>
            </motion.h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-base">Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" className="h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-accent/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-base">Téléphone</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 555-5555" className="h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-accent/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-base">Courriel</FormLabel>
                      <FormControl>
                        <Input placeholder="votre@email.com" className="h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-accent/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-base">Date</FormLabel>
                        <FormControl>
                          <Input type="date" className="h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-accent/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-base">Heure</FormLabel>
                        <FormControl>
                          <Input type="time" className="h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-accent/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-base">Nombre d'Invités</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-accent/50">
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Personne' : 'Personnes'}</SelectItem>
                          ))}
                          <SelectItem value="more">8+ (Appelez-nous)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-base">Demandes Spéciales <span className="text-muted-foreground">(Optionnel)</span></FormLabel>
                      <FormControl>
                        <Textarea placeholder="Allergies, occasion spéciale, etc." className="min-h-[100px] text-base transition-all duration-300 focus:ring-2 focus:ring-accent/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-7 text-lg tracking-wide transition-all duration-300 hover:scale-[1.01]"
                >
                  Demander une Réservation
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
