import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import Info from '../Info';
import VideoSection from '../VideoSection' 

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className='video-container'>
        <video src='/videos/ucp.mp4' autoPlay loop muted />
        </div>
        <div className="row mt-5">
          <InfoConsumer>
            {value => {
              return value.info.map(item => {
                return <Info key={item.id} item={item} />;
              });
            }}
          </InfoConsumer>
        </div>
      </div>
    );
  }
}

export default Home;
