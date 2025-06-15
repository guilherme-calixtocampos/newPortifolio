const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Dicionário de traduções
const traducoes = {
  pt: {
    home: "Tela Inicial",
    certificados: "Certificados",
    sobreMim: "Sobre mim",
    projetos: "Projetos",

    tituloHome: "Portfólio de Guilherme Calixto Campos",
    descricao1Home: "Olá, me chamo Guilherme e te convido a conhecer um pouco mais sobre mim!",
    descricao2Home: "Sou estudante de Análise e Desenvolvimento de Sistemas com foco em se tornar desenvolvedor.",

    tituloCertificados: "Meus Certificados",
    botaoVerCertificado: "Ver Certificado",
    certificados_items: [
      { img: "assets/c1.png", titulo: "Buscando conhecimentos sobre HTML", descricao: "Curso sobre fundamentos de HTML." },
      { img: "assets/c2.png", titulo: "Aprendendo mais sobre estilização", descricao: "Curso de CSS e layout responsivo." },
      { img: "assets/c3.png", titulo: "Deixando minhas páginas mais interativas", descricao: "Curso introdutório de JavaScript." },
      { img: "assets/c4.png", titulo: "Aprendendo mais a fundo sobre estilização, tags e interação", descricao: "Curso avançado de desenvolvimento web." },
      { img: "assets/certificado.png", titulo: "Formação concluída", descricao: "Conclusão de curso de Gestão de TI na Facens em Sorocaba." }
    ],

    tituloProjetos: "Projetos",
    descricaoProjetos: "Aqui estão alguns dos meus projetos mais recentes, desenvolvidos com diversas tecnologias. Você pode filtrar por tecnologia para encontrar o que mais lhe interessa.",
    filtroPlaceholder: "Filtrar por tecnologia",
    botaoVerProjeto: "Ver Projeto",
    tecnologiasDisponiveis: ["Angular", "HTML", "CSS", "JavaScript", "Java", "TypeScript", "Bootstrap", "Node.js"],
    tecnologiaNomes: {
      Angular: "Angular", HTML: "HTML", CSS: "CSS", JavaScript: "JavaScript",
      Java: "Java", TypeScript: "TypeScript", Bootstrap: "Bootstrap", "Node.js": "Node.js"
    },
    projetos_items: [
      {
        nome: "Fetch API",
        descricao: "Exemplo de uso da Fetch API utilizado em sala de aula",
        tecnologias: ["JavaScript", "Node.js"],
        link: "https://github.com/guilherme-calixtocampos/fetch"
      },
      {
        nome: "DOM Manipulation",
        descricao: "Exemplo de manipulação do DOM com JavaScript",
        tecnologias: ["JavaScript"],
        link: "https://github.com/guilherme-calixtocampos/fetch"
      },
      {
        nome: "APP para cadastro de treino e execução",
        descricao: "Desenvolvido app para cadastro de treino e execução do mesmo no aplicativo, com timer e notificações informando início e fim do treino",
        tecnologias: ["Java"],
        link: "https://github.com/guilherme-calixtocampos/Locadora"
      },
      {
        nome: "Água Insights",
        descricao: "Site com intuito de conscientizar o público infantil e jovem sobre a poluição e sobre o gasto de água",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/guilherme-calixtocampos/Agua-Insights"
      },
      {
        nome: "Locadora",
        descricao: "Desenvolvido sistema para locadoras, este programa tem como foco ajudar nos estudos e botar em prática o que venho aprendendo",
        tecnologias: ["Java"],
        link: "https://github.com/guilherme-calixtocampos/Locadora"
      },
      {
        nome: "Tela simples usando bootstrap",
        descricao: "Tela simples usando bootstrap com intuíto de praticar o que aprendi",
        tecnologias: ["HTML", "Bootstrap"],
        link: "https://github.com/guilherme-calixtocampos/TelaBootstrap"
      },
      {
        nome: "Portfólio",
        descricao: "Desenvolvido e pensado em tudo que aprendi durando meu curso de Análise e Desenvolvimento de Sistemas, este portfólio tem como objetivo mostrar o que aprendi e o que venho aprendendo",
        tecnologias: ["Angular", "HTML", "CSS", "TypeScript", "Bootstrap"],
        link: "https://github.com/guilherme-calixtocampos/newPortifolio"
      }
    ],
    sobreMim_titulo: "Sobre Mim",
    sobreMim_subtitulo: "Suporte Técnico Senior | Desenvolvedor em formação",
    sobreMim_paragrafos: [
      "Olá! Sou Guilherme Calixto Campos, um estudante apaixonado por tecnologia e desenvolvimento web. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Facens, onde tenho adquirido conhecimentos valiosos em programação e design de sistemas.",
      "Sou apaixonado por tecnologia, com experiência em suporte técnico e projetos web. Atualmente curso Gestão de TI na Facens e venho me especializando em desenvolvimento full stack.",
      "Além dos meus estudos, tenho experiência em suporte técnico, o que me proporcionou uma visão ampla sobre a importância da tecnologia no dia a dia das pessoas. Também tenho outras experiências, como aprendiz de TI e estagiário de TI. Experiências essas que me trouxeram muito conhecimento de softwares e hardwares."
    ],
    sobreMim_objetivos_titulo: "Objetivos",
    sobreMim_objetivos: [
      "Meu objetivo é me tornar um desenvolvedor full stack, dominando tanto o front-end quanto o back-end. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer na área de tecnologia. Estou aberto a colaborações e projetos interessantes. Se você está procurando alguém apaixonado por tecnologia e disposto a aprender, entre em contato!"
    ],
    habilidades_titulo: "Habilidades",
    habilidades_categorias: [
      { categoria: "Desenvolvimento Web", icon: "🖥️" },
      { categoria: "Infraestrutura", icon: "🛠️" },
      { categoria: "Ferramentas", icon: "⚙️" },
      { categoria: "Soft Skills", icon: "💡" }
    ],
    habilidades_itens: {
      "Desenvolvimento Web": [
        { nome: 'HTML', nivel: 5 },
        { nome: 'CSS', nivel: 5 },
        { nome: 'Tailwind', nivel: 5 },
        { nome: 'SaSS', nivel: 4 },
        { nome: 'Bootstrap', nivel: 4 },
        { nome: 'JavaScript', nivel: 3 }
      ],
      "Infraestrutura": [
        { nome: "Redes", nivel: 3 },
        { nome: "Helpdesk", nivel: 5 },
        { nome: "Hardware", nivel: 4 },
        { nome: "Sistemas Operacionais", nivel: 4 },
        { nome: "CFTV", nivel: 2 },
        { nome: "No‑Break", nivel: 3 }
      ],
      "Ferramentas": [
        { nome: 'Git', nivel: 4 },
        { nome: 'GitHub', nivel: 4 },
        { nome: 'Figma', nivel: 3 },
        { nome: 'SAP', nivel: 3 },
        { nome: 'GeneXus', nivel: 3 },
        { nome: 'Visual Studio Code', nivel: 5 }
      ],
      "Soft Skills": [
        { nome: 'Comunicação', nivel: 5 },
        { nome: 'Trabalho em Equipe', nivel: 4 },
        { nome: 'Comprometimento', nivel: 4 },
        { nome: 'Proatividade', nivel: 4 },
        { nome: 'Resolução de Problemas', nivel: 4 },
        { nome: 'Aprendizado Contínuo', nivel: 4 },
        { nome: 'Empatia', nivel: 4 },
        { nome: 'Adaptabilidade', nivel: 4 },
        { nome: 'Pensamento Crítico', nivel: 4 },
        { nome: 'Criatividade', nivel: 4 }
      ]
    },
    experiencias_titulo: "Experiências",
    experiencias: [
      {
        cargo: "Suporte Técnico Sênior",
        empresa: "Sistema Wvetro",
        periodo: "2023 - Atual",
        descricao: "Atendimento remoto e presencial, instalação de sistemas, treinamentos em SAP, e consultoria técnica para clientes do segmento vidreiro."
      },
      {
        cargo: "Aprendiz de TI",
        empresa: "Grupo Golphe",
        periodo: "2022 - 2023",
        descricao: "Apoio na gestão de ativos de TI, manutenção de hardware, organização de chamados e suporte a usuários internos."
      },
      {
        cargo: "Estagiário de TI",
        empresa: "Elohim Energia",
        periodo: "2021 - 2022",
        descricao: "Realização de rotinas básicas de TI, auxílio na documentação de processos e suporte técnico a colaboradores."
      }
    ],
    footer_text: "© 2025 Desenvolvido por Guilherme Calixto Campos. Todos os direitos reservados."
  },

  en: {
    home: "Home",
    certificados: "Certificates",
    sobreMim: "About me",
    projetos: "Projects",

    tituloHome: "Guilherme Calixto Campos' Portfolio",
    descricao1Home: "Hi, my name is Guilherme and I invite you to learn more about me!",
    descricao2Home: "I'm a student of Systems Analysis and Development focused on becoming a developer.",

    tituloCertificados: "My Certificates",
    botaoVerCertificado: "View Certificate",
    certificados_items: [
      { img: "assets/c1.png", titulo: "Learning HTML fundamentals", descricao: "Course on HTML fundamentals." },
      { img: "assets/c2.png", titulo: "Learning more about styling", descricao: "Course on CSS and responsive layout." },
      { img: "assets/c3.png", titulo: "Making my pages more interactive", descricao: "Introductory JavaScript course." },
      { img: "assets/c4.png", titulo: "Diving deeper into styling, tags and interaction", descricao: "Advanced web development course." },
      { img: "assets/certificado.png", titulo: "Completed training", descricao: "Completion of IT Management course at Facens in Sorocaba." }
    ],

    tituloProjetos: "Projects",
    descricaoProjetos: "Here are some of my most recent projects, developed with various technologies. You can filter by technology to find what interests you most.",
    filtroPlaceholder: "Filter by technology",
    botaoVerProjeto: "View Project",
    tecnologiasDisponiveis: ["Angular", "HTML", "CSS", "JavaScript", "Java", "TypeScript", "Bootstrap", "Node.js"],
    tecnologiaNomes: {
      Angular: "Angular", HTML: "HTML", CSS: "CSS", JavaScript: "JavaScript",
      Java: "Java", TypeScript: "TypeScript", Bootstrap: "Bootstrap", "Node.js": "Node.js"
    },
    projetos_items: [
      {
        nome: "Fetch API",
        descricao: "Example of using the Fetch API demonstrated in class",
        tecnologias: ["JavaScript", "Node.js"],
        link: "https://github.com/guilherme-calixtocampos/fetch"
      },
      {
        nome: "DOM Manipulation",
        descricao: "Example of DOM manipulation with JavaScript",
        tecnologias: ["JavaScript"],
        link: "https://github.com/guilherme-calixtocampos/fetch"
      },
      {
        nome: "Training Log App",
        descricao: "App built to register and run training sessions with a timer and notifications for start and end",
        tecnologias: ["Java"],
        link: "https://github.com/guilherme-calixtocampos/Locadora"
      },
      {
        nome: "Water Insights",
        descricao: "Website aimed at raising awareness among children and youth about pollution and water usage",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/guilherme-calixtocampos/Agua-Insights"
      },
      {
        nome: "Car Rental System",
        descricao: "System developed for rental companies — focused on learning and applying new skills",
        tecnologias: ["Java"],
        link: "https://github.com/guilherme-calixtocampos/Locadora"
      },
      {
        nome: "Simple Bootstrap Page",
        descricao: "Basic page using Bootstrap to practice what I've learned",
        tecnologias: ["HTML", "Bootstrap"],
        link: "https://github.com/guilherme-calixtocampos/TelaBootstrap"
      },
      {
        nome: "Portfolio",
        descricao: "Portfolio built based on everything I learned during my Systems Analysis and Development course, showcasing my learning journey",
        tecnologias: ["Angular", "HTML", "CSS", "TypeScript", "Bootstrap"],
        link: "https://github.com/guilherme-calixtocampos/newPortifolio"
      }
    ],
    sobreMim_titulo: "About Me",
    sobreMim_subtitulo: "Senior Technical Support | Developer in Training",
    sobreMim_paragrafos: [
      "I am passionate about technology, with experience in technical support and web projects. Currently studying IT Management at Facens, specializing in full stack development.",
      "Hello! I'm Guilherme Calixto Campos, a student passionate about technology and web development. I'm currently studying Systems Analysis and Development at Facens, gaining valuable knowledge in programming and system design.",
      "Besides my studies, I have experience in technical support, which gave me insight into the importance of technology in daily life. I also have roles as an IT apprentice and intern, gaining strong knowledge in software and hardware."
    ],
    sobreMim_objetivos_titulo: "Goals",
    sobreMim_objetivos: [
      "My goal is to become a full stack developer, mastering both front-end and back-end development. I'm always seeking new challenges and growth opportunities in the tech field.",
      "I’m open to collaborations and interesting projects. If you're looking for someone passionate about technology and eager to learn, get in touch!"
    ],
    habilidades_titulo: "Skills",
    habilidades_categorias: [
      { categoria: "Web Development", icon: "🖥️" },
      { categoria: "Infrastructure", icon: "🛠️" },
      { categoria: "Tools", icon: "⚙️" },
      { categoria: "Soft Skills", icon: "💡" }
    ],
    habilidades_itens: {
      "Web Development": [
        { nome: 'HTML', nivel: 5 },
        { nome: 'CSS', nivel: 5 },
        { nome: 'Tailwind', nivel: 5 },
        { nome: 'SaSS', nivel: 4 },
        { nome: 'Bootstrap', nivel: 4 },
        { nome: 'JavaScript', nivel: 3 }
      ],
      "Infrastructure": [
        { nome: "Networking", nivel: 3 },
        { nome: "Helpdesk", nivel: 5 },
        { nome: "Hardware", nivel: 4 },
        { nome: "Operating Systems", nivel: 4 },
        { nome: "CFTV", nivel: 2 },
        { nome: "UPS", nivel: 3 }
      ],
      "Tools": [
        { nome: 'Git', nivel: 4 },
        { nome: 'GitHub', nivel: 4 },
        { nome: 'Figma', nivel: 3 },
        { nome: 'SAP', nivel: 3 },
        { nome: 'GeneXus', nivel: 3 },
        { nome: 'Visual Studio Code', nivel: 5 }
      ],
      "Soft Skills": [
        { nome: 'Communication', nivel: 5 },
        { nome: 'Teamwork', nivel: 4 },
        { nome: 'Dedication', nivel: 4 },
        { nome: 'Proactivity', nivel: 4 },
        { nome: 'Problem Solving', nivel: 4 },
        { nome: 'Continuous Learning', nivel: 4 },
        { nome: 'Empathy', nivel: 4 },
        { nome: 'Adaptability', nivel: 4 },
        { nome: 'Critical Thinking', nivel: 4 },
        { nome: 'Creativity', nivel: 4 }
      ]
    },
    experiencias_titulo: "Experiences",
    experiencias: [
      {
        cargo: "Senior Technical Support",
        empresa: "Sistema Wvetro",
        periodo: "2023 - Present",
        descricao: "Remote and on-site support, system installation, SAP training, and technical consulting for glass industry clients."
      },
      {
        cargo: "IT Apprentice",
        empresa: "Grupo Golphe",
        periodo: "2022 - 2023",
        descricao: "Support for IT asset management, hardware maintenance, ticketing, and assistance to internal users."
      },
      {
        cargo: "IT Intern",
        empresa: "Elohim Energia",
        periodo: "2021 - 2022",
        descricao: "Routine IT tasks, process documentation assistance, and technical support for staff."
      }
    ],
    footer_text: "© 2025 Developed by Guilherme Calixto Campos. All rights reserved."
  },

es: {
  home: "Pantalla de inicio",
  certificados: "Certificados",
  sobreMim: "Sobre mí",
  projetos: "Proyectos",

  tituloHome: "Portafolio de Guilherme Calixto Campos",
  descricao1Home: "¡Hola! Me llamo Guilherme y te invito a conocerte un poco más.",
  descricao2Home: "Soy estudiante de Análisis y Desarrollo de Sistemas enfocado en convertirme en desarrollador.",

  tituloCertificados: "Mis Certificados",
  botaoVerCertificado: "Ver Certificado",
  certificados_items: [
    { img: "assets/c1.png", titulo: "Aprendiendo fundamentos de HTML", descricao: "Curso sobre fundamentos de HTML." },
    { img: "assets/c2.png", titulo: "Aprendiendo más sobre estilización", descricao: "Curso de CSS y diseño responsivo." },
    { img: "assets/c3.png", titulo: "Haciendo mis páginas más interactivas", descricao: "Curso introductorio de JavaScript." },
    { img: "assets/c4.png", titulo: "Profundizando en estilización, etiquetas e interacción", descricao: "Curso avanzado de desarrollo web." },
    { img: "assets/certificado.png", titulo: "Formación completada", descricao: "Finalización del curso de Gestión de TI en Facens en Sorocaba." }
  ],

  tituloProjetos: "Proyectos",
  descricaoProjetos: "Aquí están algunos de mis proyectos más recientes, desarrollados con diversas tecnologías. Puedes filtrar por tecnología para encontrar lo que más te interese.",
  filtroPlaceholder: "Filtrar por tecnología",
  botaoVerProjeto: "Ver Proyecto",
  tecnologiasDisponiveis: ["Angular", "HTML", "CSS", "JavaScript", "Java", "TypeScript", "Bootstrap", "Node.js"],
  tecnologiaNomes: {
    Angular: "Angular", HTML: "HTML", CSS: "CSS", JavaScript: "JavaScript",
    Java: "Java", TypeScript: "TypeScript", Bootstrap: "Bootstrap", "Node.js": "Node.js"
  },
  projetos_items: [
    {
      nome: "Fetch API",
      descricao: "Ejemplo de uso de la Fetch API mostrado en clase",
      tecnologias: ["JavaScript", "Node.js"],
      link: "https://github.com/guilherme-calixtocampos/fetch"
    },
    {
      nome: "DOM Manipulation",
      descricao: "Ejemplo de manipulación del DOM con JavaScript",
      tecnologias: ["JavaScript"],
      link: "https://github.com/guilherme-calixtocampos/fetch"
    },
    {
      nome: "App de registro de entrenamientos",
      descricao: "App creada para registrar y realizar entrenamientos con temporizador y notificaciones de inicio y fin",
      tecnologias: ["Java"],
      link: "https://github.com/guilherme-calixtocampos/Locadora"
    },
    {
      nome: "Agua Insights",
      descricao: "Sitio web destinado a concienciar a niños y jóvenes sobre la contaminación y el consumo de agua",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/guilherme-calixtocampos/Agua-Insights"
    },
    {
      nome: "Sistema de alquiler de autos",
      descricao: "Sistema desarrollado para agencias de alquiler — enfocado en el estudio y práctica de nuevas habilidades",
      tecnologias: ["Java"],
      link: "https://github.com/guilherme-calixtocampos/Locadora"
    },
    {
      nome: "Página simple con Bootstrap",
      descricao: "Página básica usando Bootstrap para practicar lo aprendido",
      tecnologias: ["HTML", "Bootstrap"],
      link: "https://github.com/guilherme-calixtocampos/TelaBootstrap"
    },
    {
      nome: "Portafolio",
      descricao: "Portafolio creado basándome en todo lo aprendido durante mi carrera en Análisis y Desarrollo de Sistemas, mostrando mi proceso de aprendizaje",
      tecnologias: ["Angular", "HTML", "CSS", "TypeScript", "Bootstrap"],
      link: "https://github.com/guilherme-calixtocampos/newPortifolio"
    }
  ],

  sobreMim_titulo: "Sobre Mí",
  sobreMim_subtitulo: "Soporte Técnico Senior | Desarrollador en formación",
  sobreMim_paragrafos: [
    "Me apasiona la tecnología, con experiencia en soporte técnico y proyectos web. Actualmente estudio Gestión de TI en Facens y me estoy especializando en desarrollo full stack.",
    "¡Hola! Soy Guilherme Calixto Campos, un estudiante apasionado por la tecnología y el desarrollo web. Actualmente estudio Análisis y Desarrollo de Sistemas en Facens, donde estoy adquiriendo conocimientos valiosos en programación y diseño de sistemas.",
    "Además de mis estudios, tengo experiencia en soporte técnico, lo que me brindó una visión amplia sobre la importancia de la tecnología en la vida diaria. También tuve roles como aprendiz de TI y pasante, adquiriendo sólidos conocimientos en software y hardware."
  ],

  sobreMim_objetivos_titulo: "Objetivos",
  sobreMim_objetivos: [
    "Mi objetivo es convertirme en desarrollador full stack, dominando tanto el front‑end como el back‑end. Estoy siempre en busca de nuevos desafíos y oportunidades para crecer en tecnología.",
    "Estoy abierto a colaboraciones y proyectos interesantes. Si buscas a alguien apasionado por la tecnología y con ganas de aprender, ¡contáctame!"
  ],

  habilidades_titulo: "Habilidades",
  habilidades_categorias: [
    { categoria: "Desarrollo Web", icon: "🖥️" },
    { categoria: "Infraestructura", icon: "🛠️" },
    { categoria: "Herramientas", icon: "⚙️" },
    { categoria: "Soft Skills", icon: "💡" }
  ],
  habilidades_itens: {
    "Desarrollo Web": [
      { nome: 'HTML', nivel: 5 },
      { nome: 'CSS', nivel: 5 },
      { nome: 'Tailwind', nivel: 5 },
      { nome: 'SaSS', nivel: 4 },
      { nome: 'Bootstrap', nivel: 4 },
      { nome: 'JavaScript', nivel: 3 }
    ],
    "Infraestructura": [
      { nome: "Redes", nivel: 3 },
      { nome: "Helpdesk", nivel: 5 },
      { nome: "Hardware", nivel: 4 },
      { nome: "Sistemas Operativos", nivel: 4 },
      { nome: "CFTV", nivel: 2 },
      { nome: "No-Break", nivel: 3 }
    ],
    "Herramientas": [
      { nome: 'Git', nivel: 4 },
      { nome: 'GitHub', nivel: 4 },
      { nome: 'Figma', nivel: 3 },
      { nome: 'SAP', nivel: 3 },
      { nome: 'GeneXus', nivel: 3 },
      { nome: 'Visual Studio Code', nivel: 5 }
    ],
    "Soft Skills": [
      { nome: "Comunicación", nivel: 5 },
      { nome: "Trabajo en equipo", nivel: 4 },
      { nome: "Dedicación", nivel: 4 },
      { nome: "Proactividad", nivel: 4 },
      { nome: "Resolución de problemas", nivel: 4 },
      { nome: "Aprendizaje continuo", nivel: 4 },
      { nome: "Empatía", nivel: 4 },
      { nome: "Adaptabilidad", nivel: 4 },
      { nome: "Pensamiento crítico", nivel: 4 },
      { nome: "Creatividad", nivel: 4 }
    ]
  },

  experiencias_titulo: "Experiencias",
  experiencias: [
    {
      cargo: "Soporte Técnico Senior",
      empresa: "Sistema Wvetro",
      periodo: "2023 - Actual",
      descricao: "Atención remota y presencial, instalación de sistemas, capacitación en SAP y consultoría técnica para clientes del sector vidriero."
    },
    {
      cargo: "Aprendiz de TI",
      empresa: "Grupo Golphe",
      periodo: "2022 - 2023",
      descricao: "Apoyo en gestión de activos de TI, mantenimiento de hardware, organización de tickets y soporte a usuarios internos."
    },
    {
      cargo: "Pasantía de TI",
      empresa: "Elohim Energia",
      periodo: "2021 - 2022",
      descricao: "Realización de tareas básicas de TI, apoyo en documentación de procesos y soporte técnico al personal."
    }
  ],

  footer_text: "© 2025 Desarrollado por Guilherme Calixto Campos. Todos los derechos reservados."
}
};

// Rota de tradução
app.post('/traduzir', (req, res) => {
  const idioma = req.body.idioma;

  if (traducoes[idioma]) {
    res.json(traducoes[idioma]);
  } else {
    res.status(404).json({ error: 'Idioma não encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
