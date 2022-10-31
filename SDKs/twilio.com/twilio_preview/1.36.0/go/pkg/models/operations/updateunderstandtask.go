package operations

import (
"openapi/pkg/models/shared")
var UpdateUnderstandTaskServers = []string{
	"https://preview.twilio.com",
}

type UpdateUnderstandTaskPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateUnderstandTaskUpdateUnderstandTaskRequest struct {
    Actions *interface{} `form:"name=Actions"`
    ActionsURL *string `form:"name=ActionsUrl"`
    FriendlyName *string `form:"name=FriendlyName"`
    UniqueName *string `form:"name=UniqueName"`
    
}

type UpdateUnderstandTaskSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateUnderstandTaskRequest struct {
    ServerURL *string 
    PathParams UpdateUnderstandTaskPathParams 
    Request *UpdateUnderstandTaskUpdateUnderstandTaskRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateUnderstandTaskSecurity 
    
}

type UpdateUnderstandTaskResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewUnderstandAssistantTask *shared.PreviewUnderstandAssistantTask 
    
}

