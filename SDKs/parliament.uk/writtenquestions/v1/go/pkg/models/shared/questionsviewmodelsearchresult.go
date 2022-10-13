package shared

type QuestionsViewModelSearchResult struct {
	Results      []QuestionsViewModelItem `json:"results"`
	TotalResults *int32                   `json:"totalResults"`
}
