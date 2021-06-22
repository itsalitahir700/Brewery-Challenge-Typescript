import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { getBreweryByName, getAutoComplete } from "../../store/actions/Brewery";
import { useDispatch } from "react-redux";

interface IProps
{
setLoading:React.Dispatch<React.SetStateAction<Boolean>>
}

interface IState {
  item: { name: string; id: number };
  autoCompletes: { name: string; id: number }[];
}


const  Search:React.FC<IProps>=({ setLoading }) =>{
  const dispatch = useDispatch();
  const [breweryName, setbreweryName] = useState<string>();
  const [autoCompletes, setautoCompletes] = useState<IState["autoCompletes"]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const fetchData = async (e:any, suggestion?:string|null) => {
    if (e?.keyCode === 13 || e === 13) {
      setShowSuggestions(false);
      setLoading(true);
      localStorage.setItem("lastSearch", e?.target?.value || suggestion);
      await dispatch(await getBreweryByName(e?.target?.value || suggestion));
      setLoading(false);
    }
  };

  const handleChange = async (e:React.ChangeEvent<HTMLInputElement>) : Promise<void> => {
    let search = e.target.value;
    setbreweryName(search);
    const result = await getAutoComplete(search);
    if (result) {
      setShowSuggestions(true);
      setautoCompletes(result);
    } else {
      setautoCompletes([]);
      setShowSuggestions(false);
    }
  };

  return (
    <div id="custom-search-input col-md-12">
      <div className="input-group d-flex align-items-center col-md-12">
        <input
          onChange={handleChange}
          onKeyDown={(e)=>fetchData(e)}
          value={breweryName || ""}
          type="text"
          className="  search-query form-control"
          placeholder="Search"
        />
        <span className="search-icon">
          <FaSearch />
        </span>
      </div>
      {showSuggestions && autoCompletes.length ? (
        <div className="suggestions card border-0">
          {autoCompletes.map((item:IState["item"]):JSX.Element => (
            <div
              className="suggestion"
              onClick={(e) => {
                setbreweryName(item.name);
                fetchData(13, item.name);
              }}
              key={item.id}
            >
              {item.name}
            </div>
          ))}
        </div>
      ) : null}
      <small className="last">
        {localStorage.getItem("lastSearch") ? (
          <span
            className="pointer"
            onClick={() => fetchData(13, localStorage.getItem("lastSearch"))}
          >
            last search : {localStorage.getItem("lastSearch")}
          </span>
        ) : null}
      </small>
    </div>
  );
}

export default Search;
