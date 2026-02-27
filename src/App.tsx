import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Users, 
  ClipboardCheck, 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  MessageSquare,
  ArrowRight,
  HelpCircle,
  Building2,
  Stethoscope,
  Briefcase,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOGO_URL = "https://i.postimg.cc/LqY9MB95/Sem-titulo.png";

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold font-display mb-4 ${light ? 'text-white' : 'text-axion-blue'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`max-w-2xl mx-auto text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className={`h-1 w-20 mx-auto mt-6 rounded-full ${light ? 'bg-axion-orange' : 'bg-axion-orange'}`}
    />
  </div>
);

const Card = ({ icon: Icon, title, description, items }: { icon: any, title: string, description?: string, items?: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
  >
    <div className="w-12 h-12 bg-axion-blue/5 rounded-xl flex items-center justify-center mb-6 text-axion-orange">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-axion-blue mb-4 font-display">{title}</h3>
    {description && <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>}
    {items && (
      <ul className="space-y-3 mt-auto">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
            <CheckCircle2 size={16} className="text-axion-orange shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'NR 1', href: '#nr1' },
    { name: 'Como Atuamos', href: '#atuacao' },
    { name: 'Modelos', href: '#modelos' },
    { name: 'Plataformas', href: '#plataformas' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-axion-blue shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Axion Logo" className="h-12 md:h-16 object-contain" referrerPolicy="no-referrer" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white/80 hover:text-axion-orange font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <a href="https://wa.me/5516993948884?text=Gostaria%20de%20solicitar%20uma%20proposta" target="_blank" rel="noopener noreferrer" className="bg-axion-orange hover:bg-axion-orange-hover text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-axion-orange/20">
                Solicitar Proposta
              </a>
              <a href="https://wa.me/5516993948884?text=gostaria%20de%20agendar%20uma%20Reunião" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-600/20">
                Agendar Reunião
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-axion-blue border-t border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-xl font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                  <a href="https://wa.me/5516993948884?text=Gostaria%20de%20solicitar%20uma%20proposta" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="bg-axion-orange text-white text-center py-4 rounded-xl font-bold">
                    Solicitar Proposta
                  </a>
                  <a href="https://wa.me/5516993948884?text=gostaria%20de%20agendar%20uma%20Reunião" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white text-center py-4 rounded-xl font-bold">
                    Agendar Reunião
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-axion-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Business Meeting" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-axion-blue via-axion-blue/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-axion-orange/20 text-axion-orange rounded-full text-sm font-bold mb-6 border border-axion-orange/30">
              Adequação à NR-1 • Riscos Psicossociais
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight mb-6 text-balance">
              Adequação à NR 1 com Segurança Técnica e Estratégia Jurídica
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Proteja sua empresa de multas, ações trabalhistas e afastamentos recorrentes com uma gestão de riscos baseada em ciência e conformidade legal.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="text-axion-orange" size={20} />
                Não se trata apenas de cumprir uma norma. Proteja-se contra:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Multas e autuações', 'Ações trabalhistas', 'Passivos previdenciários', 'Danos à reputação e riscos à governança corporativa'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle2 size={16} className="text-axion-orange" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5516993948884?text=Gostaria%20de%20solicitar%20uma%20proposta" target="_blank" rel="noopener noreferrer" className="bg-axion-orange hover:bg-axion-orange-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-axion-orange/20">
                Solicitar Diagnóstico Técnico <ArrowRight size={20} />
              </a>
              <a href="https://wa.me/5516993948884?text=gostaria%20de%20agendar%20uma%20Reunião" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Falar com Especialista
              </a>
            </div>
            <p className="mt-6 text-gray-400 text-sm italic">
              * Diagnóstico conduzido por psicólogos com formação em saúde mental e foco em riscos ocupacionais.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-3xl p-10 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-axion-orange rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12">
                <Shield size={48} />
              </div>
              <h3 className="text-2xl font-bold text-axion-blue mb-6 font-display">Sua empresa já está realmente adequada?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ter um PGR formalizado não é garantia de segurança. Muitas empresas falham ao não mapear corretamente os <strong>riscos psicossociais</strong>, que hoje são foco central da fiscalização técnica.
              </p>
              <div className="bg-axion-blue/5 border-l-4 border-axion-orange p-4 rounded-r-xl mb-6">
                <p className="text-axion-blue font-medium italic">
                  "Antecipar-se é estratégia. Gerenciar riscos psicossociais é reduzir passivos antes que eles apareçam no tribunal ou no INSS."
                </p>
              </div>
              <p className="text-axion-blue font-bold flex items-center gap-2">
                <Zap size={20} className="text-axion-orange" /> Antecipe-se e evite problemas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Atuamos */}
      <section id="atuacao" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Atuação estruturada em três pilares que conectam saúde mental, conformidade com a NR-1 e proteção jurídica para a organização.">
            Como a Axion atua
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              icon={ClipboardCheck}
              title="Diagnóstico Técnico"
              items={[
                "Avaliação dos fatores de riscos psicossociais",
                "Análise organizacional e de contexto de trabalho",
                "Identificação de vulnerabilidades e pontos críticos"
              ]}
            />
            <Card 
              icon={Users}
              title="Estruturação e Adequação"
              items={[
                "Inserção formal dos riscos psicossociais no PGR",
                "Relatórios técnicos com linguagem empresarial",
                "Plano de ação com medidas preventivas"
              ]}
            />
            <Card 
              icon={BarChart3}
              title="Gerenciamento Contínuo"
              items={[
                "Monitoramento periódico dos fatores de risco",
                "Atualizações estratégicas conforme mudanças",
                "Indicadores organizacionais",
                "Revisão de medidas de controles",
                "Atualização do Diagnóstico de riscos psicossociais"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Modelos de Gerenciamento */}
      <section id="modelos" className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Modelos adaptados ao porte, maturidade e realidade operacional da sua empresa, com diferentes níveis de acompanhamento técnico.">
            Nossos Modelos de Gerenciamento
          </SectionTitle>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Modelo Online */}
            <div className="border-2 border-gray-100 rounded-3xl p-8 hover:border-axion-orange/30 transition-all flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-axion-blue font-display">Gerenciamento Gravado</h3>
                <p className="text-axion-orange font-bold">100% Online</p>
              </div>
              <p className="text-gray-600 mb-8 text-sm">Ideal para empresas que buscam praticidade, escalabilidade e redução de custo operacional, mantendo aderência técnica à NR-1.</p>
              <ul className="space-y-4 mb-8">
                {['Aplicação digital estruturada', 'Análise técnica dos dados', 'Relatório completo + Plano de ação', 'Entrega de orientações gravadas', 'Atualização anual programada'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="text-axion-blue font-bold italic text-center">"Modelo objetivo, padronizado e eficiente."</p>
              </div>
            </div>

            {/* Modelo Híbrido */}
            <div className="bg-axion-blue rounded-3xl p-8 shadow-2xl shadow-axion-blue/20 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-axion-orange text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest">Mais Popular</div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white font-display">Gerenciamento Híbrido</h3>
                <p className="text-axion-orange font-bold">Online + Reuniões ao Vivo</p>
              </div>
              <p className="text-gray-300 mb-8 text-sm">Modelo estratégico com maior interação técnica, sem necessidade de deslocamento presencial, ideal para alinhar RH, SESMT e jurídico.</p>
              <ul className="space-y-4 mb-8">
                {['Aplicação digital estruturada', 'Relatório técnico detalhado', 'Reuniões online ao vivo com RH/Diretoria', 'Ajustes personalizados no plano', 'Acompanhamento periódico remoto'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={18} className="text-axion-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-white font-bold italic text-center">"Mais profundidade técnica com agilidade."</p>
              </div>
            </div>

            {/* Modelo Premium */}
            <div className="border-2 border-gray-100 rounded-3xl p-8 hover:border-axion-orange/30 transition-all flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-axion-blue font-display">Gerenciamento Premium</h3>
                <p className="text-axion-orange font-bold">Assessoria Presencial</p>
              </div>
              <p className="text-gray-600 mb-8 text-sm">Para empresas que desejam acompanhamento completo e estratégico, com presença técnica em momentos-chave da organização.</p>
              <ul className="space-y-4 mb-8">
                {['Diagnóstico técnico ampliado', 'Entrevistas e reuniões presenciais', 'Estruturação personalizada do PGR', 'Treinamento de lideranças'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="text-axion-blue font-bold italic text-center">"Máximo nível de proteção e suporte."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plataformas de Avaliação */}
      <section id="plataformas" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-axion-blue via-axion-orange to-axion-blue" />
            
            <SectionTitle subtitle="Acesse nossas ferramentas exclusivas de diagnóstico e acompanhamento técnico para sua empresa.">
              Plataformas de Avaliação
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.a 
                href="https://www.axiongerenciamentoderiscos.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-axion-blue text-white hover:bg-axion-blue-light transition-all shadow-lg group"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-axion-orange transition-colors">
                  <BarChart3 size={32} />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold font-display mb-2">Avaliação AXION 1</h4>
                  <p className="text-gray-400 text-sm">Plataforma principal de gerenciamento de riscos</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-axion-orange font-bold text-sm uppercase tracking-widest">
                  Acessar Agora <ArrowRight size={16} />
                </div>
              </motion.a>

              <motion.a 
                href="https://axion90app.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white border-2 border-axion-blue text-axion-blue hover:border-axion-orange transition-all shadow-lg group"
              >
                <div className="w-16 h-16 rounded-full bg-axion-blue/5 flex items-center justify-center group-hover:bg-axion-orange group-hover:text-white transition-colors">
                  <Zap size={32} />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold font-display mb-2">Avaliação Axion 2</h4>
                  <p className="text-gray-500 text-sm">Sistema complementar de diagnóstico rápido</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-axion-blue font-bold text-sm uppercase tracking-widest group-hover:text-axion-orange">
                  Acessar Agora <ArrowRight size={16} />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-axion-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" alt="Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle light subtitle="Psicologia aplicada à gestão de riscos, com base científica, visão empresarial e foco em prevenção de passivos trabalhistas.">
            Diferenciais da Axion
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Metodologia Técnica", desc: "Conduzida por psicólogos com base científica e total aderência à NR-1." },
              { title: "Linguagem Empresarial", desc: "Relatórios claros com respaldo documental para RH, Jurídico e Diretoria." },
              { title: "Escalabilidade", desc: "Modelo aplicável a empresas de pequeno, médio e grande porte." },
              { title: "Foco em ESG", desc: "Integração total com as melhores práticas de governança e sustentabilidade." },
              { title: "Prevenção de Passivos", desc: "Foco real em evitar processos trabalhistas e previdenciários." },
              { title: "Proteção Estratégica", desc: "Não entregamos apenas um documento. Entregamos segurança jurídica." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all"
              >
                <h4 className="text-axion-orange font-bold mb-2 font-display">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Ajudamos organizações de diversos setores a garantir conformidade e segurança.">
            Para quem é o serviço
          </SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Building2, label: "Pequenas Empresas" },
              { icon: Zap, label: "Empresas em Crescimento" },
              { icon: Briefcase, label: "Indústrias" },
              { icon: Stethoscope, label: "Clínicas de Saúde" },
              { icon: Users, label: "Escritórios Corporativos" },
              { icon: Shield, label: "Segurança Jurídica" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center gap-4 hover:shadow-md transition-all">
                <div className="text-axion-orange">
                  <item.icon size={32} />
                </div>
                <p className="font-bold text-axion-blue text-sm leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre e NR1 */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-axion-blue mb-6 font-display">Sobre a Axion</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>A Axion Gestão de Riscos nasceu com um propósito claro: transformar a adequação normativa em estratégia empresarial.</p>
              <p>Atuamos com visão preventiva, técnica e estruturada, alinhando conformidade legal, proteção jurídica e eficiência organizacional.</p>
              <p>Nesse contexto, damos especial atenção às diretrizes da NR-1 voltadas para a gestão dos riscos psicossociais, que impactam diretamente a saúde mental, o bem-estar e a produtividade dos colaboradores. A NR-1 é obrigatória para todas as empresas que possuam empregados regidos pela Consolidação das Leis do Trabalho (CLT) e estabelece a base para a identificação, avaliação e tratamento desses riscos no ambiente de trabalho.</p>
              <p>Mais do que atender uma exigência legal, enxergamos a gestão dos riscos psicossociais como uma oportunidade estratégica: reduzir adoecimentos, mitigar passivos trabalhistas, fortalecer a cultura interna e tornar o ambiente de trabalho mais saudável e sustentável.</p>
              <p className="font-bold text-axion-blue">Acreditamos que prevenção não é custo — é posicionamento estratégico. E a correta aplicação da NR-1, incluindo a abordagem dos riscos psicossociais, é um dos pilares dessa visão.</p>
            </div>
            
            <div className="mt-12 p-8 bg-axion-blue rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-axion-orange/20 rounded-full -mr-16 -mt-16" />
              <h3 id="nr1" className="text-2xl font-bold mb-4 font-display">NR-1 Explicada</h3>
              <p className="text-gray-300 text-sm mb-6">A NR-1 estabelece as diretrizes gerais de segurança e saúde no trabalho. Com as atualizações recentes, tornou-se <strong>obrigatória</strong> a inclusão dos riscos psicossociais no PGR.</p>
              <h4 className="font-bold mb-3 text-axion-orange uppercase text-xs tracking-widest">Exemplos de Fatores:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-axion-orange" /> Assédio Moral</li>
                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-axion-orange" /> Conflitos Interpessoais</li>
                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-axion-orange" /> Sobrecarga de trabalho</li>
                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-axion-orange" /> Metas abusivas</li>
                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-axion-orange" /> Pressão excessiva</li>
                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-axion-orange" /> Falta de apoio da liderança</li>
                <li className="flex items-center gap-2"><ArrowRight size={12} className="text-axion-orange" /> Clima organizacional</li>
              </ul>
            </div>
          </div>

          <div id="faq">
            <h2 className="text-3xl font-bold text-axion-blue mb-8 font-display">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {[
                { q: "Minha empresa é pequena. Preciso me adequar?", a: "Sim, a NR-1 se aplica a todos os portes de empresa, com proporcionalidade técnica." },
                { q: "O serviço pode ser totalmente online?", a: "Sim, temos modelos 100% gravados e modelos híbridos que funcionam perfeitamente à distância." },
                { q: "É obrigado a ter a NR1 em qualquer porte de empresa?", a: "A observância da NR-1 é exigida de toda empresa que possua trabalhadores contratados conforme a Consolidação das Leis do Trabalho (CLT)." },
                { q: "O relatório tem validade jurídica?", a: "Nossos relatórios são estruturados conforme a NR-1 e integrados ao PGR, oferecendo robusto respaldo documental." }
              ].map((item, idx) => (
                <details key={idx} className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                  <summary className="p-6 cursor-pointer flex items-center justify-between list-none">
                    <span className="font-bold text-axion-blue">{item.q}</span>
                    <HelpCircle size={20} className="text-axion-orange group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 text-sm">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-24 bg-axion-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" alt="Building" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
            A fiscalização está evoluindo. <br />
            <span className="text-axion-orange">A prevenção também precisa evoluir.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Adequar-se à NR-1 com estrutura técnica não é apenas cumprir uma obrigação — é proteger pessoas, resultados e reputação. A decisão é de gestão.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/5516993948884?text=Gostaria%20de%20solicitar%20uma%20proposta" target="_blank" rel="noopener noreferrer" className="bg-axion-orange hover:bg-axion-orange-hover text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-axion-orange/30">
              Solicitar Proposta
            </a>
            <a href="https://wa.me/5516993948884?text=gostaria%20de%20agendar%20uma%20Reunião" target="_blank" rel="noopener noreferrer" className="bg-white text-axion-blue hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-white/10">
              Agendar Reunião Estratégica
            </a>
          </div>
        </div>
      </section>

      {/* Contato e Rodapé */}
      <footer id="contato" className="bg-gray-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <img src={LOGO_URL} alt="Axion Logo" className="h-16 mb-6 object-contain" referrerPolicy="no-referrer" />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Consultoria em riscos psicossociais e adequação à NR-1. Profissionais formados em Psicologia, atuando com seriedade e foco em proteção jurídica.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-axion-orange transition-colors">
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 font-display">Links Rápidos</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="hover:text-axion-orange transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 font-display">Contato</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-axion-orange shrink-0" />
                  <a href="mailto:contatoaxiongestaoderiscos@gmail.com" className="hover:text-white transition-colors">contatoaxiongestaoderiscos@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-axion-orange shrink-0" />
                  <a href="tel:+5516993948884" className="hover:text-white transition-colors">(16) 99394-8884</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-axion-orange shrink-0" />
                  <span>Rua 7 de setembro, 2775, Centro, São Carlos-SP. Sala 05</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs">
            <p>© 2026 Axion Gestão de Riscos. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Política de Privacidade</a>
              <a href="#" className="hover:text-white">Termos de Uso</a>
              <a href="#" className="hover:text-white flex items-center gap-1">Voltar ao topo <ArrowRight size={12} className="-rotate-90" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
