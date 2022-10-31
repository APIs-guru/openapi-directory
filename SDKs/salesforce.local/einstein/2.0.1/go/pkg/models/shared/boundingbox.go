package shared

type BoundingBox struct {
	MaxX *int32 `json:"maxX,omitempty"`
	MaxY *int32 `json:"maxY,omitempty"`
	MinX *int32 `json:"minX,omitempty"`
	MinY *int32 `json:"minY,omitempty"`
}
