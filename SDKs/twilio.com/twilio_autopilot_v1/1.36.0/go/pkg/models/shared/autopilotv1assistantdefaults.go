package shared

type AutopilotV1AssistantDefaults struct {
	AccountSid   *string      `json:"account_sid,omitempty"`
	AssistantSid *string      `json:"assistant_sid,omitempty"`
	Data         *interface{} `json:"data,omitempty"`
	URL          *string      `json:"url,omitempty"`
}
