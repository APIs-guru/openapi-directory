package shared

type RaiseAlertInfo struct {
	Attachments []AlertAttachment    `json:"attachments,omitempty"`
	Category    *string              `json:"category,omitempty"`
	ExternalID  *string              `json:"externalId,omitempty"`
	Flags       *int32               `json:"flags,omitempty"`
	Parameters  []EventParameterInfo `json:"parameters,omitempty"`
	Severity    *int32               `json:"severity,omitempty"`
	Text        *string              `json:"text,omitempty"`
	Title       *string              `json:"title,omitempty"`
}
