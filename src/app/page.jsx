import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GitHubContributions from "@/components/GitHubContributions";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        color: "#4d4d4d",
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Hero />
        <GitHubContributions />
        <TechStack />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
