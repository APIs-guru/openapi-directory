package shared

type RelatedResponseSchema struct {
	Count  *int32                  `json:"count"`
	Result []RelatedResultResponse `json:"result"`
}
