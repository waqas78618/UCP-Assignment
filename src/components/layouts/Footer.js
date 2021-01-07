import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>University Centre Peterborough</h4>
              <ul className="list-unstyled">
                <li>Higher educational institution in Peterborough, England</li>
                <li>Park Crescent, Peterborough, Cambridgeshire PE1 4DZ</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>ABOUT US</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.ucp.ac.uk/why-choose-ucp/">Why Choose UCP</a>
                </li>
                <li>
                  <a href="https://www.ucp.ac.uk/a-z-courses/">Courses</a>
                </li>
                <li>
                  <a href="https://www.ucp.ac.uk/events/">Events</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>USEFUL LINKS</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.ucp.ac.uk/jobs/">Job Opportunities</a>
                </li>
                <li>
                  <a href="https://www.ucp.ac.uk/privacy-and-cookies/">Privacy and Cookies</a>
                </li>
                <li>
                  <a href="https://www.ucp.ac.uk/news/">Latest News</a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>HELPFUL QUICKLINKS</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.ucp.ac.uk/policies/">Policies</a>
                </li>
                <li>
                  <a href="https://www.ucp.ac.uk/hesa-student-collection-notice/">HESA use of student data</a>
                </li>
                <li>
                  <a href="https://www.ucp.ac.uk/contact-us/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} University Centre Peterborough - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDarkTeal);
    padding-top: 3rem;
    color: var(--mainPeach);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
    color: var(--mainPeach);
  }

  ul li a {
    color: var(--mainTeal);
  }

  ul li a:hover {
    color: var(--mainLightTeal);
  }
`;
