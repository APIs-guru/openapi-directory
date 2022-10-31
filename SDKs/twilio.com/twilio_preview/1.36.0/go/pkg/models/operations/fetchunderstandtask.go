package operations

import (
"openapi/pkg/models/shared")
var FetchUnderstandTaskServers = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandTaskPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchUnderstandTaskSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchUnderstandTaskRequest struct {
    ServerURL *string 
    PathParams FetchUnderstandTaskPathParams 
    Security FetchUnderstandTaskSecurity 
    
}

type FetchUnderstandTaskResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewUnderstandAssistantTask *shared.PreviewUnderstandAssistantTask 
    
}

