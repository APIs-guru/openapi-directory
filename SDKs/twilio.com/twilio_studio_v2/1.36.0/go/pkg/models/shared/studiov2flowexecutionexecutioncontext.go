package shared

type StudioV2FlowExecutionExecutionContext struct {
	AccountSid   *string      `json:"account_sid,omitempty"`
	Context      *interface{} `json:"context,omitempty"`
	ExecutionSid *string      `json:"execution_sid,omitempty"`
	FlowSid      *string      `json:"flow_sid,omitempty"`
	URL          *string      `json:"url,omitempty"`
}
