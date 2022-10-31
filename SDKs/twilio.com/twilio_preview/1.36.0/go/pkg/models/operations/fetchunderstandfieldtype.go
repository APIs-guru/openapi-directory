package operations

import (
"openapi/pkg/models/shared")
var FetchUnderstandFieldTypeServers = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandFieldTypePathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchUnderstandFieldTypeSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchUnderstandFieldTypeRequest struct {
    ServerURL *string 
    PathParams FetchUnderstandFieldTypePathParams 
    Security FetchUnderstandFieldTypeSecurity 
    
}

type FetchUnderstandFieldTypeResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewUnderstandAssistantFieldType *shared.PreviewUnderstandAssistantFieldType 
    
}

