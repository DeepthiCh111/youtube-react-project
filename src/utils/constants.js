export const API_KEY = process.env.REACT_APP_API_KEY;
export const QUERY_SUGGESTIONS = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
export const SUGGESTIONS = "&maxResults=10&type=video&key="+API_KEY;
export const LIVE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&key=${API_KEY}&maxResults=20&regionCode=IN`;
