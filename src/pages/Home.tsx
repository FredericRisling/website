import React, { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
// import Divider from "../components/Divider.tsx";
// import Divider from "../components/Divider.tsx";
// import Divider from "../components/Divider";
// import ProjectSlider from "../components/ProjectSlider";

const LazyTechStack = lazy(() => import("../components/TechStack"));
// const LazyAboutMe = lazy(() => import("../components/AboutMe"));
const LazyContact = lazy(() => import("../components/Contact"));
const LazyHeaderIntro = lazy(() => import("../components/HeaderIntro"));
// const LazyRadialGradient = lazy(() => import("../components/RadialGradient"));

const Home: React.FC = () => {

  return (
    <>
      <Layout>
        <header>
          <ScrollProgress
            position={"left"}
            color={"golden"}
            height={10}
            smoothness={true}
          />
        </header>
        <main className="relative">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyHeaderIntro />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyTechStack />
          </Suspense>

            {/*<Divider*/}
            {/*    thickness="0.25rem"*/}
            {/*    direction="middle"*/}
            {/*    color="gold"*/}
            {/*    height="small"*/}
            {/*    dividerStyle="solid"*/}
            {/*/>*/}

          <Suspense fallback={<div>Loading...</div>}>
            <LazyContact />
          </Suspense>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
