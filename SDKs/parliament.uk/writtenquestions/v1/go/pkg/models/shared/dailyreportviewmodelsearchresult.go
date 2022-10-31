package shared

type DailyReportViewModelSearchResult struct {
	Results      []DailyReportViewModelItem `json:"results,omitempty"`
	TotalResults *int32                     `json:"totalResults,omitempty"`
}
