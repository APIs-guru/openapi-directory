package shared

type DailyReportViewModelSearchResult struct {
	Results      []DailyReportViewModelItem `json:"results"`
	TotalResults *int32                     `json:"totalResults"`
}
