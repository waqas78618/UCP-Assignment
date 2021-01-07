import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import styled from 'styled-components';
import Reviews from '../Reviews';

class Courses extends Component {
  render() {
    return (
      <InfoConsumer>
        {data => {
          const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            title,
            maps,
            description
          } = data.detailInfo;

          return (
            <React.Fragment>
              <div className='vid-container'>
              <video src='/videos/ucp.mp4' loop muted />
              </div>
              <HeaderCourses className="container-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                <h4 className="display-5">{headerSubTitle}</h4>
                <p>{headerText}</p>
              </HeaderCourses>
              {/* Nav Link */}
              <div className="container">
                <ul className="nav nav-tabs">
                  {/* About Courses Link */}
                  <li className="nav-item">
                    <a
                      href="#aboutCourses"
                      className="nav-link active"
                      role="tab"
                      data-toggle="tab"
                    >
                      About Courses
                    </a>
                  </li>
                  {/* Reviews Link */}
                  <li className="nav-item">
                    <a
                      href="#reviews"
                      className="nav-link"
                      role="tab"
                      data-toggle="tab"
                    >
                      Reviews
                    </a>
                  </li>
                  {/* Map Link */}
                  <li className="nav-item">
                    <a
                      href="#map"
                      className="nav-link"
                      role="tab"
                      data-toggle="tab"
                    >
                      Map
                    </a>
                  </li>
                </ul>
                {/* Tab Pane */}
                <div className="tab-content mb-5">
                  {/* About Place Tab */}
                  <div
                    id="aboutCourses"
                    className="tab-pane in active text-center mt-5"
                    role="tabpanel"
                  >
                    <h2 className="mb-3">{title}</h2>
                    <p>{description}</p>
                    <img
                      src={img}
                      alt={title}
                      className="img-thumbnail img-fluid"
                    />
                  </div>
                  {/* Reviews */}
                  <div className="tab-pane" id="reviews" role="tabpanel">
                    <Reviews />
                  </div>
                  {/* Map */}
                  <div className="tab-pane" id="map" role="tabpanel">
                    <iframe
                      src={maps}
                      style={{
                        border: '0',
                        height: '28.125rem',
                        width: '100%',
                        frameborder: '0'
                      }}
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Courses;

const HeaderCourses = styled.header`
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 5%;
    color: var(--mainTeal);
  }

  h4 {
    padding-top: 16%;
    padding-bottom: 1%
    color: var(--mainDarkTeal);
  }

  p {
    padding-top: 2%;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDarkTeal);
  }


  .nav-item {
    height: 18.75rem;
  }

  @media (max-width: 760px) {
    video,
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
