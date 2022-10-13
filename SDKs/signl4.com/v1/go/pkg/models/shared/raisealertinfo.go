package shared

type RaiseAlertInfo struct {
	Attachments []AlertAttachment    `json:"attachments"`
	Category    *string              `json:"category"`
	ExternalID  *string              `json:"externalId"`
	Flags       *int32               `json:"flags"`
	Parameters  []EventParameterInfo `json:"parameters"`
	Severity    *int32               `json:"severity"`
	Text        *string              `json:"text"`
	Title       *string              `json:"title"`
}
