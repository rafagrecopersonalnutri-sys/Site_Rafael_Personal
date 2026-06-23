import { useState } from "react"; 
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  Dumbbell,
  Apple,
  Brain,
  Smartphone,
  CheckCircle2,
  MessageCircle,
  Zap,
  Users,
  TrendingUp,

} from "lucide-react";

// Import da foto do Rafael e do fundo
import fotoRafael from "../assets/Foto_Rafael.jpg";
import fundoSite from "../assets/Fundo_SiteRafael.png";

const WHATSAPP_LINK = "https://wa.me/5511983598420?text=Olá%20Rafael%2C%20quero%20conhecer%20o%20Método%20Xô%20Gordura!";
const WHATSAPP_VIP = "https://wa.me/5511983598420?text=Olá%20Rafael%2C%20quero%20saber%20mais%20sobre%20o%20Acompanhamento%20VIP!";
const WHATSAPP_DESAFIO = "https://wa.me/5511983598420?text=Olá%20Rafael%2C%20quero%20garantir%20minha%20vaga%20no%20Desafio%20Xô%20Gordura!";

export default function Home() {
  // Configuração dos estados e dos caminhos dos prints salvos na pasta public/
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const prints = [
    "/RG_Print01.png",
    "/RG_Print02.png",
    "/RG_Print03.png",
    "/RG_Print04.png",
    "/RG_Print05.png",
    "/RG_Print06.png",
    "/RG_Print07.png",
    "/RG_Print08.png",
    "/RG_Print09.png",
    "/RG_Print010.png",
    "/RG_Print011.png",
    "/RG_Print012.png",
    "/RG_Print013.png",
    "/RG_Print014.png",
    "/RG_Print015.png",
    "/RG_Print016.png",
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${fundoSite})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content */}
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="animate-slide-in-up">
              <h1 className="text-white font-black text-5xl md:text-6xl leading-tight mb-6">
                Mulher, você não precisa sofrer pra emagrecer.
                <span className="bg-gradient-to-r from-[#f60104] to-[#f60104]  bg-clip-text text-transparent"> Precisa do método certo.</span>              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                Eu sou o Rafael Greco, PERSONAL TRAINER e NUTRICIONISTA especialista em emagrecimento feminino.
                Com o Método Xô Gordura, mulheres como você estão perdendo gordura, recuperando
                a autoestima e se sentindo bem no próprio corpo — sem dietas malucas e sem horas
                na academia.
              </p>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-6 rounded-lg flex items-center gap-3 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chamar o Rafael no WhatsApp
                </Button>
              </a>
            </div>

            {/* Image */}
            <div className="hidden lg:flex justify-center animate-slide-in-down">
              <img
                src={fotoRafael}
                alt="Rafael Greco"
                className="rounded-lg max-w-sm h-auto object-cover shadow-[0_0_50px_rgba(246,1,4,0.35)] filter drop-shadow-[0_0_20px_rgba(246,1,4,0.2)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PAIN POINTS */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-950">
        <div className="container">
          <h2 className="text-white text-center mb-16">
            Você se identifica com alguma dessas situações?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Já tentou várias dietas e sempre voltou ao peso anterior",
              "Faz exercício mas não vê resultado no espelho",
              "Sente que seu corpo não responde mais como antes",
              "Não tem tempo pra academia e acha que sem ela não vai emagrecer",
              "Já desistiu de si mesma mais de uma vez",
              "Fica bem por um tempo, mas não consegue manter",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50 border border-red-600/20 hover:border-red-600/50 transition">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-transparent p-8 rounded-lg border border-red-600/30">
            <p className="text-white text-lg md:text-xl">
              <span className="font-bold">Se você marcou pelo menos uma dessas — eu fiz esse método pra você.</span>
              <br />
              <span className="text-gray-300">O problem nunca foi você. Foi a abordagem.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT RAFAEL */}
      <section className="section-padding bg-black">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-white mb-8">Quem é Rafael Greco?</h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Sou <span className="bg-gradient-to-r from-[#f60104] to-[#ed6124] bg-clip-text text-transparent font-bold">PERSONAL TRAINER</span> e <span className="bg-gradient-to-r from-[#f60104] to-[#ed6124] bg-clip-text text-transparent font-bold">NUTRICIONISTA</span> especializado em emagrecimento feminino e sei exatamente o que
                  funciona — e o que não funciona — para o corpo da mulher.
                </p>

                <p>
                  Ao longo da minha carreira, acompanhei centenas de mulheres que chegaram até mim
                  frustradas, sem acreditar mais em si mesmas. E vi cada uma delas transformar não só
                  o corpo, mas a relação que tinham consigo mesmas.
                </p>

                <p>
                  Criei o <span className="bg-gradient-to-r from-[#f60104] to-[#ed6124] bg-clip-text text-transparent font-bold">Método Xô Gordura</span> porque acredito
                  que emagrecer precisa ser possível, sustentável e encaixado na sua rotina real — não na
                  rotina ideal que você não tem.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:flex justify-center animate-slide-in-down">
              <img
                src={fotoRafael}
                alt="Rafael Greco"
                className="rounded-lg max-w-sm h-auto object-cover shadow-[0_0_50px_rgba(246,1,4,0.35)] filter drop-shadow-[0_0_20px_rgba(246,1,4,0.2)]"
              />
            </div>
          </div>

          {/* Authority Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, label: "Alunas Transformadas", value: "500+" },
              { icon: TrendingUp, label: "Anos de Experiência", value: "10+" },
              { icon: Zap, label: "Especialista em", value: "Emagrecimento Feminino" },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="bg-gray-900 border-red-600/30 p-8 text-center hover:border-red-600/60 transition"
              >
                <item.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <p className="text-gray-400 text-sm mb-2">{item.label}</p>
                <p className="text-white text-3xl font-bold">{item.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: METHOD */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-950">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              O que é o <span className="bg-gradient-to-r from-[#f60104] to-[#ed6124] bg-clip-text text-transparent">Método Xô Gordura?</span>
            </h2>            <p className="text-gray-400 text-xl">
              Um sistema criado especialmente para mulheres que querem emagrecer de forma real, sem complicação.
            </p>
          </div>


          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Clock,
                title: "Treinos de até 15 minutos",
                description: "Feitos pra encaixar na sua rotina, em casa ou em qualquer lugar",
              },
              {
                icon: Dumbbell,
                title: "Treine em qualquer lugar",
                description: "Treinos para academia, condomínio ou em casa para utilizar aparelhos ou acessórios",
              },
              {
                icon: Apple,
                title: "Nutrição personalizada",
                description: "Sem dietas genéricas, com orientação feita pra você",
              },
              {
                icon: Brain,
                title: "Psicoterapia alimentar",
                description: "Porque o emocional interfere direto no resultado",
              },
              {
                icon: Smartphone,
                title: "Tudo no seu celular",
                description: "Acesso aos vídeos, treinos e suporte onde você estiver",
              },
            ].map((pillar, idx) => (
              <Card
                key={idx}
                className="bg-gray-900 border-l-4 border-red-600 p-8 hover:shadow-lg hover:shadow-red-600/20 transition"
              >
                <pillar.icon className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-white font-bold text-xl mb-3">{pillar.title}</h3>
                <p className="text-gray-400">{pillar.description}</p>
              </Card>
            ))}
          </div>

          {/* Highlight */}
          <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-8 text-center mb-12">
            <p className="text-white text-xl font-bold italic">
              "Não é mais uma dieta. É um método que respeita quem você é e o tempo que você tem."
            </p>
          </div>

          <div className="text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-8 rounded-lg flex items-center gap-3 mx-auto transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-7 h-7" />
                Quero Conhecer o Método
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: VIP ACCOMPANIMENT */}
      <section id="acompanhamento" className="section-padding bg-black">
        <div className="container">
          <h2 className="text-white text-center mb-4">
            O Acompanhamento VIP Online
          </h2>
          <p className="text-gray-400 text-center text-lg mb-16">
            Tudo que você precisa, do jeito que cabe na sua vida
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                emoji: "📊",
                title: "Avaliação Física Online",
                description: "Descobrimos juntos o melhor treino para acelerar os seus resultados desde o primeiro dia.",
              },
              {
                emoji: "📲",
                title: "App de Treino com Vídeos",
                description: "Acesso a um aplicativo com todos os treinos em vídeo, mostrando a forma correta de cada exercício.",
              },
              {
                emoji: "🎁",
                title: "Bônus: Método Xô Gordura",
                description: "Treinos de 15 minutos para fazer em casa — perfeitos pra dias sem tempo.",
              },
              {
                emoji: "📱",
                title: "Suporte VIP e Ilimitado",
                description: "Acesso ao WhatsApp particular do Rafael para tirar dúvidas sempre que precisar, dentro do horário de atendimento.",
              },
              {
                emoji: "♻️",
                title: "Mudança de Treino Mensal",
                description: "Seu treino é atualizado todo mês para evitar o efeito platô e manter os resultados chegando.",
              },
              {
                emoji: "🍎",
                title: "Acompanhamento Completo MESMO!",
                description: "Personal Trainer, Nutricionista e Grupo VIP exclusivos para você.",
              },
              {
                emoji: "🧠",
                title: "Aulas de Psicoterapia",
                description: "Materiais e aulas para melhorar seu comportamento alimentar and sua relação com o próprio corpo.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="bg-gray-900 border border-red-600/20 p-6 hover:border-red-600/60 transition"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <a href={WHATSAPP_VIP} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-6"
              >
                Quero o Acompanhamento VIP
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: CHALLENGE */}
      <section id="desafio" className="section-padding bg-gradient-to-b from-black to-gray-950 desafio-section">
        <div className="container">
          <div className="mb-8 inline-block bg-gradient-to-r from-[#f60104] to-[#ed6124] text-white px-6 py-2 rounded-full font-bold">
            🔥 VAGAS LIMITADAS — INSCRIÇÕES ABERTAS
          </div>

          <h2 className="text-white mb-4">
            Desafio Xô Gordura
            <br />
            <span className="bg-gradient-to-r from-[#f60104] to-[#ed6124] bg-clip-text text-transparent">Alguns dias para detonar a gordura</span>
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            O desafio que já transformou a rotina de dezenas de mulheres — agora com vagas abertas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "🏋🏻‍♀️ Treinos rápidos e eficazes (15 min) pra fazer em casa ou em qualquer lugar",
              "💪 Treinos para academia, condomínio ou em casa com vídeos",
              "🍎 Acompanhamento nutricional com orientações e cardápio",
              "🔥 Método que acelera a queima de gordura",
              "🧠 Aulas de Psicoterapia para mudança de hábitos e controle do comer emocional",
              "🎁 E-books, vídeos de receitas fit, aulas complementares e conteúdos exclusivos",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-red-600/20">
                <span className="text-2xl flex-shrink-0">{item.split(" ")[0]}</span>
                <p className="text-gray-300">{item.substring(item.indexOf(" ") + 1)}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-600/20 border border-red-600/50 rounded-lg p-8 text-center mb-12">
            <p className="text-red-400 font-bold text-2xl">
              ⚠️ As vagas são limitadas e fecham em breve.
            </p>
          </div>

          <div className="text-center">
            <a href={WHATSAPP_DESAFIO} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-8 rounded-lg flex items-center gap-3 mx-auto transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-7 h-7" />
                Quero Garantir Minha Vaga
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="section-padding bg-black">
        <div className="container">
          <h2 className="text-white text-center mb-16">
            Mulheres reais. <span className="bg-gradient-to-r from-[#f60104] to-[#ed6124] bg-clip-text text-transparent">Resultados reais.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {prints.map((print, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(print)}
                className="relative group overflow-hidden rounded-xl border border-red-600/20 hover:border-[#ed6124]/60 bg-gray-900 cursor-pointer aspect-[3/4] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(246,1,4,0.2)]"
              >
                {/* Imagem do Print */}
                <img
                  src={print}
                  alt={`Resultado ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Camada de efeito por cima (Overlay) */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 group-hover:bg-black/20 transition-all duration-300">
                  <span className="bg-white/10 backdrop-blur-md text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20 tracking-wide group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    Clique para ver
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MODAL / TELA CHEIA AO CLICAR */}
          {activeImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
              onClick={() => setActiveImage(null)}
            >
              <div className="relative max-w-4xl max-h-[90vh] flex items-center justify-center">
                {/* Botão de fechar no topo */}
                <button
                  className="absolute -top-12 right-0 text-white hover:text-red-500 font-bold text-lg bg-gray-900/80 px-4 py-2 rounded-full border border-white/10 transition"
                  onClick={() => setActiveImage(null)}
                >
                  Fechar ✕
                </button>

                <img
                  src={activeImage}
                  alt="Resultado em tamanho grande"
                  className="rounded-lg max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(246,1,4,0.3)] border border-white/5"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section id="faq" className="section-padding bg-gradient-to-b from-black to-gray-950">
        <div className="container max-w-3xl">
          <h2 className="text-white text-center mb-16">Suas dúvidas, respondidas</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Nunca consegui emagrecer de verdade. Vai funcionar pra mim?",
                answer: "Esse é exatamente o perfil de quem o método foi criado. Quem nunca conseguiu resultado foi porque usou abordagens genéricas. Aqui tudo é pensado pra você — seu corpo, sua rotina, seu ritmo.",
              },
              {
                question: "Não tenho tempo para academia nem pra treinar muito.",
                answer: "Ótima notícia: você não precisa. Os treinos do Método Xô Gordura têm até 15 minutos e podem ser feitos em casa, no trabalho, onde você estiver. A consistência bate a intensidade sempre.",
              },
              {
                question: "É caro?",
                answer: "Pensa comigo: quanto você já gastou em dietas, aplicativos, planos que não funcionaram? O acompanhamento VIP tem um custo justo e você tem suporte real, personalizado, comigo e com nutricionista. É investimento, não gasto.",
              },
              {
                question: "Como funciona o atendimento sendo online?",
                answer: "Totalmente pelo celular. Você tem acesso ao app de treinos, ao grupo VIP com nutricionista, às aulas de psicoterapia e ao meu WhatsApp particular. É como ter um personal na sua mão, onde você estiver.",
              },
              {
                question: "E se eu não me adaptar?",
                answer: "Temos mudanças de treino mensais justamente pra isso. O método é ajustado ao longo do processo — você nunca fica presa num protocolo que não funciona pra você.",
              },
            ].map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-gray-900 border border-red-600/20 rounded-lg px-6 data-[state=open]:border-red-600/60 transition"
              >
                <AccordionTrigger className="text-white font-semibold hover:text-red-600 transition py-4">
                  ❓ {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="section-padding bg-black">
        <div className="container max-w-3xl text-center">
          <h2 className="text-white mb-6">
            Chega de tentar sozinha.
            <br />
            <span className="bg-gradient-to-r from-[#f60104] to-[#ed6124] bg-clip-text text-transparent">Você merece suporte de verdade.</span>
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Seja pelo Acompanhamento VIP ou pelo próximo Desafio Xô Gordura, o primeiro passo é o mesmo:
            uma conversa simples, sem compromisso, no WhatsApp.
          </p>

          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-8 rounded-lg flex items-center gap-3 mx-auto transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-7 h-7" />
              Falar com o Rafael Agora
            </Button>
          </a>

          <p className="text-gray-500 text-sm mt-6">
            Sem pressão. Só uma conversa pra entender o que você precisa.
          </p>
        </div>
      </section>

    </div> // Fecha perfeitamente a div principal do container
  );
}
