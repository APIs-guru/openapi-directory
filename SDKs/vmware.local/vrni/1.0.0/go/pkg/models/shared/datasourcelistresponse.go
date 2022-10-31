package shared



type DataSourceListResponse struct {
    Results []DataSourceEntityID `json:"results,omitempty"`
    TotalCount *int64 `json:"total_count,omitempty"`
    
}

