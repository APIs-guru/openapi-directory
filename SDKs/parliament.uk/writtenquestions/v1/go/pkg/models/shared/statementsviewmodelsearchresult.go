package shared



type StatementsViewModelSearchResult struct {
    Results []StatementsViewModelItem `json:"results,omitempty"`
    TotalResults *int32 `json:"totalResults,omitempty"`
    
}

