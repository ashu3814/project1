import './index.css'
import {Link} from 'react-router-dom'

// Define a functional component called MainInfo that takes in several props.
const MainInfo = props => {
  // Destructure the props object to get the necessary values.
  const {
    estimateId,
    movingFrom,
    movingTo,
    distance,
    movingOn,
    propertySize,
    totalItems,
  } = props

  // Log the props object to the console for debugging purposes.
  console.log(props)

  // Return a JSX code that renders a container div with two sections of move details.
  return (
    <div className="main-container">
      <div className="move-details">
        <div>
          <h2>From</h2>
          <p className="address">{movingFrom}</p>
        </div>
        <div>
          <h2>To</h2>
          <p className="address">{movingTo}</p>
        </div>
        <div>
          <h2>Request#</h2>
          <p className="req_id">{estimateId}</p>
        </div>
      </div>

      <div className="move-details">
        <p>{propertySize}</p>
        <p>{totalItems}</p>
        <p>{distance}</p>
        <p>{movingOn}</p>

        {/* Render a Link component from react-router-dom to navigate to the move details page */}
        <Link to={`vmd/${estimateId}`}>
          <button className="button1" type="button">
            View Move Details
          </button>
        </Link>

        <button className="button2" type="button">
          Quotes Awaiting
        </button>
      </div>

      {/* Render a disclaimer and a horizontal line as part of the move details container */}
      <p>
        <span className="sub-para">Disclaimer:</span>Please update your move
        date before two days of shifting
      </p>
      <hr />
    </div>
  )
}

// Export the MainInfo component as the default export of the module.
export default MainInfo
