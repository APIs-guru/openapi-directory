package operations

import (
"openapi/pkg/models/shared")
var DeleteModelBuildServers = []string{
	"https://autopilot.twilio.com",
}

type DeleteModelBuildPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteModelBuildSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteModelBuildRequest struct {
    ServerURL *string 
    PathParams DeleteModelBuildPathParams 
    Security DeleteModelBuildSecurity 
    
}

type DeleteModelBuildResponse struct {
    ContentType string 
    StatusCode int64 
    
}

