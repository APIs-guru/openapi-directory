package shared

type APIV2010AccountCallCallFeedback struct {
	AccountSid   *string                      `json:"account_sid,omitempty"`
	DateCreated  *string                      `json:"date_created,omitempty"`
	DateUpdated  *string                      `json:"date_updated,omitempty"`
	Issues       []CallFeedbackEnumIssuesEnum `json:"issues,omitempty"`
	QualityScore *int64                       `json:"quality_score,omitempty"`
	Sid          *string                      `json:"sid,omitempty"`
}
