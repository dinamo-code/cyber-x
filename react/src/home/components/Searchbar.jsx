import { useState } from "react";
import data from './MOCK_DATA.json';
import search from '../assets/search.png'
const Searchbar = () => {

const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="searchbar">


      <div className="search-container">
        <div className="search-inner"  id="searchbarinput">
          <input type="text" value={value} onChange={onChange} placeholder="search"/>
          <button onClick={() => onSearch(value)}> <img src={search} alt="search" id="searchheadimg" className="w-[25px] h-[25px]"/> </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Searchbar
