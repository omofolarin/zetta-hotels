import * as React from "react";

import AboutUs, {
  AboutUsExpand,
  Testimonial,
} from "../components/home/about-us";

import Hero from "../components/hero";
import Search from "../components/search";

export default function Home() {
  return (
    <div>
      <Hero>
        <Search />
      </Hero>
      <AboutUs />
      <AboutUsExpand />
      <Testimonial />
    </div>
  );
}
