package operations

import (
"openapi/pkg/models/shared")
var FetchFieldValueServers = []string{
	"https://autopilot.twilio.com",
}

type FetchFieldValuePathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    FieldTypeSid string `pathParam:"style=simple,explode=false,name=FieldTypeSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchFieldValueSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchFieldValueRequest struct {
    ServerURL *string 
    PathParams FetchFieldValuePathParams 
    Security FetchFieldValueSecurity 
    
}

type FetchFieldValueResponse struct {
    ContentType string 
    StatusCode int64 
    AutopilotV1AssistantFieldTypeFieldValue *shared.AutopilotV1AssistantFieldTypeFieldValue 
    
}

