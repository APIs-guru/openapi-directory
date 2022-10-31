package operations

import (
"openapi/pkg/models/shared")
var DeleteUnderstandModelBuildServers = []string{
	"https://preview.twilio.com",
}

type DeleteUnderstandModelBuildPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteUnderstandModelBuildSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteUnderstandModelBuildRequest struct {
    ServerURL *string 
    PathParams DeleteUnderstandModelBuildPathParams 
    Security DeleteUnderstandModelBuildSecurity 
    
}

type DeleteUnderstandModelBuildResponse struct {
    ContentType string 
    StatusCode int64 
    
}

