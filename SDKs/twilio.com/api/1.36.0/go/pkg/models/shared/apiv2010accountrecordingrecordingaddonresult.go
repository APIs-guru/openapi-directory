package shared



type APIV2010AccountRecordingRecordingAddOnResult struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AddOnConfigurationSid *string `json:"add_on_configuration_sid,omitempty"`
    AddOnSid *string `json:"add_on_sid,omitempty"`
    DateCompleted *string `json:"date_completed,omitempty"`
    DateCreated *string `json:"date_created,omitempty"`
    DateUpdated *string `json:"date_updated,omitempty"`
    ReferenceSid *string `json:"reference_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *RecordingAddOnResultEnumStatusEnum `json:"status,omitempty"`
    SubresourceUris map[string]interface{} `json:"subresource_uris,omitempty"`
    
}

