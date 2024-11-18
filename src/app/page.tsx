import HeroSection from "@/Components/HeroSection";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import SliderSection from "@/Components/SliderSection";

const HomePage: React.FC = () => {
  const images = [
    '/images/Salon-Website.jpg',
    '/images/Governor-Sindh-Website.jpg',
    '/images/Resume.jpg',
    '/images/To-Do-App.jpg',
    '/images/Assignment-45.jpg',
    '/images/SQl.jpg',
    '/images/foody.jpg',
    '/images/result-Checker app.jpg',
    '/images/Node-Projects.jpg',
    '/images/Expense-Tracker-App.jpg', 
    '/images/word-Counter.jpg',
  ];
  return (
    <div className="bg-[#123042]">
      <HeroSection />
      <About />
      <Skills />
      <SliderSection images={images} />
    </div>
  );
}

export default HomePage;
