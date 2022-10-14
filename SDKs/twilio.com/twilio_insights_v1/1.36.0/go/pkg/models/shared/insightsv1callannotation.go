package shared

type InsightsV1CallAnnotation struct {
	AccountSid        *string                              `json:"account_sid,omitempty"`
	AnsweredBy        *AnnotationEnumAnsweredByEnum        `json:"answered_by,omitempty"`
	CallScore         *int64                               `json:"call_score,omitempty"`
	CallSid           *string                              `json:"call_sid,omitempty"`
	Comment           *string                              `json:"comment,omitempty"`
	ConnectivityIssue *AnnotationEnumConnectivityIssueEnum `json:"connectivity_issue,omitempty"`
	Incident          *string                              `json:"incident,omitempty"`
	QualityIssues     []string                             `json:"quality_issues,omitempty"`
	Spam              *bool                                `json:"spam,omitempty"`
	URL               *string                              `json:"url,omitempty"`
}
