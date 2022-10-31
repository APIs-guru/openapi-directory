package shared



type CollectionMetadata struct {
    Count *int64 `json:"count,omitempty"`
    Limit *int64 `json:"limit,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    
}

