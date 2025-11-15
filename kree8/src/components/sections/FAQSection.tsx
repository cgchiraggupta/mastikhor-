import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { faqs, problemSolutions } from '@/data/mockData';

export function FAQSection() {
  return (
    <section id="faqs" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4">
            What's holding you back from choosing us, considering we've already
            addressed these issues?
          </h2>
        </div>

        <div className="space-y-6 mb-16">
          {problemSolutions.map((item) => (
            <Card key={item.id} className="border-border">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center heading-sm">
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-sm mb-4">{item.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold mb-1">Problem</p>
                        <p className="body-md text-muted-foreground">
                          {item.problem}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Solution</p>
                        <p className="body-md text-muted-foreground">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4">Frequently Asked Questions</h2>
          <p className="body-lg text-muted-foreground">
            We Get It—Curiosity Leads to Success! Got questions? That's a great sign.
            Here are some
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={faq.avatarUrl} />
                    <AvatarFallback>{faq.avatarName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="heading-sm">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="flex items-start gap-3">
                  <p className="body-md text-muted-foreground ml-13">
                    {faq.answer}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 ml-13">
                  <p className="body-sm text-muted-foreground">
                    Hi! {faq.avatarName} here
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="heading-sm mb-4">Can't find your answer?</p>
          <a
            href="mailto:contact@sprrrint.com"
            className="text-secondary hover:underline body-lg"
          >
            Send us a Mail - Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}