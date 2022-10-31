package operations

import (
"openapi/pkg/models/shared")
var CreateUnderstandFieldServers = []string{
	"https://preview.twilio.com",
}

type CreateUnderstandFieldPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    TaskSid string `pathParam:"style=simple,explode=false,name=TaskSid"`
    
}

type CreateUnderstandFieldCreateUnderstandFieldRequest struct {
    FieldType string `form:"name=FieldType"`
    UniqueName string `form:"name=UniqueName"`
    
}

type CreateUnderstandFieldSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateUnderstandFieldRequest struct {
    ServerURL *string 
    PathParams CreateUnderstandFieldPathParams 
    Request *CreateUnderstandFieldCreateUnderstandFieldRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateUnderstandFieldSecurity 
    
}

type CreateUnderstandFieldResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewUnderstandAssistantTaskField *shared.PreviewUnderstandAssistantTaskField 
    
}

