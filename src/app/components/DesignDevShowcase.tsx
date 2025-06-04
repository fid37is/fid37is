'use client'
import React, { useState } from 'react';
import { Github, Code, Palette, ArrowRight, Eye, TrendingUp, Zap, Layers, Paintbrush, Target, Search, Puzzle } from 'lucide-react';

// Design & Development Showcase Component
export const DesignDevShowcase = () => {
    const [activeTab, setActiveTab] = useState('design');

    const designProjects = [
        {
            title: "E-commerce Mobile App Redesign",
            category: "UI/UX Design",
            client: "RetailCorp",
            tools: ["Figma", "Adobe XD", "Principle", "UserTesting"],
            challenge: "Low conversion rates and poor user retention on mobile platform",
            solution: "Conducted user research, created personas, redesigned user flow with focus on simplified checkout process",
            results: {
                "Conversion Rate": "+35%",
                "User Retention": "+50%",
                "Task Completion": "+40%"
            },
            features: ["User Research", "Wireframing", "Prototyping", "A/B Testing"],
            icon: Paintbrush,
            status: "Live"
        },
        {
            title: "SaaS Dashboard Design System",
            category: "Design Systems",
            client: "TechStartup Inc",
            tools: ["Figma", "Storybook", "Design Tokens"],
            challenge: "Inconsistent UI across multiple products causing user confusion",
            solution: "Built comprehensive design system with reusable components and clear guidelines",
            results: {
                "Development Speed": "+60%",
                "Design Consistency": "95%",
                "Developer Adoption": "100%"
            },
            features: ["Component Library", "Design Tokens", "Documentation", "Accessibility"],
            icon: Target,
            status: "In Use"
        },
        {
            title: "Healthcare Portal UX Research",
            category: "User Research",
            client: "MedTech Solutions",
            tools: ["User Interviews", "Surveys", "Heatmaps", "Analytics"],
            challenge: "High user drop-off rates and support tickets for portal navigation",
            solution: "Comprehensive UX audit with user testing and data analysis",
            results: {
                "Support Tickets": "-70%",
                "User Satisfaction": "+45%",
                "Time on Task": "-30%"
            },
            features: ["User Testing", "Journey Mapping", "Persona Development", "Usability Analysis"],
            icon: Search,
            status: "Completed"
        }
    ];

    const developmentProjects = [
        {
            title: "QAID - All-In-One Test Management",
            category: "Full-Stack Development",
            tech: ["React", "Next.js", "Firebase", "Google APIs", "Sheets/Drive"],
            description: "Built a platform for managing the entire software testing lifecycle. From test case creation to defect tracking, AI-powered test generation, screen recording, and insightful quality metrics.",
            features: ["Real-time editing", "File management", "Team chat", "Version control"],
            metrics: {
                "Performance Score": "95/100",
                "Test Coverage": "92%",
                "Load Time": "<2s"
            },
            github: "https://github.com/kweid-platfrom/frontend/blob/main/README.md",
            demo: "https://qaid-phi.vercel.app/",
            status: "In Works"
        },
        {
            title: "E-commerce - ToolUp Store ",
            category: "Frontend + Backend + Testing",
            tech: ["React.js", "Cypress", "Next.js", "TypeScript", "Socket.io", "Google APIs"],
            description: "Developed a Next.js-based e-commerce frontend connected to a backend inventory management system. Utilized Google Sheets API for dynamic inventory storage and Google Drive for image handling. Orders placed on the store are automatically pushed to the inventory system via structured API sync.",
            features: ["Automated testing", "Visual regression", "Performance monitoring", "CI/CD integration"],
            metrics: {
                // "Bug Detection": "+80%",
                // "Testing Speed": "5x faster",
                // "Coverage": "95%"
                "Performance Score": "92/100",
                "Test Coverage": "87%",
                "Load Time": "<4s"
            },
            github: "https://github.com/fid37is",
            demo: "#",
            status: "Active"
        },
        {
            title: "Design System Implementation",
            category: "React Component Library",
            tech: ["React", "TypeScript", "Storybook", "Styled Components"],
            description: "Transformed Figma designs into production-ready React components with testing",
            features: ["Component library", "Interactive docs", "Automated testing", "Accessibility compliance"],
            metrics: {
                "Components": "40+",
                "Test Coverage": "98%",
                "Bundle Size": "< 100KB"
            },
            github: "https://github.com/fid37is/capitol-tours.git",
            demo: "https://www.capitolhospitality.info/",
            icon: Puzzle,
            status: "Maintained"
        }
    ];

    const fullStackProjects = [
        {
            title: "Project Management Suite",
            description: "End-to-end project: Designed → Developed → Tested",
            workflow: ["User Research", "UI Design", "Frontend Dev", "Backend API", "Testing", "Deployment"],
            tech: ["React", "Express.js", "MongoDB", "Figma", "Cypress"],
            role: "Full-Stack Designer-Developer",
            impact: "Streamlined project workflows and improved team collaboration"
        }
    ];

    return (
        <section className="py-20 bg-[#f9f9f9]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Design & Development Showcase
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Design thinking meets technical execution - showcasing the complete journey from concept to code
                    </p>
                </div>

                {/* Enhanced Tab Navigation - Fully Horizontal */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white shadow-sm border border-gray-200 rounded-4xl">
                        {[
                            { id: 'design', label: 'UI/UX Design', icon: <Palette className="w-5 h-5" /> },
                            { id: 'development', label: 'Frontend Dev', icon: <Code className="w-5 h-5" /> },
                            { id: 'fullstack', label: 'Full-Stack', icon: <Zap className="w-5 h-5" /> }
                        ].map((tab, index) => {
                            // Define radius classes based on position
                            let radiusClass = '';
                            if (index === 0) radiusClass = 'rounded-l-4xl'; // First button - left radius only
                            else if (index === 1) radiusClass = ''; // Middle button - no radius
                            else if (index === 2) radiusClass = 'rounded-r-4xl'; // Last button - right radius only

                            return (
                                <button type='button'
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`inline-flex items-center justify-center space-x-2 px-6 py-3 ${radiusClass} font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                                            ? 'bg-[#0090FF] hover:bg-[#0081E4] text-white shadow-md transform scale-105'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {tab.icon}
                                    <span className="hidden sm:inline">{tab.label}</span>
                                    <span className="sm:hidden">
                                        {tab.id === 'design' ? 'Design' : tab.id === 'development' ? 'Frontend' : 'Full-Stack'}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Design Projects */}
                {activeTab === 'design' && (
                    <div className="grid lg:grid-cols-2 gap-8">
                        {designProjects.map((project, index) => (
                            <div key={index} className="bg-white rounded-md p-8 shadow-xs hover:shadow-sm transition-all duration-300 border border-gray-100">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                        <project.icon className="w-6 h-6 text-gray-600" />
                                    </div>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                        {project.status}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                                <p className="text-blue-600 font-medium mb-4">{project.category} • {project.client}</p>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                                        <p className="text-gray-600 text-sm">{project.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-600 mb-2">Solution</h4>
                                        <p className="text-gray-600 text-sm">{project.solution}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {Object.entries(project.results).map(([key, value], i) => (
                                        <div key={i} className="text-center p-3 bg-gray-50 rounded-lg">
                                            <div className="text-lg font-bold text-blue-600">{value}</div>
                                            <div className="text-xs text-gray-600">{key}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.features.map((feature, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Development Projects */}
                {activeTab === 'development' && (
                    <div className="grid lg:grid-cols-2 gap-8">
                        {developmentProjects.map((project, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                        {project.icon ? <project.icon className="w-6 h-6 text-gray-600" /> : <Code className="w-6 h-6 text-gray-600" />}
                                    </div>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                        {project.status}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                                <p className="text-green-600 font-medium mb-4">{project.category}</p>

                                <p className="text-gray-600 mb-6">{project.description}</p>

                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {Object.entries(project.metrics).map(([key, value], i) => (
                                        <div key={i} className="text-center p-3 bg-gray-50 rounded-lg">
                                            <div className="text-lg font-bold text-green-600">{value}</div>
                                            <div className="text-xs text-gray-600">{key}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-4xl transition-all duration-300 text-sm font-medium"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-[#0090FF] hover:bg-[#0081E4] text-white rounded-4xl transition-all duration-300 text-sm font-medium"
                                    >
                                        <Eye className="w-4 h-4" />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Full-Stack Projects */}
                {activeTab === 'fullstack' && (
                    <div className="max-w-4xl mx-auto">
                        {fullStackProjects.map((project, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                        <Layers className="w-8 h-8 text-gray-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <p className="text-gray-700 font-medium">{project.role}</p>
                                </div>

                                <div className="mb-8">
                                    <h4 className="font-semibold text-gray-900 mb-4 text-center">Complete Workflow</h4>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {project.workflow.map((step, i) => (
                                            <div key={i} className="flex items-center">
                                                <div className="px-4 py-2 bg-gray-100 text-gray-700 border border-gray-200 rounded-lg font-medium text-sm">
                                                    {step}
                                                </div>
                                                {i < project.workflow.length - 1 && (
                                                    <ArrowRight className="w-4 h-4 text-gray-400 mx-2" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg">
                                        <TrendingUp className="w-5 h-5 text-gray-600" />
                                        <span className="font-medium">{project.impact}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default DesignDevShowcase;