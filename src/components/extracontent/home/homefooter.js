import React, { Component } from "react";
import "./homefooter.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

class HomeFooter extends Component {
  render() {
    return (
      <div className="homeFooterContent" id="homeFooter">
        <div className="homeFooter">
          <div className="footerTitles">
            <h3>
              Travel around the world and receive the best deals and place to
              stay!
            </h3>
            <h3>You can unsubscribe anytime!</h3>
          </div>

          <div className="homeSubscriptionWrapper">
            <InputGroup className="mb-3" id="homeSubscription">
              <FormControl
                placeholder="Enter Gmail"
                aria-label="Enter Gmail"
                aria-describedby="basic-addon2"
                id="homeTextbox"
              />
              <InputGroup.Append>
                <Button variant="outline-light" id="homeSubscribeButton">
                  Subscribe
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>

          <div className="footerLinksWrapper">
            <div className="footerLinks">
              <h5>About us</h5>
              <a href="/">How it works</a>
              <a href="/">Testimonials</a>
              <a href="/">Careers</a>
              <a href="/">Investors</a>
              <a href="/">Terms of Service</a>
            </div>

            <div className="footerLinks">
              <h5>Contact us</h5>
              <a href="/">Contacts</a>
              <a href="/">Support</a>
              <a href="/">Destinations</a>
              <a href="/">Sponsorships</a>
            </div>

            <div className="footerLinks">
              <h5>Videos</h5>
              <a href="/">Submit Videos</a>
              <a href="/">Ambassadors</a>
              <a href="/">Agency</a>
              <a href="/">Influencer</a>
              <a href="/">Blog</a>
            </div>
          </div>

          <div className="copyright">
            <h5>WONDERS © 2021</h5>
          </div>

          <div className="socialLinks">
            <div>
              <a href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>

            <div>
              <a href="/">
                <i class="fab fa-youtube"></i>
              </a>
            </div>

            <div>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>

            <div>
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="scrollOnTopWrapper">
            <div className="scrollOnTop active">
              <Fade direction="down">
                <Link
                  activeClass="active"
                  to="homeContent"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  <Button variant="outline-light" id="scrollUpButton">
                    <i class="fas fa-arrow-up"></i>
                  </Button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFooter;
