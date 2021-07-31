import React from "react";
import Footer from "./Footer";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  render() {
    return (
      <main className={`${this.props.pageName} page`}>
        {this.props.children}
        <Footer/>
      </main>
    );
  }
}

export default Page;
