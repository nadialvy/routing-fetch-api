export default function WeatherCard({ weatherData }) {
  return (
    <div className="p-6">
      <p className="text-xl">Weather</p>
      <p className="text-2xl">{weatherData.name}</p>
      <p className="text-2xl">{weatherData.main.temp}°C</p>
    </div>
  )
}