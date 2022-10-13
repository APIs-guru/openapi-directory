package shared

type AutopilotV1AssistantTaskTaskStatistics struct {
	AccountSid   *string `json:"account_sid"`
	AssistantSid *string `json:"assistant_sid"`
	FieldsCount  *int64  `json:"fields_count"`
	SamplesCount *int64  `json:"samples_count"`
	TaskSid      *string `json:"task_sid"`
	URL          *string `json:"url"`
}
