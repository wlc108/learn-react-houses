import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './main-page.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HousesContext from "../context/housesContext";

function App() { 
  // Custom Hooks
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle="Providing houses all over the world" 
                  title="Some title" />
          <HouseFilter allHouses={allHouses} />
    
          <Routes>
            <Route exact path="/" element={<FeaturedHouse house={featuredHouse} />} />
            
            <Route path="/searchresults/:country" element={
              <SearchResults allHouses={allHouses} />
            }/>

            <Route path="/house/:id" element={
              <HouseFromQuery allHouses={allHouses} />
            } />          
          </Routes>
    
    
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
