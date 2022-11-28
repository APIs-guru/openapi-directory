package shared

// TflAPIPresentationEntitiesPoint
// Represents a point located at a latitude and longitude using the WGS84 co-ordinate system.
type TflAPIPresentationEntitiesPoint struct {
	Lat *float64 `json:"lat,omitempty"`
	Lon *float64 `json:"lon,omitempty"`
}
