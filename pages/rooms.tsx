import * as React from "react";

import { AboutSecond, Photos } from "../components/home/about-us";

import Footer from "../components/footer";
import { PageHero } from "../components/hero";
import { Photo } from "@material-ui/icons";
import { SearchSecondary } from "../components/search";

export default function RoomsPage() {
  return (
    <div>
      <PageHero title="Rooms" breadcrumbs="Home  |  Rooms" />
      <AboutSecond />
      <SearchSecondary />
      <Photos />
      <Footer />
    </div>
  );
}
