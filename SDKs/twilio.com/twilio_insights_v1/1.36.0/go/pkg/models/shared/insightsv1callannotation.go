package shared

type InsightsV1CallAnnotation struct {
	AccountSid        *string                              `json:"account_sid"`
	AnsweredBy        *AnnotationEnumAnsweredByEnum        `json:"answered_by"`
	CallScore         *int64                               `json:"call_score"`
	CallSid           *string                              `json:"call_sid"`
	Comment           *string                              `json:"comment"`
	ConnectivityIssue *AnnotationEnumConnectivityIssueEnum `json:"connectivity_issue"`
	Incident          *string                              `json:"incident"`
	QualityIssues     []string                             `json:"quality_issues"`
	Spam              *bool                                `json:"spam"`
	URL               *string                              `json:"url"`
}
