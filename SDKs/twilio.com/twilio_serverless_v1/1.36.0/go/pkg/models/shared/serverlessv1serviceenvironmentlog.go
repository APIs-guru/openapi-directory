package shared

import (
"time")

type ServerlessV1ServiceEnvironmentLog struct {
    AccountSid *string `json:"account_sid,omitempty"`
    BuildSid *string `json:"build_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DeploymentSid *string `json:"deployment_sid,omitempty"`
    EnvironmentSid *string `json:"environment_sid,omitempty"`
    FunctionSid *string `json:"function_sid,omitempty"`
    Level *LogEnumLevelEnum `json:"level,omitempty"`
    Message *string `json:"message,omitempty"`
    RequestSid *string `json:"request_sid,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

