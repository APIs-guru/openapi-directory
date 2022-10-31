package shared



type RelatedResponseSchema struct {
    Count *int32 `json:"count,omitempty"`
    Result []RelatedResultResponse `json:"result,omitempty"`
    
}

