import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { van } = useOutletContext()
    return (
        <img alt="title" src={van.imageUrl} className="host-van-detail-image" />
    )
}