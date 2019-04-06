import React from "react";
import { Link } from "gatsby";

const Navigation = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav role="navigation" className={`navigation ${this.state.navBarActiveClass}`}>

          <Link className="navigation__item" to="/">
            Home
          </Link>

          <Link className="navigation__item" to="/services">
            Services
          </Link>

          <div className="navigation__sub">
              <Link className="navigation__item" to="/services/web-design">
                Web Design
              </Link>

              <Link className="navigation__item" to="/services/web-development">
                Web Development
              </Link>

              <Link className="navigation__item" to="/services/seo">
                SEO
              </Link>

              <Link className="navigation__item" to="/services/ppc">
                PPC
              </Link>

              <Link className="navigation__item" to="/services/content-marketing">
                Content Marketing
              </Link>

              <Link className="navigation__item" to="/services/copywriting">
                Copywriting
              </Link>

              <Link className="navigation__item" to="/services/telecoms">
                Telecoms
              </Link>
          </div>

          <Link className="navigation__item" to="/about">
            About
          </Link>

          <Link className="navigation__item" to="/latest-news">
            Latest News
          </Link>

          <Link className="navigation__item" to="/contact">
            Contact
          </Link>

          <Link className="navigation__item" to="/contact/examples">
            Form Examples
          </Link>
      </nav>
    );
  }
};

export default Navigation;
