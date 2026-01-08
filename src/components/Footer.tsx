import { Phone, MailIcon, MapPin } from "lucide-react";
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from "iconoir-react";

const Footer = () => {
    return (
        <footer className="w-full pt-[50px] pb-[36px] xl:pb-8 px-7 xl:px-[200px] 3xl:px-[320px] bg-gradient-to-b from-[#0F172B] to-[#102242] overflow-hidden flex flex-col justify-center items-center gap-9 xl:gap-20">
            {/* Mobile Layout */}
            <div className="xl:hidden w-full flex flex-col justify-start items-start gap-8">
                {/* Footer Links Section */}
                <div className="w-full flex flex-col justify-start items-start gap-8">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col justify-start items-start gap-1">
                        <img
                            src="/paynex/paynex-logo.svg"
                            alt="PayneX"
                            className="w-[141px] h-[50px]"
                        />
                        <p className="text-[#F1F5F9] text-sm font-medium leading-5">
                            Redefining Financial Interactions in a Connected World
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-start items-start gap-4">
                        <a href="#" className="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                            <Linkedin strokeWidth={1.5} />
                        </a>
                        <a href="#" className="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                            <Twitter strokeWidth={1.5} />
                        </a>
                        <a href="#" className="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                            <Instagram strokeWidth={1.5} />
                        </a>
                        <a href="#" className="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                            <Facebook strokeWidth={1.5} />
                        </a>
                        <a href="#" className="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                            <Youtube strokeWidth={1.5} />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-0 border-t border-white/10"></div>

                {/* Navigation Links */}
                <div className="w-full px-1 flex justify-between items-start">
                    <a href="#about" className="rounded-[14px] flex justify-start items-center gap-2.5 hover:opacity-80 transition-opacity">
                        <span className="text-center text-[#F1F5F9] text-sm font-medium leading-5">About</span>
                    </a>
                    <a href="#partners" className="rounded-[14px] flex justify-start items-center gap-2.5 hover:opacity-80 transition-opacity">
                        <span className="text-center text-[#F1F5F9] text-sm font-medium leading-5">Partners</span>
                    </a>
                    <a href="#industries" className="rounded-[14px] flex justify-start items-center gap-2.5 hover:opacity-80 transition-opacity">
                        <span className="text-center text-[#F1F5F9] text-sm font-medium leading-5">Industries</span>
                    </a>
                    <a href="#solutions" className="rounded-[14px] flex justify-start items-center gap-2.5 hover:opacity-80 transition-opacity">
                        <span className="text-center text-[#F1F5F9] text-sm font-medium leading-5">Solutions</span>
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full h-0 border-t border-white/10"></div>

                {/* Contact Info */}
                <div className="w-full flex flex-col justify-start items-start gap-9">
                    {/* Phone */}
                    <div className="w-full flex justify-start items-center gap-2">
                        <div className="w-4 h-4 relative">
                            <Phone className="w-4 h-4 stroke-white" strokeWidth={1.5} />
                        </div>
                        <a href="tel:+15143600892" className="flex-1 text-white text-sm font-medium underline leading-5 hover:opacity-80 transition-opacity">
                            +1 514 360 0892
                        </a>
                    </div>

                    {/* Email */}
                    <div className="w-full flex justify-start items-center gap-2">
                        <div className="w-4 h-4 relative">
                            <MailIcon className="w-4 h-4 stroke-white" strokeWidth={1.5} />
                        </div>
                        <a href="mailto:info@trunexa.com" className="flex-1 text-white text-sm font-medium underline leading-5 hover:opacity-80 transition-opacity">
                            info@trunexa.com
                        </a>
                    </div>

                    {/* Address */}
                    <div className="w-full flex justify-start items-start gap-2">
                        <div className="pt-0.5 pb-0.5 flex justify-start items-center gap-2.5">
                            <div className="w-4 h-4 relative">
                                <MapPin className="w-4 h-4 stroke-white" strokeWidth={1.5} />
                            </div>
                        </div>
                        <a href="#location" className="flex-1 text-white text-sm font-medium underline leading-5 hover:opacity-80 transition-opacity">
                            900 Av. Selkirk, Pointe-Claire, QC H9R 3S3 Canada
                        </a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="w-full pt-6 border-t border-white/10 flex flex-col justify-end items-center gap-[10px]">
                    <div className="text-center text-white text-sm font-normal leading-5">
                        © 2025 Paynex. All rights reserved.
                    </div>
                    <div className="text-center text-white text-sm font-normal leading-5">
                        A subsidary of Trunexa
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden xl:flex w-full flex-col justify-start items-start gap-[70px]">
                {/* Footer Content */}
                <div className="self-stretch flex justify-between items-start">
                    {/* Left Section - Logo and Social */}
                    <div className="w-[567px] h-[152px] flex flex-col justify-between items-start">
                        {/* Logo and Tagline */}
                        <div className="flex flex-col justify-start items-start gap-1">
                            {/* Logo */}
                            <img
                                src="/paynex/paynex-logo.svg"
                                alt="PayneX"
                                className="w-[141px] h-[50px]"
                            />

                            {/* Tagline */}
                            <p className="text-center text-[#F1F5F9] text-sm font-medium leading-5">
                                Redefining Financial Interactions
                            </p>
                        </div>

                        <div className="flex justify-start items-start gap-4">
                            <a href="#" className="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <Linkedin />
                            </a>
                            <a href="#" className="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <Twitter />
                            </a>
                            <a href="#" className="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <Instagram />
                            </a>
                            <a href="#" className="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <Facebook />
                            </a>
                            <a href="#" className="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <Youtube />
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Links and Contact */}
                    <div className="flex justify-start items-start">
                        {/* Navigation Links */}
                        <div className="w-[236px] h-[152px] flex flex-col justify-between items-start">
                            <a href="#about" className="rounded-[14px] flex justify-start items-center gap-2.5 hover:opacity-80 transition-opacity">
                                <span className="text-center text-[#F1F5F9] text-sm font-medium leading-5">About</span>
                            </a>
                            <a href="#partners" className="rounded-[14px] flex justify-start items-center gap-2.5 hover:opacity-80 transition-opacity">
                                <span className="text-center text-[#F1F5F9] text-sm font-medium leading-5">Partners</span>
                            </a>
                            <a href="#industries" className="rounded-[14px] flex justify-start items-center gap-2.5 hover:opacity-80 transition-opacity">
                                <span className="text-center text-[#F1F5F9] text-sm font-medium leading-5">Industries</span>
                            </a>
                            <a href="#solutions" className="rounded-[14px] flex justify-start items-center gap-2.5 hover:opacity-80 transition-opacity">
                                <span className="text-center text-[#F1F5F9] text-sm font-medium leading-5">Solutions</span>
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="w-[252px] flex flex-col justify-start items-start gap-9">
                            {/* Phone */}
                            <div className="self-stretch flex justify-start items-center gap-2">
                                <div className="w-4 h-4 relative">
                                    <Phone className="w-4 h-4 text-white" />
                                </div>
                                <a href="tel:+15143600892" className="flex-1 text-white text-sm font-medium underline leading-5 hover:opacity-80 transition-opacity">
                                    +1 514 360 0892
                                </a>
                            </div>

                            {/* Email */}
                            <div className="self-stretch flex justify-start items-center gap-2">
                                <div className="w-4 h-4 relative">
                                    <MailIcon className="w-4 h-4 text-white" />
                                </div>
                                <a href="mailto:info@trunexa.com" className="flex-1 text-white text-sm font-medium underline leading-5 hover:opacity-80 transition-opacity">
                                    info@trunexa.com
                                </a>
                            </div>

                            {/* Address */}
                            <div className="self-stretch flex justify-start items-start gap-2">
                                <div className="pt-0.5 pb-0.5 flex justify-start items-center gap-2.5">
                                    <div className="w-4 h-4 relative">
                                        <MapPin className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <a href="#location" className="flex-1 text-white text-sm font-medium underline leading-5 hover:opacity-80 transition-opacity">
                                    900 Av. Selkirk, Pointe-Claire, QC H9R 3S3 Canada
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="self-stretch pt-8 border-t border-white/10 flex justify-between items-center">
                    <p className="text-center text-white text-sm font-normal leading-5">
                        © 2025 Paynex. All rights reserved.
                    </p>
                    <p className="text-center text-white text-sm font-normal leading-5">
                        A subsidary of Trunexa
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

