package shared

type ServerlessV1ServiceBuildBuildStatus struct {
	AccountSid *string                    `json:"account_sid"`
	ServiceSid *string                    `json:"service_sid"`
	Sid        *string                    `json:"sid"`
	Status     *BuildStatusEnumStatusEnum `json:"status"`
	URL        *string                    `json:"url"`
}
