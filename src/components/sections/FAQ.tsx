import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do regulations vary across NSW, VIC, and QLD?",
    answer: "Each state has unique planning rules. In many cases, tiny homes on wheels can be classified as 'caravans' or 'ancillary dwellings'. We provide a detailed planning assessment for your specific local council to ensure full compliance before we begin the build."
  },
  {
    question: "Is Shou Sugi Ban timber suitable for high bushfire areas?",
    answer: "Yes. The carbonised layer created during the charring process is naturally fire-resistant. This makes our Shou Sugi Ban cladding an excellent choice for properties in Bushfire Attack Level (BAL) rated zones. It provides an extra layer of structural protection while meeting high-end architectural standards."
  },
  {
    question: "What is the typical lead time for a Cubic Home?",
    answer: "Our standard lead time is currently 16–24 weeks from the date of design approval. This timeframe includes the off-site fabrication in our workshop and the final delivery to your property. Custom 'Architect' level projects may take slightly longer depending on the complexity of the design."
  },
  {
    question: "Can these homes be built completely off-grid?",
    answer: "Absolutely. We offer advanced off-grid packages including Victron solar systems, high-capacity lithium storage, rainwater harvesting modules, and composting or incineration toilets. Our designs are optimized for passive heating and cooling, reducing your overall energy requirements."
  },
  {
    question: "How are the homes delivered and installed on site?",
    answer: "Cubic Homes are built on a specialized heavy-duty chassis and delivered via a tilt-tray truck or low-loader. Once on site, we can assist with leveling, stabilization, and connecting to services if required. Our goal is a 'plug-and-play' experience for our clients."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/10" id="faq">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Header Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">Frequently Asked<br />Questions</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg leading-relaxed font-sans">
              Everything you need to know about the technical, legal, and architectural aspects of your future home.
            </p>
            <div className="p-8 bg-accent/5 border border-accent/20 rounded-2xl flex flex-col items-center text-center">
               <h4 className="text-xl font-serif mb-4">Still have questions?</h4>
               <p className="text-sm text-muted-foreground mb-6">Our architectural consultants are available for a one-on-one discovery session.</p>
               <button className="text-accent font-bold tracking-widest uppercase hover:underline">Contact Expert →</button>
            </div>
          </motion.div>

          {/* Accordion Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`} 
                  className="bg-background border border-border px-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left py-6 text-xl font-serif hover:no-underline hover:text-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 text-muted-foreground leading-relaxed text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
