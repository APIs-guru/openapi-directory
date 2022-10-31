package shared

type GeolocateBounds struct {
	Default *BoundingBox `json:"default,omitempty"`
	Limit   *BoundingBox `json:"limit,omitempty"`
}
