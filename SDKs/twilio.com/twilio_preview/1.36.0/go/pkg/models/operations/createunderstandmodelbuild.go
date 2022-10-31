package operations

import (
"openapi/pkg/models/shared")
var CreateUnderstandModelBuildServers = []string{
	"https://preview.twilio.com",
}

type CreateUnderstandModelBuildPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    
}

type CreateUnderstandModelBuildCreateUnderstandModelBuildRequest struct {
    StatusCallback *string `form:"name=StatusCallback"`
    UniqueName *string `form:"name=UniqueName"`
    
}

type CreateUnderstandModelBuildSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateUnderstandModelBuildRequest struct {
    ServerURL *string 
    PathParams CreateUnderstandModelBuildPathParams 
    Request *CreateUnderstandModelBuildCreateUnderstandModelBuildRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateUnderstandModelBuildSecurity 
    
}

type CreateUnderstandModelBuildResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewUnderstandAssistantModelBuild *shared.PreviewUnderstandAssistantModelBuild 
    
}

