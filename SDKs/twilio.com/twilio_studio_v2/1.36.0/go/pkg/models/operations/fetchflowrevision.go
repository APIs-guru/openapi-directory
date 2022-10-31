package operations

import (
"openapi/pkg/models/shared")
var FetchFlowRevisionServers = []string{
	"https://studio.twilio.com",
}

type FetchFlowRevisionPathParams struct {
    Revision string `pathParam:"style=simple,explode=false,name=Revision"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchFlowRevisionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchFlowRevisionRequest struct {
    ServerURL *string 
    PathParams FetchFlowRevisionPathParams 
    Security FetchFlowRevisionSecurity 
    
}

type FetchFlowRevisionResponse struct {
    ContentType string 
    StatusCode int64 
    StudioV2FlowFlowRevision *shared.StudioV2FlowFlowRevision 
    
}

