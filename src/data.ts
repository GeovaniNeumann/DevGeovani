export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  metricValue: string;
  metricLabel: string;
  stack: string[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  timeframe: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  note: string;
  isFeatured?: boolean;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    id: "landing-page",
    number: "01",
    title: "Landing Pages de Alta Conversão",
    description: "Páginas extremamente rápidas e otimizadas focadas em transformar visitantes em leads e clientes. Design exclusivo, sem templates prontos."
  },
  {
    id: "web-systems",
    number: "02",
    title: "Sistemas Web e SaaS",
    description: "Sistemas robustos de gestão, painéis de controle, e plataformas SaaS completas com autenticação, banco de dados e APIs sob medida."
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-commerce & Lojas Virtuais",
    description: "Plataformas de vendas integradas com os principais meios de pagamento (Stripe, Pix, etc) com painel administrativo simples e seguro."
  }
];

export const projects: Project[] = [
  {
    id: "fintech-platform",
    tag: "SAAS / FINTECH",
    title: "Dashboard de Investimentos Prime",
    description: "Sistema web de alta fidelidade visual com atualizações em tempo real, relatórios inteligentes e integração bancária.",
    metricValue: "+420%",
    metricLabel: "Aumento em conversão de leads",
    stack: ["Next.js", "React", "Drizzle ORM", "Tailwind CSS", "Recharts"]
  },
  {
    id: "vendas-ecom",
    tag: "E-COMMERCE",
    title: "Checkout Exclusivo SuperSpeed",
    description: "Checkout de página única focado em mobile, otimizado para carregar em menos de 1 segundo e reduzir o abandono de carrinho.",
    metricValue: "-35%",
    metricLabel: "Redução no abandono de carrinho",
    stack: ["React", "Vite", "Stripe API", "Framer Motion", "Node.js"]
  },
  {
    id: "corporate-portal",
    tag: "INSTITUCIONAL / PORTAL",
    title: "Landing Page Corretora de Seguros",
    description: "Uma experiência digital imersiva para captação de clientes corporativos com formulário inteligente e integração com CRM.",
    metricValue: "99/100",
    metricLabel: "Google Lighthouse Performance Score",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend API"]
  },
  {
    id: "analytics-app",
    tag: "BI & ANALYTICS",
    title: "Plataforma de Monitoramento de Marketing",
    description: "Painel centralizado com ingestão de dados de anúncios, geração de relatórios automatizada e projeções assistidas por IA.",
    metricValue: "+18k",
    metricLabel: "Usuários ativos diariamente",
    stack: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS", "D3.js"]
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Alinhamento Estratégico",
    description: "Reunião de 30 minutos para entender as dores do seu negócio, seus objetivos com o novo site ou sistema, e definir o escopo ideal.",
    timeframe: "Dia 1"
  },
  {
    id: "step-2",
    number: "02",
    title: "Design UX/UI & Escrita de Conversão",
    description: "Criação do layout exclusivo focado na melhor experiência de uso e escrita persuasiva estruturada para guiar o cliente à ação.",
    timeframe: "Semana 1"
  },
  {
    id: "step-3",
    number: "03",
    title: "Desenvolvimento Limpo & Otimização",
    description: "Programação profissional sem construtores lentos (como WordPress/Elementor). Código puro, rápido e extremamente seguro.",
    timeframe: "Semanas 2 e 3"
  },
  {
    id: "step-4",
    number: "04",
    title: "Testes, Entrega & Suporte Contínuo",
    description: "Revisão minuciosa em todos os dispositivos, publicação no servidor mais veloz do mercado e treinamento de uso.",
    timeframe: "Semana 4"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "landing-page-plan",
    name: "Landing Page Premium",
    description: "Para empresas que precisam capturar leads qualificados ou vender um produto/serviço específico rapidamente.",
    price: "Sob Consulta",
    note: "Desenvolvimento focado em conversão extrema",
    features: [
      "Design 100% Exclusivo e Autoral",
      "Otimização extrema de carregamento (Lighthouse 95+)",
      "Redação Persuasiva (Copywriting) inclusa",
      "Integração com WhatsApp, CRM e E-mail",
      "Adaptação perfeita para Celulares (Mobile-first)",
      "Suporte pós-lançamento de 30 dias"
    ]
  },
  {
    id: "institutional-site",
    name: "Site Institucional Completo",
    description: "Ideal para empresas que buscam posicionamento de mercado forte, autoridade digital e apresentação de portfólio.",
    price: "Sob Consulta",
    note: "A maior autoridade para a sua marca",
    isFeatured: true,
    features: [
      "Até 6 Páginas personalizadas",
      "Painel administrativo integrado para atualizações simples",
      "Blog ou Portfólio dinâmico integrado",
      "SEO Técnico Avançado (para ranquear no Google)",
      "Layout e animações interativas sob medida",
      "Configuração de domínio, e-mails e hospedagem"
    ]
  },
  {
    id: "custom-system",
    name: "Sistemas & Plataformas SaaS",
    description: "Para startups ou empresas que necessitam de soluções de software customizadas, integrações de APIs complexas e bancos de dados.",
    price: "Sob Consulta",
    note: "Arquitetura escalável para grandes projetos",
    features: [
      "Desenvolvimento Back-end e Front-end completo",
      "Banco de dados relacional robusto e seguro",
      "Controle de usuários com níveis de permissão",
      "Painéis de controle administrativos com relatórios",
      "Integração com gateways de pagamento (Pix, Cartão)",
      "Hospedagem em nuvem autoescalável (Google Cloud / AWS)"
    ]
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como funciona o processo de orçamento?",
    answer: "Após o primeiro contato, faremos uma conversa rápida via WhatsApp ou videoconferência para mapear a complexidade do projeto. Em até 24 horas úteis, você receberá uma proposta detalhada com escopo, prazos, formas de pagamento e cronograma completo."
  },
  {
    id: "faq-2",
    question: "Qual tecnologia é utilizada no desenvolvimento?",
    answer: "Trabalho principalmente com o ecossistema Next.js, React e TypeScript para o front-end, e Tailwind CSS para a estilização. Para os sistemas, desenvolvo back-ends eficientes integrando bancos de dados de altíssimo desempenho (PostgreSQL, Supabase, Firestore, etc.). Isso garante segurança máxima, estabilidade sob altos volumes de tráfego e velocidade inigualável."
  },
  {
    id: "faq-3",
    question: "O código do projeto me pertence?",
    answer: "Com certeza. 100% dos direitos autorais e do código-fonte do site ou sistema pertencem a você após a quitação. Sem pegadinhas, sem taxas mensais de 'aluguel' de plataforma ou lock-in tecnológico."
  },
  {
    id: "faq-4",
    question: "E se eu precisar de manutenção futura ou novas funcionalidades?",
    answer: "Ofereço suporte completo de 30 dias após a entrega do projeto gratuitamente para garantir que tudo esteja rodando sem problemas. Após esse período, você pode contratar pacotes de manutenção mensal preventiva ou solicitar melhorias pontuais sob demanda."
  }
];
