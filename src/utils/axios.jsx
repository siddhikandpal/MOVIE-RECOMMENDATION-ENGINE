import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWMwMWNhYTBlY2M5M2Y1NDYzMjQzNzM3ZWFkMTBiYSIsIm5iZiI6MTcyMzQwNDM4NC41Mzk3MDcsInN1YiI6IjY2YjhhMjk0ZmZlMGM2N2IxNDlmMDkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FPHr_Fnbxk6t3LXyPc044DCrZqyHNBRLrKnWghf9IxI",
  },
});

export default instance;
