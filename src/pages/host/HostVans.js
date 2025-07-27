import React from "react"
import { Link } from "react-router-dom"
import './HostVans.css'

export default function HostVans() {
  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch host vans")
        }
        return res.json()
      })
      .then((data) => {
        setVans(data.vans)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Fetch error:", err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const hostVansEls = vans.map((van) => (
    <Link
      to={`/host/vans/${van.id}`}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single">
        <img src={van.imageUrl} alt={van.name} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {loading && <h2>Loading...</h2>}
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        {!loading && !error && vans.length > 0 && <section>{hostVansEls}</section>}
        {!loading && !error && vans.length === 0 && <p>No vans found.</p>}
      </div>
    </section>
  )
}
