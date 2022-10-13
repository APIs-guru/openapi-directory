package shared

type DistincResponseSchema struct {
	Count  *int32                   `json:"count"`
	Result []DistinctResultResponse `json:"result"`
}
