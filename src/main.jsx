import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App-v2.jsx";
import StarRating from "./components/StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Test /> */}
  </StrictMode>
);

function Test() {
  const [movieRating, setMovieRating] = useState(1);
  return (
    <div>
      <StarRating defaultRating={movieRating} onSetRating={setMovieRating} />
      <StarRating defaultRating={3} maxRating={10} color="red" size={30} />
    </div>
  );
}
