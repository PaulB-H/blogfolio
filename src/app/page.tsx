import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Projects />
      </main>

      <Footer />
    </>
  );
}
