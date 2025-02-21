export type Geo = {
  lat: number
  lon: number
  name: string
  country: string
  state?: string
}

type Coord = {
  lon: number
  lat: number
}

type WeatherInfo = {
  id: number
  main: string
  description: string
  icon: string
}

type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

type Wind = {
  speed: number
  deg: number
  gust: number
}

type Rain = {
  '1h': number
}

type Clouds = {
  all: number
}

type Sys = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export type Weather = {
  coord: Coord
  weather: WeatherInfo[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  rain?: Rain
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}
