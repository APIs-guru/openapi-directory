package shared

type GeolocateBounds struct {
	Default *BoundingBox `json:"default"`
	Limit   *BoundingBox `json:"limit"`
}
