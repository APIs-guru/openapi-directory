package operations

import (
"openapi/pkg/models/shared")
var FetchUnderstandStyleSheetServers = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandStyleSheetPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    
}

type FetchUnderstandStyleSheetSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchUnderstandStyleSheetRequest struct {
    ServerURL *string 
    PathParams FetchUnderstandStyleSheetPathParams 
    Security FetchUnderstandStyleSheetSecurity 
    
}

type FetchUnderstandStyleSheetResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewUnderstandAssistantStyleSheet *shared.PreviewUnderstandAssistantStyleSheet 
    
}

