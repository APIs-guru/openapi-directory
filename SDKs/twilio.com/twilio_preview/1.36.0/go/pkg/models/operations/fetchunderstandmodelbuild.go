package operations

import (
"openapi/pkg/models/shared")
var FetchUnderstandModelBuildServers = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandModelBuildPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchUnderstandModelBuildSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchUnderstandModelBuildRequest struct {
    ServerURL *string 
    PathParams FetchUnderstandModelBuildPathParams 
    Security FetchUnderstandModelBuildSecurity 
    
}

type FetchUnderstandModelBuildResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewUnderstandAssistantModelBuild *shared.PreviewUnderstandAssistantModelBuild 
    
}

