package shared

type QuestionsViewModelSearchResult struct {
	Results      []QuestionsViewModelItem `json:"results,omitempty"`
	TotalResults *int32                   `json:"totalResults,omitempty"`
}
