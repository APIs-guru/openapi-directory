package operations

import (
"openapi/pkg/models/shared")
var FetchUnderstandQueryServers = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandQueryPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchUnderstandQuerySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchUnderstandQueryRequest struct {
    ServerURL *string 
    PathParams FetchUnderstandQueryPathParams 
    Security FetchUnderstandQuerySecurity 
    
}

type FetchUnderstandQueryResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewUnderstandAssistantQuery *shared.PreviewUnderstandAssistantQuery 
    
}

