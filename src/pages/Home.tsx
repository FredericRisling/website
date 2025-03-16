import React, { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import { useTheme } from "../context/theme-context";
import { ScrollProgress } from "../components/ScrollProgress";
// import Divider from "../components/Divider";
// import ProjectSlider from "../components/ProjectSlider";

const LazyTechStack = lazy(() => import("../components/TechStack"));
// const LazyAboutMe = lazy(() => import("../components/AboutMe"));
const LazyContact = lazy(() => import("../components/Contact"));
const LazyHeaderIntro = lazy(() => import("../components/HeaderIntro"));
// const LazyRadialGradient = lazy(() => import("../components/RadialGradient"));

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <Layout>
        <header className="h-screen">
          <ScrollProgress
            position={"left"}
            color={"white"}
            height={10}
            smoothness={true}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <LazyHeaderIntro />
          </Suspense>
        </header>
        <main className="relative">
          <Suspense fallback={<div>Loading...</div>}>

            <LazyTechStack />
            <LazyContact />

          </Suspense>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
