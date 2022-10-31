package shared

type TeamDutySummaryInfo struct {
	DutyAssistEnabled *bool             `json:"dutyAssistEnabled,omitempty"`
	DutySummaries     []DutySummaryInfo `json:"dutySummaries,omitempty"`
}
