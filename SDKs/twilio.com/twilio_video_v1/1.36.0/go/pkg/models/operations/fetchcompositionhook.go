package operations

import (
"openapi/pkg/models/shared")
var FetchCompositionHookServers = []string{
	"https://video.twilio.com",
}

type FetchCompositionHookPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchCompositionHookSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchCompositionHookRequest struct {
    ServerURL *string 
    PathParams FetchCompositionHookPathParams 
    Security FetchCompositionHookSecurity 
    
}

type FetchCompositionHookResponse struct {
    ContentType string 
    StatusCode int64 
    VideoV1CompositionHook *shared.VideoV1CompositionHook 
    
}

