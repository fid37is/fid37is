'use client'
import React, { useState, useEffect, useRef, RefObject } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, ExternalLink, Calendar, Code, TestTube, Palette, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { DesignDevShowcase } from './components/DesignDevShowcase';
import { BlogSection } from './components/BlogSection';


// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollY, setScrollY] = useState<number>(0);

  // Refs for each section
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation scroll function with proper TypeScript types
  const scrollToSection = (sectionRef: RefObject<HTMLElement | HTMLDivElement | null>, sectionName: string) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionName);
  };

  const skills = {
    'QA & Testing': {
      icon: <TestTube className="w-6 h-6" />,
      skills: ['Cypress', 'Postman', 'API Testing', 'Automated Testing', 'Manual Testing', 'TestRail', 'Regression Testing']
    },
    'Development': {
      icon: <Code className="w-6 h-6" />,
      skills: ['JavaScript', 'React.js', 'Vue.js', 'TypeScript', 'HTML5/CSS3', 'REST APIs']
    },
    'UI/UX Design': {
      icon: <Palette className="w-6 h-6" />,
      skills: ['Figma', 'Adobe XD', 'User Research', 'A/B Testing', 'Responsive Design', 'Design Systems']
    },
    'DevOps & Tools': {
      icon: <Settings className="w-6 h-6" />,
      skills: ['Jenkins', 'Docker', 'CI/CD', 'Git/GitHub', 'JIRA', 'Agile/Scrum']
    }
  };

  const projects = [
    {
      title: "End-to-End Test Automation Framework",
      role: "Senior Test Engineer",
      company: "Baobab Partners",
      tools: ["Cypress", "Jenkins", "JavaScript", "CI/CD"],
      problem: "Manual regression testing was consuming 80% of release cycle time, causing deployment delays and increased risk of bugs in production.",
      contribution: "Architected and implemented comprehensive test automation framework with parallel execution, integrated with CI/CD pipeline, and established automated reporting dashboard.",
      outcome: "Reduced regression testing runtime by 70% and improved deployment efficiency by 40%",
      metrics: [
        { label: "Testing Time Reduction", value: "70%" },
        { label: "Deployment Efficiency", value: "+40%" },
        { label: "API Test Coverage", value: "90%" }
      ]
    },
    {
      title: "Cross-Platform UI/UX Optimization",
      role: "UI/UX Designer & QA Lead",
      company: "Freelance Projects",
      tools: ["Figma", "Adobe XD", "A/B Testing", "User Research"],
      problem: "Client applications had poor user engagement and conversion rates due to inconsistent UI patterns and suboptimal user flows.",
      contribution: "Conducted comprehensive user research, created user personas, designed responsive interfaces, and implemented A/B testing strategies for data-driven design decisions.",
      outcome: "Improved user engagement by 40% and increased conversion rates by 25%",
      metrics: [
        { label: "User Engagement", value: "+40%" },
        { label: "Conversion Rate", value: "+25%" },
        { label: "Client Projects", value: "15+" }
      ]
    },
    {
      title: "Performance Testing & Optimization",
      role: "Senior Test Engineer",
      company: "Baobab Partners",
      tools: ["Performance Testing Tools", "Jenkins", "Monitoring"],
      problem: "Application response times were causing user frustration and potential revenue loss during peak usage periods.",
      contribution: "Implemented comprehensive performance testing strategies, established monitoring dashboards, and collaborated with DevOps team for optimization.",
      outcome: "Achieved 30% improvement in application response time and 98% test coverage",
      metrics: [
        { label: "Response Time", value: "+30%" },
        { label: "Test Coverage", value: "98%" },
        { label: "Team Efficiency", value: "+25%" }
      ]
    }
  ];

  const experience = [
    {
      title: "Senior Test Engineer",
      company: "Baobab Partners",
      period: "Aug 2023 - Feb 2025",
      type: "Remote",
      highlights: [
        "Led team of 3 QA engineers with mentorship and technical guidance",
        "Architected end-to-end test automation framework",
        "Established automated API testing suite with 90% coverage",
        "Collaborated with DevOps team on CI/CD integration"
      ]
    },
    {
      title: "Software Tester",
      company: "Baobab Partners",
      period: "Feb 2021 - Aug 2023",
      type: "Remote",
      highlights: [
        "Created and maintained 200+ test cases",
        "Achieved 98% test coverage across critical features",
        "Implemented test case management system",
        "Conducted comprehensive cross-browser testing"
      ]
    },
    {
      title: "UI/UX Designer",
      company: "Freelance",
      period: "May 2021 - Present",
      type: "Remote",
      highlights: [
        "15+ client projects with user research and personas",
        "40% improvement in user engagement metrics",
        "25% increase in conversion rates through A/B testing",
        "Comprehensive design systems and style guides"
      ]
    }
  ];

  const certifications = [
    "Great Learning Certified Product Manager",
    "DevCareer & UK-Nigeria Techhub Certified Product Manager",
    "Udacity Certified Agile Software Tester",
    "ISTQB Certified Tester Foundation Level (In Progress)"
  ];

  const currentLearning = [
    "Advanced DevOps practices in testing environments",
    "SAP testing methodologies and tools",
    "Kubernetes for test environment orchestration",
    "Security testing and penetration testing basics"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              Fidelis Agba
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', ref: homeRef },
                { name: 'About', ref: aboutRef },
                { name: 'Projects', ref: projectsRef },
                { name: 'Showcase', ref: showcaseRef },
                { name: 'Experience', ref: experienceRef },
                { name: 'Skills', ref: skillsRef },
                { name: 'Blog', ref: blogRef },
                { name: 'Contact', ref: contactRef }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref, item.name.toLowerCase())}
                  className={`hover:text-[#0090FF] transition-colors font-medium ${activeSection === item.name.toLowerCase() ? 'text-[#0081E4]' : 'text-gray-600'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center relative pb-20 pt-20 md:pt-0">
        <div className="text-center z-10 max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-gray-900 row-end-2">
              <span className="block text-3xl">A Versatile</span>
              <span className="block text-[#0090FF]">Tech Professional</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Where Quality Assurance meets Frontend Development and UI/UX Design.
              5+ years of expertise creating seamless experiences from concept to code to testing.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <span className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-4xl font-medium text-sm sm:text-base">
              QA Engineering
            </span>
            <span className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-4xl font-medium text-sm sm:text-base">
              Frontend Development
            </span>
            <span className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-4xl font-medium text-sm sm:text-base">
              UI/UX Design
            </span>
            <span className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-4xl font-medium text-sm sm:text-base">
              Full-Stack Workflow
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8">
            <button
              onClick={() => scrollToSection(contactRef, 'contact')}
              className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#0090FF] hover:bg-[#0081E4] text-white rounded-4xl transition-all duration-300 font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
            <a
              href="https://knowfidelis.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-4xl transition-all duration-300 font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Archives</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I&apos;m a unique multi-disciplinary professional who bridges the gap between design, development, and quality assurance.
                My journey spans from crafting intuitive user experiences to building robust frontend applications and ensuring
                flawless quality through comprehensive testing strategies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                What sets me apart is my ability to see the complete picture - from understanding user needs through design research,
                translating those insights into functional code, and then rigorously testing to ensure excellence. This holistic
                approach has enabled me to reduce testing time by 70%, improve user engagement by 40%, and lead cross-functional teams effectively.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently exploring advanced DevOps practices and modern testing methodologies to further streamline the
                design-to-deployment pipeline.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-white border border-gray-200 rounded-4xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Key Achievements</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">70% reduction in regression testing time</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">90% API test coverage implementation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">40% improvement in user engagement</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Led team of 3 QA engineers</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-blue-50 border border-blue-100 rounded-4xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Current Focus</h3>
                <div className="space-y-3">
                  {currentLearning.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Featured QA Projects
          </h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-4xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-blue-600 mb-4 font-medium">{project.role} • {project.company}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-600 mb-2">Solution</h4>
                        <p className="text-gray-600">{project.contribution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Impact</h4>
                        <p className="text-gray-600">{project.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-6 bg-gray-50 border border-gray-200 rounded-4xl">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                        <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design & Development Showcase */}
      <div ref={showcaseRef}>
        <DesignDevShowcase />
      </div>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-4xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company} • {exp.type}</p>
                  </div>
                  <div className="flex items-center text-gray-500 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, data], index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-4xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 mr-3">{data.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                </div>
                <div className="space-y-2">
                  {data.skills.map((skill, i) => (
                    <div key={i} className="text-gray-700 text-sm py-2 px-3 bg-gray-50 rounded font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <div ref={blogRef}>
        <BlogSection />
      </div>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Certifications & Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-4xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-4xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Bachelor of Science in Computer Science</h4>
                  <p className="text-gray-600">University of Calabar, Nigeria</p>
                  <p className="text-gray-500">2009 - 2012</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h5 className="font-medium text-blue-600 mb-2">Final Year Project</h5>
                  <p className="text-gray-600 text-sm">Developed a web application that monitors electricity usage of home appliances</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to discuss how multi-disciplinary expertise can transform your project?
            Let&apos;s explore opportunities together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:mistarfid@gmail.com"
              className="flex flex-col items-center p-8 bg-white border border-gray-200 rounded-4xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <span className="text-gray-700 font-medium">mistarfid@gmail.com</span>
            </a>

            <a
              href="tel:+2348085952266"
              className="flex flex-col items-center p-8 bg-white border border-gray-200 rounded-4xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Phone className="w-8 h-8 text-green-600 mb-4" />
              <span className="text-gray-700 font-medium">+234 808 595 2266</span>
            </a>

            <a
              href="https://linkedin.com/in/fid37is"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-white border border-gray-200 rounded-4xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Linkedin className="w-8 h-8 text-blue-600 mb-4" />
              <span className="text-gray-700 font-medium">LinkedIn Profile</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/fid37is"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-4xl transition-all duration-300 font-medium"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://knowfidelis.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-[#0090FF] hover:bg-[#0081E4] text-white rounded-4xl transition-all duration-300 font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Archives</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2025 Fidelis Agba. Crafted with precision and passion for quality across design, development, and testing.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;