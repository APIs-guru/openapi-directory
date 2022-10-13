package shared

type BoundingBoxNortheast struct {
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
}

type BoundingBoxSouthwest struct {
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
}

type BoundingBox struct {
	Northeast *BoundingBoxNortheast `json:"northeast"`
	Southwest *BoundingBoxSouthwest `json:"southwest"`
}
