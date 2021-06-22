import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrewery } from "../store/actions/Brewery";
import DetailsCard from "../components/DetailsCard";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import { reduxState } from "../store/types";

const BreweryDetails:React.FC=() :JSX.Element=> {
  const url = require("url");
  const urlObj = url.parse(document.location.href, true);
  const id = urlObj?.query?.id;

  const breweryDetails = useSelector(
    (state:reduxState) => state.AppState?.breweryDetailsState
  );
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleBreweryEvents = useCallback(async ():Promise<void> => {
    setLoading(true);
    await dispatch(await getBrewery(id));

    setLoading(false);
  }, [id, dispatch]);

  useEffect((): void => {
    handleBreweryEvents();
  }, [handleBreweryEvents] );

  return (
    <>
      <div className="col-md-6 mt-4">
        <p
          className="pointer d-flex align-items-center"
          onClick={() => history.push("/")}
        >
          <IoIosArrowBack />
          Back to results
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="col-md-12 mt-4 ">
          {breweryDetails ? (
            <DetailsCard breweryDetails={breweryDetails} />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default BreweryDetails;
