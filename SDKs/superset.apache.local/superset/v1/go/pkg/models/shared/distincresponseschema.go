package shared

type DistincResponseSchema struct {
	Count  *int32                   `json:"count,omitempty"`
	Result []DistinctResultResponse `json:"result,omitempty"`
}
