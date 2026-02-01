/**
 * Mapa Leaflet - Componente separado para lazy loading
 */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix default icon en bundlers
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})
L.Marker.prototype.options.icon = defaultIcon

interface MapProps {
  center: [number, number]
  zoom: number
  markerTitle?: string
  markerDescription?: string
  howToGetText?: string
}

export function Map({ center, zoom, markerTitle, markerDescription, howToGetText = 'Cómo llegar' }: MapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="h-full w-full"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          <div className="text-center">
            {markerTitle && (
              <strong className="block text-neutral-900">{markerTitle}</strong>
            )}
            {markerDescription && (
              <span className="text-sm text-neutral-600">{markerDescription}</span>
            )}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${center[0]},${center[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              {howToGetText} →
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
