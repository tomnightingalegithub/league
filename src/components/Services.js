import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const FeatureGrid = ({ heading, description, gridItems }) => (
  <div className="services">

      <p className="services__heading">{heading}</p>

      <p className="services__description">{description}</p>

      <Link to="/services" className="btn btn--outline-beige">Learn more</Link>

     <div className="services__container">

        {gridItems.map(item => (
          <Link
          className="services-single"
          to={item.link}
          key={item.heading}
          style={{
            backgroundImage: `url(${
              !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
            })`,
          }}>
              {item.icon}
              <p className="services-single__heading">{item.heading}</p>
              <p className="services-single__text">{item.text}</p>
          </Link>
        ))}

    </div>

  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
