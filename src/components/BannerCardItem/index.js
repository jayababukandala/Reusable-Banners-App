import './index.css'

// Write your code here.

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div className="banner-details">
        <h1 className="headerStyle">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="buttonStyle">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
