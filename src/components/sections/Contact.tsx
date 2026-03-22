import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-24 md:py-32 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-accent uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">Touch the Timber</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Commission your<br />
              sanctuary
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12 max-w-lg">
              Every Cubic Home begins with a conversation. Tell us about your land, your vision, and what you want to feel when you arrive home. We handle everything from there — design, fabrication, and delivery across Queensland.
            </p>
            
            <p className="text-white text-base font-light mb-12 max-w-md italic">
              Or better yet — visit us in Rockhampton and run your hand across the Shou Sugi Ban surface. There is no substitute for that first touch.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-500">
                  <MapPin size={20} className="text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Rockhampton, QLD — Central Queensland</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Serving Mackay, Mackay, Gladstone & Central QLD</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-500">
                  <Phone size={20} className="text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">+61 (07) 4900 0000</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold font-sans">Mon-Fri · 8:00am - 5:00pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-500">
                  <Mail size={20} className="text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">hello@cubichomes.com.au</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold font-sans">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-secondary p-8 md:p-12"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent font-bold">Your Name</label>
                  <Input 
                    placeholder="Enter your name" 
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-accent transition-all placeholder:text-muted-foreground/30 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent font-bold">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-accent transition-all placeholder:text-muted-foreground/30 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-accent font-bold">Phone Number</label>
                <Input 
                  placeholder="Enter your phone" 
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-accent transition-all placeholder:text-muted-foreground/30 text-white"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest text-accent font-bold block">Which model interests you?</label>
                <div className="grid grid-cols-2 gap-4">
                  {['The Ember', 'The Sovereign', 'The Refuge', 'Fully Custom Commission', 'Not sure yet'].map((model) => (
                    <label key={model} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-accent/40 rounded-full flex items-center justify-center group-hover:border-accent transition-colors">
                        <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-active:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-xs text-white/70 group-hover:text-white transition-colors">{model}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-accent font-bold">Your Vision</label>
                <Textarea 
                  placeholder="Tell us about your land, your budget, and your timeline..." 
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-accent transition-all min-h-[150px] resize-none placeholder:text-muted-foreground/30 text-white"
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                className="w-full rounded-none py-8 text-xs uppercase tracking-[0.3em] font-bold bg-accent text-accent-foreground hover:bg-white hover:text-black transition-all duration-500 shadow-xl"
              >
                Begin My Commission
              </Button>
              
              <p className="text-[10px] text-muted-foreground text-center italic">
                We respond within 24 hours. Based in Rockhampton, serving all of Queensland.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
