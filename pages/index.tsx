import * as React from "react";

import AboutUs, {
  AboutUsExpand,
  BlogPost,
  Photos,
  Restaurant,
  Testimonial,
} from "../components/home/about-us";

import Footer from "../components/footer";
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
      <Restaurant />
      <BlogPost />
      <Photos />
      <Footer />
    </div>
  );
}
