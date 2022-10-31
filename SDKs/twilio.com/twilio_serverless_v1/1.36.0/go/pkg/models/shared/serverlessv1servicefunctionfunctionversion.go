package shared

import (
"time")

type ServerlessV1ServiceFunctionFunctionVersion struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    FunctionSid *string `json:"function_sid,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Path *string `json:"path,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    Visibility *FunctionVersionEnumVisibilityEnum `json:"visibility,omitempty"`
    
}

