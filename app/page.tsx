import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReviewsSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VideoSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
