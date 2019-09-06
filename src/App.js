import React, { Component } from "react";
import Typist from "react-typist";
import "./App.css";
import Configs from "./configurations.json";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-transparent fixed-top">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Features
            </a>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
            <a
              className="nav-item nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundType: Configs.backgroundType,
      devInfo: Configs.devIntro,
      devDesc: Configs.devDesc,
      hoverstatus: ["socialicons", "socialicons", "socialicons", "socialicons"]
    };
  }

  handleScroll = e => {
    this.setState({ devInfo: "Hashir Shoaib" });
    // console.log("scroll trigered");
  };

  toggleHover = data => {
    const newhoverStatus = [...this.state.hoverstatus];
    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconshover";
      this.setState({ hoverstatus: newhoverStatus });
      if (data.icon.id === 0) {
      }
    } else {
      newhoverStatus[data.icon.id] = "socialicons";
      this.setState({ hoverstatus: newhoverStatus });
      if (data.icon.id === 0) {
      }
    }
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const icons = Configs.icons;
    return (
      <div className="jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
        <div className=" container container-fluid text-center ">
          <h1 className="display-1" onScroll={this.handleScroll}>
            {this.state.devInfo}
          </h1>
          <Typist className="lead"> {this.state.devDesc}</Typist>
          <div className=" p-5">
            {icons.map(icon => (
              <a
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
                href={`${icon.url}`}
              >
                <i
                  className={`fab ${icon.image}  fa-3x ${
                    this.state.hoverstatus[icon.id]
                  }`}
                  onMouseEnter={() =>
                    this.toggleHover({ icon: icon, event: "enter" })
                  }
                  onMouseLeave={() =>
                    this.toggleHover({ icon: icon, event: "leave" })
                  }
                />
              </a>
            ))}
          </div>

          <a
            className="btn btn-primary btn-lg"
            href="#divaboutme"
            role="button"
          >
            More about me
          </a>
        </div>
      </div>
    );
  }
}

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "About me",
      aboutDev: Configs.aboutDev,
      instaProfilePic: "bad request"
    };
  }

  componentDidMount = () => {
    this.handleRequest();
  };

  handleRequest = e => {
    // console.log("request trigered");
    axios
      .get(Configs.instaLink + Configs.instaUsername + Configs.instaQuerry)
      .then(response => {
        // handle success
        // console.log(response.data.graphql);
        this.setState({
          instaProfilePic: response.data.graphql.user.profile_pic_url_hd
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  render() {
    return (
      <div id="divaboutme" className="jumbotron jumbotron-fluid m-0">
        <div className=" container container-fluid p-5">
          <div className="row">
            <div className=" col-5 d-none d-lg-block align-self-center">
              <img
                className=" border border-secondary rounded-circle"
                src={this.state.instaProfilePic}
              ></img>
            </div>
            <div className=" col-lg-7">
              <h1 className="display-4 mb-5 text-center">
                {this.state.heading}
              </h1>
              <p className=" lead text-center">{this.state.aboutDev}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "My Projects",
      projectsArray: []
    };
  }

  componentDidMount = () => {
    this.handleRequest();
  };

  handleRequest = e => {
    // console.log("github request trigered");
    axios
      .get(Configs.gitHubLink + Configs.gitHubUsername + Configs.gitHubQuerry)
      .then(response => {
        // handle success
        // console.log(response.data.slice(0, 4));
        this.setState({
          projectsArray: response.data.slice(0, 4)
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  render() {
    return (
      <div
        id="divproject"
        className="jumbotron jumbotron-fluid bg-transparent m-0"
      >
        <div className=" container container-fluid p-5">
          <h1 className="display-4 pb-5">{this.state.heading}</h1>
          <div className=" row">
            {this.state.projectsArray.map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                value={project}
              ></ProjectCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      updated_at: "0 mints"
    };
  }
  componentDidMount = () => {
    this.handleUpdatetime();
  };
  handleUpdatetime = () => {
    const date = new Date(this.state.value.pushed_at);
    const nowdate = new Date();
    var diff = nowdate.getTime() - date.getTime();
    var hours = Math.trunc(diff / 1000 / 60 / 60);
    if (hours < 24) {
      this.setState({ updated_at: hours.toString() + " hours ago" });
    } else {
      var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      this.setState({
        updated_at: "on " + day + " " + monthNames[monthIndex] + " " + year
      });
    }
  };

  render() {
    return (
      <div className="col-md-6">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.state.value.name} </h5>
            <p className="card-text">
              {this.state.value.description}{" "}
              https://api.github.com/repos/hashirshoaeb/home/languages pushed_at
              stargazers_count updated_at
            </p>
            <p className="card-text">
              <small className="text-muted">
                Updated {this.state.updated_at}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgStyle: { backgroundColor: "#f5f5f5" }
    };
  }
  render() {
    return (
      <footer style={this.state.bgStyle} className=" mt-auto py-3 text-center">
        <strong> &copy; 2019 </strong> Built with Reactjs
      </footer>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <Navbar></Navbar> */}
        <MainBody></MainBody>
        <AboutMe></AboutMe>
        <Project></Project>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
