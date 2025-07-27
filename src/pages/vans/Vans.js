import React from "react"
import './vans.css'
import { Link } from "react-router-dom"

export default function Vans() {
  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetch("/api/vans")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch vans")
        return res.json()
      })
      .then(data => {
        setVans(data.vans)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const vanElements = vans.map(van => (
    <Link to={`/vans/${van.id}`} key={van.id} className="van-tile">
      <img src={van.imageUrl} alt={van.name} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>
      </div>
      <div className="van-type-wrapper">
        <i className={`van-type ${van.type}`}>{van.type}</i>
      </div>
    </Link>
  ))

  return (
    <div className="van-list-container">
      {loading && <h2>Loading...</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      {!loading && !error && (
        <div className="van-list">
          {vanElements}
        </div>
      )}
    </div>
  )
}
