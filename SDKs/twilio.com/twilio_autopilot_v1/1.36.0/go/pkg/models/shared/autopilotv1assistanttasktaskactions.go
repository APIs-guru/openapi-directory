package shared

type AutopilotV1AssistantTaskTaskActions struct {
	AccountSid   *string      `json:"account_sid"`
	AssistantSid *string      `json:"assistant_sid"`
	Data         *interface{} `json:"data"`
	TaskSid      *string      `json:"task_sid"`
	URL          *string      `json:"url"`
}
