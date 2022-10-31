package operations

import (
"openapi/pkg/models/shared")
var FetchUnderstandFieldServers = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandFieldPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    TaskSid string `pathParam:"style=simple,explode=false,name=TaskSid"`
    
}

type FetchUnderstandFieldSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchUnderstandFieldRequest struct {
    ServerURL *string 
    PathParams FetchUnderstandFieldPathParams 
    Security FetchUnderstandFieldSecurity 
    
}

type FetchUnderstandFieldResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewUnderstandAssistantTaskField *shared.PreviewUnderstandAssistantTaskField 
    
}

