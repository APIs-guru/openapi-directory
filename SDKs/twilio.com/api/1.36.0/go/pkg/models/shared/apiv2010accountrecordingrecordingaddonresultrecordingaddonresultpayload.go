package shared

type APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload struct {
	AccountSid            *string                `json:"account_sid,omitempty"`
	AddOnConfigurationSid *string                `json:"add_on_configuration_sid,omitempty"`
	AddOnResultSid        *string                `json:"add_on_result_sid,omitempty"`
	AddOnSid              *string                `json:"add_on_sid,omitempty"`
	ContentType           *string                `json:"content_type,omitempty"`
	DateCreated           *string                `json:"date_created,omitempty"`
	DateUpdated           *string                `json:"date_updated,omitempty"`
	Label                 *string                `json:"label,omitempty"`
	ReferenceSid          *string                `json:"reference_sid,omitempty"`
	Sid                   *string                `json:"sid,omitempty"`
	SubresourceUris       map[string]interface{} `json:"subresource_uris,omitempty"`
}
