package shared

type DailyReportViewModelItem struct {
	Links []Link                `json:"links,omitempty"`
	Value *DailyReportViewModel `json:"value,omitempty"`
}
