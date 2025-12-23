import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const navRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Operations", href: "#operations" },
        { label: "Domains", href: "#domains" },
        { label: "Products", href: "#products" },
        { label: "Contact", href: "#contact" },
    ];

    // Smooth scroll handler
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 80; // Height of fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            setActiveSection(targetId);
            setIsMenuOpen(false);
        }
    };

    // Update indicator position when active section changes
    useEffect(() => {
        if (navRef.current) {
            const activeLink = navRef.current.querySelector(`[data-section="${activeSection}"]`) as HTMLElement;
            if (activeLink) {
                setIndicatorStyle({
                    left: activeLink.offsetLeft,
                    width: activeLink.offsetWidth,
                });
            }
        }
    }, [activeSection]);

    return (
        <header className="w-screen bg-white fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-100">
            <div className="hidden fixed top-10 w-screen h-32 bg-green-500 md:bg-green-600 lg:bg-red-500 xl:bg-blue-500 2xl:bg-yellow-500 3xl:bg-purple-500 4xl:bg-pink-500"></div>
            <div className="max-w-[1920px] mx-auto 3xl:px-[100px] 4xl:px-0">
                <div className="">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo Section */}
                        <a href="#" className="flex items-center">
                            <img
                                src="/paynex/paynex-logo.svg"
                                alt="PayneX"
                                className="h-8"
                                style={{ filter: 'brightness(0) saturate(100%) invert(11%) sepia(7%) saturate(1049%) hue-rotate(202deg) brightness(95%) contrast(92%)' }}
                            />
                        </a>
                        {/* Desktop Navigation Section */}
                        <nav className="hidden lg:block">
                            <div className="relative bg-gray-100 rounded-full px-2 py-2" ref={navRef}>
                                {/* Animated sliding pill background */}
                                <div
                                    className="absolute top-2 h-[calc(100%-16px)] bg-white rounded-full shadow-sm transition-all duration-300 ease-out"
                                    style={{
                                        left: `${indicatorStyle.left + 8}px`,
                                        width: `${indicatorStyle.width}px`,
                                    }}
                                />
                                <div className="flex items-center gap-1 relative">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            data-section={link.href.replace("#", "")}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className={`text-sm font-medium transition-colors duration-300 px-6 py-2 rounded-full relative z-10 ${activeSection === link.href.replace("#", "")
                                                ? "text-[#1876f4]"
                                                : "text-gray-600 hover:text-gray-800"
                                                }`}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </nav>
                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="lg:hidden py-4 border-t border-gray-100">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`text-sm font-medium transition-colors py-2 ${activeSection === link.href.replace("#", "")
                                            ? "text-gray-900"
                                            : "text-gray-500"
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

