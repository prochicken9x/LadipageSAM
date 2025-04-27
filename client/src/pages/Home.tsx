import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";

import FAQSection from "@/components/FAQSection";
import ApplicationForm from "@/components/ApplicationForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <div className="font-body text-neutral-900 bg-white scroll-smooth">
      <Helmet>
        <title>Sebang Battery - Exclusive Dealer Program</title>
        <meta
          name="description"
          content="Partner with South Korea's leading battery manufacturer and access exclusive distribution rights in your territory."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;600&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      <HeroSection />
      <ProductCategories />
      <BenefitsSection />
      <AboutSection />

      <FAQSection />
      <ApplicationForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
