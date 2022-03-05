import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "d015cd2587msh5b0b597a398b8d2p1f48c6jsn763e8889cb01",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
