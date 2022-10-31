package shared



type ServerlessV1ServiceBuildBuildStatus struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *BuildStatusEnumStatusEnum `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

