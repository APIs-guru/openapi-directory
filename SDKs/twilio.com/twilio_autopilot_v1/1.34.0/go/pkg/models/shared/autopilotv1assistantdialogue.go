package shared

type AutopilotV1AssistantDialogue struct {
	AccountSid   *string      `json:"account_sid"`
	AssistantSid *string      `json:"assistant_sid"`
	Data         *interface{} `json:"data"`
	Sid          *string      `json:"sid"`
	URL          *string      `json:"url"`
}
