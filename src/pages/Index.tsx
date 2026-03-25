import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";
import heroImg from "@/assets/hero-clinic.jpg";
import aboutImg from "@/assets/about-wellness.jpg";
import { Phone, MessageCircle, MapPin, Instagram, Mail, Monitor, Users } from "lucide-react";

const WHATSAPP_LINK = "#";
const AGENDAR_LINK = "#";

const Hero = () => (
  <section className="relative min-h-screen flex items-center">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Ambiente premium da clínica Corpo Tua Pele"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
    </div>
    <div className="relative z-10 container mx-auto px-6 lg:px-16">
      <div className="max-w-2xl">
        <img src={logo} alt="Corpo Tua Pele" className="w-40 md:w-52 mb-10 drop-shadow-lg" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-editorial leading-tight text-primary-foreground mb-6 text-balance">
          Medicina, estética e performance com olhar sofisticado e individualizado.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-light mb-10 max-w-lg">
          Cuidado médico premium para corpo, pele e performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={AGENDAR_LINK}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary-foreground/20 transition-all duration-300"
          >
            Agendar consulta
          </a>
          <a
            href={WHATSAPP_LINK}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-foreground text-foreground font-body text-sm tracking-widest uppercase hover:bg-primary-foreground/90 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 md:order-1">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4 font-body">Sobre a clínica</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-editorial text-foreground mb-8 leading-tight">
            Saúde, estética e bem-estar em uma abordagem integrada e personalizada.
          </h2>
          <div className="space-y-5 text-muted-foreground font-light leading-relaxed">
            <p>
              A Corpo Tua Pele nasce da convicção de que o cuidado médico pode — e deve — ser uma experiência refinada. Unimos nutrologia esportiva, ortopedia e dermatologia sob uma visão integrada, onde cada paciente é acolhido com escuta atenta e tratamento individualizado.
            </p>
            <p>
              Nosso compromisso é com a excelência clínica aliada a um ambiente que inspira confiança e conforto. Cada detalhe foi pensado para oferecer uma experiência premium, do primeiro contato ao acompanhamento contínuo.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={aboutImg}
            alt="Bem-estar e cuidado premium"
            loading="lazy"
            width={700}
            height={800}
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

const specialties = [
  {
    title: "Nutrologia Esportiva",
    description: "Estratégias médicas voltadas à performance, composição corporal, energia e longevidade.",
  },
  {
    title: "Ortopedia",
    description: "Cuidado especializado para recuperação, mobilidade, dor e qualidade de vida.",
  },
  {
    title: "Dermatologia",
    description: "Saúde da pele com olhar estético, clínico e preventivo.",
  },
];

const Specialties = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="text-center mb-16 md:mb-20">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4 font-body">Especialidades</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-editorial text-foreground max-w-2xl mx-auto">
          Áreas de atuação com excelência e visão integrada
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {specialties.map((spec) => (
          <div key={spec.title} className="border-t border-border pt-8">
            <h3 className="text-2xl font-editorial text-foreground mb-3">{spec.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed">{spec.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Attendance = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4 font-body">Atendimento</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-editorial text-foreground mb-8">
          Presencial e online, com a mesma atenção aos detalhes.
        </h2>
        <p className="text-muted-foreground font-light leading-relaxed mb-12 max-w-xl mx-auto">
          Flexibilidade e conforto para o seu cuidado. Consultas presenciais em ambiente acolhedor ou atendimento online com a mesma dedicação e proximidade.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-lg mx-auto">
          <div className="flex flex-col items-center p-8 border border-border">
            <Users className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-editorial text-foreground mb-2">Presencial</h3>
            <p className="text-sm text-muted-foreground font-light">Experiência completa em consultório</p>
          </div>
          <div className="flex flex-col items-center p-8 border border-border">
            <Monitor className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-editorial text-foreground mb-2">Online</h3>
            <p className="text-sm text-muted-foreground font-light">Praticidade sem perder qualidade</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Doctor = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4 font-body">Responsável Técnico</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-editorial text-foreground mb-4">
          Dr. Andrei Grassi
        </h2>
        <p className="text-muted-foreground font-light tracking-wide mb-8">
          CRM 201445 &nbsp;|&nbsp; RQE 102345
        </p>
        <div className="w-16 h-px bg-accent mx-auto mb-8" />
        <p className="text-muted-foreground font-light leading-relaxed max-w-lg mx-auto">
          Comprometimento com a medicina baseada em evidências, atendimento humanizado e busca constante pela excelência no cuidado de cada paciente.
        </p>
      </div>
    </div>
  </section>
);

const differentials = [
  { title: "Atendimento individualizado", desc: "Cada paciente é único. Nossos protocolos são desenhados sob medida." },
  { title: "Visão integrada", desc: "Estética, saúde e performance em equilíbrio, com abordagem multidisciplinar." },
  { title: "Estrutura refinada", desc: "Ambiente pensado para conforto, acolhimento e uma experiência premium." },
  { title: "Presencial e online", desc: "Flexibilidade que acompanha sua rotina, sem abrir mão da qualidade." },
  { title: "Experiência acolhedora", desc: "Sofisticação com humanidade em cada etapa do seu cuidado." },
];

const Differentials = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="text-center mb-16 md:mb-20">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4 font-body">Diferenciais</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-editorial text-foreground max-w-2xl mx-auto">
          O que nos diferencia
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-4xl mx-auto">
        {differentials.map((d, i) => (
          <div key={i} className="border-t border-border pt-6">
            <h3 className="text-lg font-editorial text-foreground mb-2">{d.title}</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24 md:py-32 bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-editorial mb-6">
          Agende sua consulta
        </h2>
        <p className="font-light opacity-80 mb-12 leading-relaxed max-w-lg mx-auto">
          Um cuidado médico pensado nos detalhes, com estética, saúde e performance em equilíbrio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={AGENDAR_LINK}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Agendar consulta
          </a>
          <a
            href={WHATSAPP_LINK}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-foreground text-primary font-body text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 text-sm opacity-70">
          <div className="flex flex-col items-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="font-light">(00) 0000-0000</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Mail className="w-5 h-5" />
            <span className="font-light">contato@corpotuapele.com.br</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="font-light">Endereço a definir</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 bg-foreground text-primary-foreground/70">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={logo} alt="Corpo Tua Pele" className="w-32 brightness-0 invert opacity-70 mb-4" />
          <p className="text-sm font-light leading-relaxed">
            Medicina, estética e performance com olhar sofisticado e individualizado.
          </p>
        </div>
        <div>
          <h4 className="text-primary-foreground font-editorial text-lg mb-4">Especialidades</h4>
          <ul className="space-y-2 text-sm font-light">
            <li>Nutrologia Esportiva</li>
            <li>Ortopedia</li>
            <li>Dermatologia</li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary-foreground font-editorial text-lg mb-4">Contato</h4>
          <ul className="space-y-2 text-sm font-light">
            <li>Dr. Andrei Grassi</li>
            <li>CRM 201445 | RQE 102345</li>
            <li className="flex items-center gap-2 pt-2">
              <Instagram className="w-4 h-4" />
              <span>@corpotuapele</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs font-light opacity-50">
        © {new Date().getFullYear()} Corpo Tua Pele. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

const Index = () => (
  <main>
    <Hero />
    <About />
    <Specialties />
    <Attendance />
    <Doctor />
    <Differentials />
    <Contact />
    <Footer />
  </main>
);

export default Index;
