package operations

import (
"openapi/pkg/models/shared")
var DeleteUnderstandAssistantServers = []string{
	"https://preview.twilio.com",
}

type DeleteUnderstandAssistantPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteUnderstandAssistantSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteUnderstandAssistantRequest struct {
    ServerURL *string 
    PathParams DeleteUnderstandAssistantPathParams 
    Security DeleteUnderstandAssistantSecurity 
    
}

type DeleteUnderstandAssistantResponse struct {
    ContentType string 
    StatusCode int64 
    
}

