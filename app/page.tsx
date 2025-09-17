import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import VideoSection from "@/components/video-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import FeaturesSection from "@/components/feature-section";
import ReviewsSection from "@/components/review-section";
import Footer from "@/components/footer";

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
