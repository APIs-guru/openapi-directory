package shared

type StudioV1FlowEngagementStepStepContext struct {
	AccountSid    *string      `json:"account_sid"`
	Context       *interface{} `json:"context"`
	EngagementSid *string      `json:"engagement_sid"`
	FlowSid       *string      `json:"flow_sid"`
	StepSid       *string      `json:"step_sid"`
	URL           *string      `json:"url"`
}
