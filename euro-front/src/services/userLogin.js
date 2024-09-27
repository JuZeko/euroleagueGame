export const userLogin = async () => {
    try {
      const response = await fetch(
        "https://localhost:7012/WeatherForecast",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };