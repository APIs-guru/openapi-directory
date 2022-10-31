package operations

import (
"openapi/pkg/models/shared")
var DeleteUnderstandFieldTypeServers = []string{
	"https://preview.twilio.com",
}

type DeleteUnderstandFieldTypePathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteUnderstandFieldTypeSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteUnderstandFieldTypeRequest struct {
    ServerURL *string 
    PathParams DeleteUnderstandFieldTypePathParams 
    Security DeleteUnderstandFieldTypeSecurity 
    
}

type DeleteUnderstandFieldTypeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

