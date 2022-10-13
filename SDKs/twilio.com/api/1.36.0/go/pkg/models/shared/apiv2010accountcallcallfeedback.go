package shared

type APIV2010AccountCallCallFeedback struct {
	AccountSid   *string                      `json:"account_sid"`
	DateCreated  *string                      `json:"date_created"`
	DateUpdated  *string                      `json:"date_updated"`
	Issues       []CallFeedbackEnumIssuesEnum `json:"issues"`
	QualityScore *int64                       `json:"quality_score"`
	Sid          *string                      `json:"sid"`
}
