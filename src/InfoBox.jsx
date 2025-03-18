import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ weatherInfo }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1711305682256-3b1874c923bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNNT0tFJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let HOT_URL =
    "https://images.unsplash.com/photo-1603218621951-8b8cce556d3c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1biUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let COLD_URL =
    "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <h2>Weather info - {weatherInfo.weather}</h2>;
      <div className="card">
        <Card sx={{ maxWidth: 500 }}>
          {" "}
          <CardMedia
            component="img"
            alt="weather image"
            height="200"
            image={
              weatherInfo.humidity > 80
                ? RAIN_URL
                : weatherInfo.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            sx={{ width: "100%" }} // Make image take full width
          />
          <CardContent sx={{ textAlign: "center", fontSize: "1.1rem" }}>
            {" "}
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city}
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ color: "text.secondary" }}
            >
              <p>Temperature = {weatherInfo.temp}&deg;C</p>
              <p>Humidity = {weatherInfo.humidity}</p>
              <p>Feels Like = {weatherInfo.feels_like}</p>
              <p>Pressure = {weatherInfo.presure}</p>
              <p>Weather = {weatherInfo.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
