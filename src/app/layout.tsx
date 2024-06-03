import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from 'next/image';
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joe C Gomez",
  description: "Generated by create next app",
};

// Helper function to create Image components
const createIcon = (src: string, alt: string) => (
  <Image src={src} alt={alt} width={20} height={20} quality={50} loading="lazy" />
);

const navItems = [
  { name: "About", link: "/#about", icon: createIcon("/user.svg", "About") },
  { name: "Projects", link: "/#projects", icon: createIcon("/code.svg", "Project") },
  { name: "Contact", link: "/#contact", icon: createIcon("/email.svg", "Contact") }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <FloatingNav navItems={navItems} className="bg-[#0A0908] bg-opacity-75" />

        <main className="flex-grow bg-gradient-to-b from-black via-black to-[#0A0908]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
<script dangerouslySetInnerHTML={{
  __html: `
    const smoothScroll = (target) => {
      const targetElement = document.querySelector(target);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        smoothScroll(href);
      });
    });
  `
}} />