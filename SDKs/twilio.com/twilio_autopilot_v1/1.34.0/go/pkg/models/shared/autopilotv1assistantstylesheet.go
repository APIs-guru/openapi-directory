package shared

type AutopilotV1AssistantStyleSheet struct {
	AccountSid   *string      `json:"account_sid"`
	AssistantSid *string      `json:"assistant_sid"`
	Data         *interface{} `json:"data"`
	URL          *string      `json:"url"`
}
