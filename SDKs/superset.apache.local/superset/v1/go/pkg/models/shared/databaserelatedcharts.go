package shared



type DatabaseRelatedCharts struct {
    Count *int32 `json:"count,omitempty"`
    Result []DatabaseRelatedChart `json:"result,omitempty"`
    
}

