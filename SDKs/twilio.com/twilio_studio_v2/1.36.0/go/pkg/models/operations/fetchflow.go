package operations

import (
"openapi/pkg/models/shared")
var FetchFlowServers = []string{
	"https://studio.twilio.com",
}

type FetchFlowPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchFlowSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchFlowRequest struct {
    ServerURL *string 
    PathParams FetchFlowPathParams 
    Security FetchFlowSecurity 
    
}

type FetchFlowResponse struct {
    ContentType string 
    StatusCode int64 
    StudioV2Flow *shared.StudioV2Flow 
    
}

