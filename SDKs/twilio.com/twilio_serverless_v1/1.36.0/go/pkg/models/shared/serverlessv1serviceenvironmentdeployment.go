package shared

import (
"time")

type ServerlessV1ServiceEnvironmentDeployment struct {
    AccountSid *string `json:"account_sid,omitempty"`
    BuildSid *string `json:"build_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    EnvironmentSid *string `json:"environment_sid,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

