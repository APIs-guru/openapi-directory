package shared

type StatementsViewModelSearchResult struct {
	Results      []StatementsViewModelItem `json:"results"`
	TotalResults *int32                    `json:"totalResults"`
}
