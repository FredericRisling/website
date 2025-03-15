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
const LazyRadialGradient = lazy(() => import("../components/RadialGradient"));

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

            {/*<ProjectSlider />*/}
            <div className="relative -mb-24 pb-32 -mt-10">
              <LazyRadialGradient
                opacity={theme === "light" ? "opacity-30" : "opacity-30"}
                scale="scale-y-100"
                position="-top-24"
              />


              <LazyContact />
            </div>
          </Suspense>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
