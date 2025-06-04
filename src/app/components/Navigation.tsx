import React, { RefObject } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
    name: string;
    ref: RefObject<HTMLElement | HTMLDivElement | null>;
}

interface NavigationProps {
    scrollY: number;
    activeSection: string;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    navItems: NavItem[];
    scrollToSection: (sectionRef: RefObject<HTMLElement | HTMLDivElement | null>, sectionName: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
    scrollY,
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    navItems,
    scrollToSection
}) => {
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50
                ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100'
                : 'bg-transparent'
            }`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-900">
                        Fidelis Agba
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.ref, item.name.toLowerCase())}
                                className={`hover:text-[#0090FF] transition-colors font-medium ${activeSection === item.name.toLowerCase()
                                        ? 'text-[#0081E4]'
                                        : 'text-gray-600'
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-50 relative"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-900" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-900" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu - Smooth dropdown animation */}
            <div className={`md:hidden fixed left-0 right-0 z-40 transition-all duration-500 ease-out transform ${mobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                }`}
                style={{ top: scrollY > 50 ? '80px' : '88px' }}
            >
                <div className="bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-xl">
                    <div className="max-w-6xl mx-auto px-6 py-6 space-y-1">
                        {navItems.map((item, index) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.ref, item.name.toLowerCase())}
                                className={`block w-full text-left px-5 py-4 rounded-xl transition-all duration-300 font-medium transform hover:scale-[1.02] ${activeSection === item.name.toLowerCase()
                                        ? 'text-[#0081E4] bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100'
                                        : 'text-gray-700 hover:text-[#0090FF] hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50'
                                    }`}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: mobileMenuOpen ? 'slideInFromTop 0.4s ease-out forwards' : 'none'
                                }}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Subtle blue tint instead of gray */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-gradient-to-b from-blue-900/10 to-indigo-900/20 backdrop-blur-sm z-30 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Add custom keyframes for the slide-in animation */}
            <style jsx>{`
                @keyframes slideInFromTop {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </nav>
    );
};