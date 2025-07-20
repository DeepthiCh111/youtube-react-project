export const API_KEY = process.env.REACT_APP_API_KEY;
export const QUERY_SUGGESTIONS = `https://cors-anywhere.herokuapp.com/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
export const LIVE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&q=live&type=video&key=${API_KEY}&maxResults=20&regionCode=IN`;
