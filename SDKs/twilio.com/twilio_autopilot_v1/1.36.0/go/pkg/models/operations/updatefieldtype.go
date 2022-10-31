package operations

import (
"openapi/pkg/models/shared")
var UpdateFieldTypeServers = []string{
	"https://autopilot.twilio.com",
}

type UpdateFieldTypePathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateFieldTypeUpdateFieldTypeRequest struct {
    FriendlyName *string `form:"name=FriendlyName"`
    UniqueName *string `form:"name=UniqueName"`
    
}

type UpdateFieldTypeSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateFieldTypeRequest struct {
    ServerURL *string 
    PathParams UpdateFieldTypePathParams 
    Request *UpdateFieldTypeUpdateFieldTypeRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateFieldTypeSecurity 
    
}

type UpdateFieldTypeResponse struct {
    ContentType string 
    StatusCode int64 
    AutopilotV1AssistantFieldType *shared.AutopilotV1AssistantFieldType 
    
}

