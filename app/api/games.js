import axios from "axios";

export const fetchGames = async () => {
  const apiKey = process.env.REACT_APP_API__KEY;
  const url = `https://api.rawg.io/api/games?key=161a5abe0d4a448e81b3ae57db41e99b`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.log("zbbbb", error);
  }
};
fetchGames()
  .then((data) => console.log("fetched game", data))
  .catch((error) => console.log("error occured", error.message));
