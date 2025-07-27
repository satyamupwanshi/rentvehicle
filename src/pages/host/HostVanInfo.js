import React from "react"
import { useOutletContext } from "react-router-dom"
import './hstvans.css'

export default function HostVanInfo() {
    const { van } = useOutletContext()
    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{van.name}</span></h4>
            <h4>Category: <span>{van.type}</span></h4>
            <h4>Description: <span>{van.description}</span></h4>
            <h4>Visibility: public</h4>
        </section>    )
}