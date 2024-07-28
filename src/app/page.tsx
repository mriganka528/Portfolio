
import HomeComp from "@/components/Home";
import About from "@/components/About"
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeComp />
      <About />
      <Projects />
      <Connect/>
      <Footer/>
    </main>
  );
}
