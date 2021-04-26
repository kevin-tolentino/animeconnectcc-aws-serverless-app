const fetch = require('node-fetch');

module.exports.getAnime = async (event) => {
  // eslint-disable-next-line dot-notation
  const wordForAnime = event['Details']['Parameters']['SelectedWord'];
  const responseFromFetch = await fetch(`https://api.jikan.moe/v3/search/anime?q=${wordForAnime}&genre=12&genre_exclude=0&rated=PG-13`);
  const json = await responseFromFetch.json();
  const filteredData = json.results[0].title;
  const resultMap = {
    animeRec: filteredData,
  };
  return resultMap;
};
