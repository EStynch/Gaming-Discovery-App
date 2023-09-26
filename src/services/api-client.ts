import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1be95e5fdde74d3993dcde012aa8db83",
  },
});
