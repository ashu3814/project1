// Importing necessary modules
import {Component} from 'react'
import MainInfo from '../MainInfo'
import './index.css'

// Defining the Home component as a class that extends the Component class from React
class Home extends Component {
  // Initializing the state of the component with an empty array
  state = {fetchedData: []}

  // Lifecycle method that is called after the component is mounted in the DOM
  componentDidMount() {
    // Calling the getFetchData method to fetch data from an API endpoint
    this.getFetchData()
  }

  // Asynchronous method that fetches data from an API endpoint and sets it in the component state
  getFetchData = async () => {
    const response = await fetch('http://test.api.boxigo.in/sample-data/')
    const data = await response.json()
    // Setting the fetched data in the component state
    this.setState({fetchedData: data.Customer_Estimate_Flow})
  }

  // Render method that returns the JSX for the component
  render() {
    // Destructuring the fetchedData array from the component state
    const {fetchedData} = this.state
    console.log(fetchedData)
    return (
      // Main div that contains the sidebar and the main content
      <div className="main">
        {/* Sidebar that contains a list of links */}
        <div className="sidebar">
          <li>My Moves</li>
          <li>My Profile</li>
          <li>Get Quote</li>
          <li>Log out</li>
        </div>
        {/* Main content that displays a list of MainInfo components */}
        <div className="rem">
          <h1 className="main-heading">My Moves</h1>
          {/* Mapping over the fetchedData array and creating a MainInfo component for each object in the array */}
          {fetchedData.map(each => (
            <MainInfo
              key={each.estimate_id}
              estimateId={each.estimate_id}
              movingFrom={each.moving_from}
              movingTo={each.moving_to}
              distance={each.distance}
              movingOn={each.moving_on}
              propertySize={each.property_size}
              totalItems={each.total_items}
            />
          ))}
        </div>
      </div>
    )
  }
}

// Exporting the Home component as the default export of the module
export default Home
