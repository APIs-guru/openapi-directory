package shared

type StudioV2FlowExecutionExecutionContext struct {
	AccountSid   *string      `json:"account_sid"`
	Context      *interface{} `json:"context"`
	ExecutionSid *string      `json:"execution_sid"`
	FlowSid      *string      `json:"flow_sid"`
	URL          *string      `json:"url"`
}
