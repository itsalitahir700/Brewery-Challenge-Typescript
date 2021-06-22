import axios from "axios";
import { baseURL } from "../utilities/constants";

const service = {
  getBreweryByName: async (name: string) => {
    try {
      const response = await axios.get(`${baseURL}search?query=${name}`);
      return response;
    } catch (error) {
      alert(error.message);
      return false;
    }
  },
  getBrewery: async (id: number) => {
    try {
      const response = await axios.get(`${baseURL}${id}`);
      return response;
    } catch (error) {
      alert(error.message);
      return false;
    }
  },
  getAutoComplete: async (search: string) => {
    try {
      const response = await axios.get(
        `${baseURL}autocomplete?query=${search}`
      );
      return response;
    } catch (error) {
      console.warn(error.message);
      return false;
    }
  },
};

export { service };
