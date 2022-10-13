package shared

type APIV2010AccountRecordingRecordingAddOnResult struct {
	AccountSid            *string                             `json:"account_sid"`
	AddOnConfigurationSid *string                             `json:"add_on_configuration_sid"`
	AddOnSid              *string                             `json:"add_on_sid"`
	DateCompleted         *string                             `json:"date_completed"`
	DateCreated           *string                             `json:"date_created"`
	DateUpdated           *string                             `json:"date_updated"`
	ReferenceSid          *string                             `json:"reference_sid"`
	Sid                   *string                             `json:"sid"`
	Status                *RecordingAddOnResultEnumStatusEnum `json:"status"`
	SubresourceUris       map[string]interface{}              `json:"subresource_uris"`
}
