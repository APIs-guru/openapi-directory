package shared

type TeamDutySummaryInfo struct {
	DutyAssistEnabled *bool             `json:"dutyAssistEnabled"`
	DutySummaries     []DutySummaryInfo `json:"dutySummaries"`
}
