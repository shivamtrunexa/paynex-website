import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [isScrolling, setIsScrolling] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        // { label: "Operations", href: "#operations" },
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

            // Set scrolling flag to disable observer updates
            setIsScrolling(true);
            setActiveSection(targetId);
            setIsMenuOpen(false);

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Clear any existing timeout
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            // Re-enable observer after scroll completes (smooth scroll typically takes ~500-1000ms)
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 1000);
        }
    };

    // Scroll detection - Update active section based on viewport
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -66% 0px', // Adjusted for better detection
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
        };

        let currentSections: { id: string; ratio: number }[] = [];

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            // Skip observer updates during manual scrolling
            if (isScrolling) return;

            // Update the list of currently intersecting sections
            entries.forEach((entry) => {
                const sectionId = entry.target.id;
                if (!sectionId) return;

                if (entry.isIntersecting) {
                    // Add or update section
                    const existingIndex = currentSections.findIndex(s => s.id === sectionId);
                    if (existingIndex >= 0) {
                        currentSections[existingIndex].ratio = entry.intersectionRatio;
                    } else {
                        currentSections.push({ id: sectionId, ratio: entry.intersectionRatio });
                    }
                } else {
                    // Remove section
                    currentSections = currentSections.filter(s => s.id !== sectionId);
                }
            });

            // Find the section with highest intersection ratio
            if (currentSections.length > 0) {
                const mostVisible = currentSections.reduce((prev, current) =>
                    current.ratio > prev.ratio ? current : prev
                );
                setActiveSection(mostVisible.id);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        navLinks.forEach((link) => {
            const sectionId = link.href.replace("#", "");
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
            currentSections = [];
            // Clear timeout on cleanup
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [isScrolling]);

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
        <header className="w-full bg-white fixed top-0 left-0 right-0 z-50 px-6 py-5 lg:px-12 lg:py-0 xl:px-16 3xl:px-[100px] border-b border-[#ECECEC] lg:border-gray-100 lg:backdrop-blur-md lg:bg-white/95">
            <div className="max-w-[1920px] mx-auto w-full">
                <div className="flex items-end lg:items-center justify-between lg:h-20">
                    {/* Logo Section */}
                    <a href="#" className="flex items-center">
                        <img
                            src="/paynex/paynex-logo.svg"
                            alt="PayneX"
                            className="w-[90px] h-8 lg:h-8 lg:w-auto"
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
                    {/* Mobile Menu Button - Hamburger Icon */}
                    <button
                        className="lg:hidden p-2 text-[#2a2d34] hover:text-gray-900 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X size={24} strokeWidth={2} />
                        ) : (
                            <div className="flex flex-col gap-[5px]">
                                <span className="w-6 h-[2px] bg-[#2a2d34] rounded-full"></span>
                                <span className="w-6 h-[2px] bg-[#2a2d34] rounded-full"></span>
                                <span className="w-6 h-[2px] bg-[#2a2d34] rounded-full"></span>
                            </div>
                        )}
                    </button>
                </div>
                {/* Mobile Navigation - Slide down menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="py-4 border-t border-gray-100">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`text-base font-medium transition-colors py-3 px-2 rounded-lg ${activeSection === link.href.replace("#", "")
                                        ? "text-[#1876f4] bg-blue-50"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

