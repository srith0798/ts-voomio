import React, { Component } from "react";
import Heading from "./modules/header/header";
import BannerComponent from "./modules/dashboard/bannerComponent";
import CategoriesComponent from "./modules/dashboard/categoriesComponent";

class App extends Component {
  state = {
    name: "veda",
    male: false,
  };

  componentDidMount(): void {}

  render(): React.ReactNode {
    return (
      <div className="bg-grey-40">
        <Heading state={this.state} />
        <BannerComponent />
        <CategoriesComponent />
      </div>
    );
  }
}

export default App;
