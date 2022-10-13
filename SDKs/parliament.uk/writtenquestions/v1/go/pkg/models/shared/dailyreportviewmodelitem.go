package shared

type DailyReportViewModelItem struct {
	Links []Link                `json:"links"`
	Value *DailyReportViewModel `json:"value"`
}
