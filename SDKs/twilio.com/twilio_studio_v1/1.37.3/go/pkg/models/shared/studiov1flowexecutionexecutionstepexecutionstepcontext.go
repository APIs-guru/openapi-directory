package shared

type StudioV1FlowExecutionExecutionStepExecutionStepContext struct {
	AccountSid   *string      `json:"account_sid,omitempty"`
	Context      *interface{} `json:"context,omitempty"`
	ExecutionSid *string      `json:"execution_sid,omitempty"`
	FlowSid      *string      `json:"flow_sid,omitempty"`
	StepSid      *string      `json:"step_sid,omitempty"`
	URL          *string      `json:"url,omitempty"`
}
