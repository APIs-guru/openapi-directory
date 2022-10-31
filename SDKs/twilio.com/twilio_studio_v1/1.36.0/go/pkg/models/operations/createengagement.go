package operations

import (
"openapi/pkg/models/shared")
var CreateEngagementServers = []string{
	"https://studio.twilio.com",
}

type CreateEngagementPathParams struct {
    FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
    
}

type CreateEngagementCreateEngagementRequest struct {
    From string `form:"name=From"`
    Parameters *interface{} `form:"name=Parameters"`
    To string `form:"name=To"`
    
}

type CreateEngagementSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateEngagementRequest struct {
    ServerURL *string 
    PathParams CreateEngagementPathParams 
    Request *CreateEngagementCreateEngagementRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateEngagementSecurity 
    
}

type CreateEngagementResponse struct {
    ContentType string 
    StatusCode int64 
    StudioV1FlowEngagement *shared.StudioV1FlowEngagement 
    
}

