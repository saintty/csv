import { BackToTop } from "@/shared/ui/button/back-to-top";
import { Hero } from "./hero";
import { About } from "./about";
import { Cases } from "./cases";
import { Skills } from "./skills";
import { JsonLD } from "./json-ld";
import { Contacts } from "./contacts";
import { Education } from "./education";
import { Approaches } from "./approaches";
import { Experience } from "./experience";

export const Home = () => (
  <>
    <main>
      <Hero />
      <About />
      <Experience />
      <Cases />
      <Skills />
      <Approaches />
      <Education />
      <Contacts />
      <BackToTop />
    </main>
    <JsonLD />
  </>
);
