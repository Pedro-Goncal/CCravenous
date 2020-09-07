import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() { 
    let googleMaps = `https://www.google.com/maps/search/?api=1&query=${this.props.business.googleMaps.latitude},${this.props.business.googleMaps.longitude}`
    return (      
      <div className="Business">
        <div className="image-container">
          <a href={this.props.business.url} target="_blank">
          <img src={this.props.business.imageSrc} alt="" />
          </a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <a href={googleMaps} target='_blank' ><p>{this.props.business.address}</p></a>
            <a href={googleMaps} target='_blank' ><p>{this.props.business.city}</p></a>
            <a href={googleMaps} target='_blank' ><p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p></a>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Business;
