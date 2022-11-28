package shared

// Offset
// Offsets the position of an asset horizontally or vertically by a relative distance.
type Offset struct {
	X *float32 `json:"x,omitempty"`
	Y *float32 `json:"y,omitempty"`
}
