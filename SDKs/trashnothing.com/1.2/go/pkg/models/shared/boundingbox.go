package shared

type BoundingBoxNortheast struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}

type BoundingBoxSouthwest struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}

type BoundingBox struct {
	Northeast *BoundingBoxNortheast `json:"northeast,omitempty"`
	Southwest *BoundingBoxSouthwest `json:"southwest,omitempty"`
}
