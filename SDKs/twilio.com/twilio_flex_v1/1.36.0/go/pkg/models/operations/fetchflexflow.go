package operations

import (
"openapi/pkg/models/shared")
var FetchFlexFlowServers = []string{
	"https://flex-api.twilio.com",
}

type FetchFlexFlowPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchFlexFlowSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchFlexFlowRequest struct {
    ServerURL *string 
    PathParams FetchFlexFlowPathParams 
    Security FetchFlexFlowSecurity 
    
}

type FetchFlexFlowResponse struct {
    ContentType string 
    StatusCode int64 
    FlexV1FlexFlow *shared.FlexV1FlexFlow 
    
}

