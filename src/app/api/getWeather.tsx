const URL = "https://api.openweathermap.org/data/2.5/weather";

type GetWeatherProps = {
  q: string;
  units: string;
  appid: string;
};

class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export async function getWeather(
  q: string,
  units: string,
  appid: string
): Promise<any> {
  const res = await fetch(`${URL}?q=${q}&units=${units}&appid=${appid}`);

  if (!res.ok) {
    try {
      const err: { message: string } = await res.json();
      throw new CustomError(err.message, res.status);
    } catch {
      throw new CustomError("レスポンス解析に失敗しました", res.status);
    }
  }

  return await res.json();
}
