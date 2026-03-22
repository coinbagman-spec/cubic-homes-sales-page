import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah & Tom",
    location: "Byron Bay, NSW",
    quote: "Cubic Homes transformed our lifestyle. The Shou Sugi Ban timber is a conversation starter every time someone visits. It feels grounded in the landscape.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Marcus D.",
    location: "Sunshine Coast, QLD",
    quote: "The attention to architectural detail is unmatched. As an architect myself, I was impressed by the precision of the build and the quality of the finishes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "The Millers",
    location: "Mornington Peninsula, VIC",
    quote: "We wanted a sustainable off-grid retreat that didn't compromise on luxury. Cubic Homes delivered exactly that. It's our favorite place on earth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export const SocialProof = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Built for Living, Designed for Freedom</h2>
          <p className="text-muted-foreground text-lg">
            Join the community of Australians who have redefined their lifestyle with our architectural tiny homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-background p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="mb-8 relative">
                <Avatar className="w-24 h-24 border-2 border-accent/20 group-hover:border-accent transition-colors duration-500">
                  <AvatarImage src={t.image} alt={t.name} className="object-cover" />
                  <AvatarFallback>{t.name.split(' ')[0][0]}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-accent rounded-full p-2 text-white shadow-lg">
                  <Quote size={16} fill="currentColor" />
                </div>
              </div>
              <blockquote className="mb-8 text-muted-foreground leading-relaxed italic italic font-sans">
                "{t.quote}"
              </blockquote>
              <div className="mt-auto">
                <h4 className="font-serif text-xl font-medium">{t.name}</h4>
                <p className="text-accent text-sm tracking-widest uppercase mt-1">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <div className="mt-24 pt-16 border-t border-border flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
           {['Master Builders Australia', 'HIA Member', 'Timber Queensland'].map((logo, i) => (
             <div key={i} className="text-2xl font-serif tracking-tighter text-foreground whitespace-nowrap">
               {logo}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
