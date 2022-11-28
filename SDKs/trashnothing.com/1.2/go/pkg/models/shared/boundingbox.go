package shared

// BoundingBoxNortheast
// The point defining the northeast corner of the bounding box.
type BoundingBoxNortheast struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}

// BoundingBoxSouthwest
// The point defining the southwest corner of the bounding box.
type BoundingBoxSouthwest struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}

// BoundingBox
// A geographic bounding box defined by its southwest and northeast points.
type BoundingBox struct {
	Northeast *BoundingBoxNortheast `json:"northeast,omitempty"`
	Southwest *BoundingBoxSouthwest `json:"southwest,omitempty"`
}
