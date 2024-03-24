export const fetchFixtures = async () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url =
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
