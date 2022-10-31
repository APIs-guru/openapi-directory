package shared



type PagingInfo struct {
    Skip *int32 `json:"Skip,omitempty"`
    StatusCounts []StatusCount `json:"StatusCounts,omitempty"`
    Take *int32 `json:"Take,omitempty"`
    Total *int32 `json:"Total,omitempty"`
    
}

