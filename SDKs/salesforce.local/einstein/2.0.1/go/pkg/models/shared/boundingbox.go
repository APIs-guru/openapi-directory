package shared

type BoundingBox struct {
	MaxX *int32 `json:"maxX"`
	MaxY *int32 `json:"maxY"`
	MinX *int32 `json:"minX"`
	MinY *int32 `json:"minY"`
}
