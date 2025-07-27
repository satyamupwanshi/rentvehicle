import React from "react"
import { useParams, Link, Outlet , NavLink} from "react-router-dom"
import "./HostVanDetails.css"

export default function HostVanDetails() {
  const { id } = useParams()
  const [van, setVan] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  const activeStyles = {
        fontWeight: "bold",
        color: "#161616"
    }

  React.useEffect(() => {
    const fetchVan = async () => {
      try {
        const response = await fetch(`/api/host/vans/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch van details')
        }
        const data = await response.json()
        setVan(data.van)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchVan()
  }, [id])

  return (
    <section>
    <div className="host-van-detail-container">
      <Link
                to=".."
                relative="path"
                className="back-link"
            >&larr; <span>Back to all vans</span></Link>

      {van ? (
        <div className="host-van-detail">
  <div className="van-top-info">
    <img src={van.imageUrl} alt={van.name} />
    <div className="van-info">
      <span className="van-type-badge">{van.type}</span>
      <h2 className="van-name">{van.name}</h2>
      <p className="van-price">${van.price}/day</p>
    </div>
  </div>
  <nav className="host-van-detail-nav">
                    <NavLink   
                      to="."
                      end
                      style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                                     
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                         </NavLink>
                    
                </nav>

  <div className="van-outlet-section">
    <Outlet context={{van}} />
  </div>
</div>

      ) : (
        <h3>Loading...</h3>
      )}
    </div>
    </section>
  )
}
