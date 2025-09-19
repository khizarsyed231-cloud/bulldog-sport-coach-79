import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AIAdvisor from "@/components/AIAdvisor";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AIAdvisor />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
