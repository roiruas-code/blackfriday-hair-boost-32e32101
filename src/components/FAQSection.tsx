import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o desconto de Black Friday?",
    answer:
      "Durante a Black Friday, oferecemos 70% OFF em todos os kits Phoenix Hair. O desconto é aplicado automaticamente no checkout e válido apenas durante o período promocional. Não perca essa oportunidade única!",
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer:
      "A maioria dos nossos clientes relata os primeiros resultados visíveis entre 15 a 30 dias de uso contínuo. Para resultados completos, recomendamos o uso por 90 dias. Cada organismo responde de forma única, mas temos 98% de taxa de sucesso.",
  },
  {
    question: "Phoenix Hair tem efeitos colaterais?",
    answer:
      "Phoenix Hair é desenvolvido com fórmula dermatologicamente testada e aprovada pela ANVISA. Não possui efeitos colaterais conhecidos. É seguro para uso diário e compatível com todos os tipos de cabelo. Em caso de dúvidas, consulte um dermatologista.",
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer:
      "Oferecemos 100% de garantia de satisfação. Se você não estiver completamente satisfeito com os resultados em 30 dias, devolvemos seu dinheiro sem fazer perguntas. É simples, rápido e você não corre nenhum risco.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer:
      "Aceitamos todas as principais bandeiras de cartão de crédito (Visa, Mastercard, Elo, American Express) com parcelamento em até 12x sem juros. Também aceitamos PIX com desconto adicional e boleto bancário.",
  },
  {
    question: "Quanto tempo demora a entrega?",
    answer:
      "A entrega é realizada em todo o Brasil. Para capitais e regiões metropolitanas, o prazo é de 5 a 10 dias úteis. Para demais localidades, de 7 a 15 dias úteis. Você receberá o código de rastreamento por e-mail assim que o pedido for despachado.",
  },
];

export const FAQSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-primary/5 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold-light rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Dúvidas Frequentes
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre Phoenix Hair e aproveite a Black Friday
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 md:p-8 shadow-2xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gold/10 rounded-xl px-6 hover:border-gold/30 transition-colors bg-gradient-to-r from-black/50 to-primary/10"
              >
                <AccordionTrigger className="text-left hover:text-gold transition-colors hover:no-underline py-6">
                  <span className="font-semibold text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/30 rounded-2xl p-8 backdrop-blur-sm">
          <p className="text-lg mb-2">
            <span className="text-foreground">Ainda tem dúvidas?</span>
          </p>
          <p className="text-muted-foreground">
            Entre em contato com nosso suporte via WhatsApp. Estamos disponíveis 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};
