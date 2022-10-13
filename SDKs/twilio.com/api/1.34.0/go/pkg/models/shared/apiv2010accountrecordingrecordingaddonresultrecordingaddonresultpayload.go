package shared

type APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload struct {
	AccountSid            *string                `json:"account_sid"`
	AddOnConfigurationSid *string                `json:"add_on_configuration_sid"`
	AddOnResultSid        *string                `json:"add_on_result_sid"`
	AddOnSid              *string                `json:"add_on_sid"`
	ContentType           *string                `json:"content_type"`
	DateCreated           *string                `json:"date_created"`
	DateUpdated           *string                `json:"date_updated"`
	Label                 *string                `json:"label"`
	ReferenceSid          *string                `json:"reference_sid"`
	Sid                   *string                `json:"sid"`
	SubresourceUris       map[string]interface{} `json:"subresource_uris"`
}
