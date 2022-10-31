package operations

import (
"openapi/pkg/models/shared")
var FetchServiceRoleServers = []string{
	"https://conversations.twilio.com",
}

type FetchServiceRolePathParams struct {
    ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchServiceRoleSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchServiceRoleRequest struct {
    ServerURL *string 
    PathParams FetchServiceRolePathParams 
    Security FetchServiceRoleSecurity 
    
}

type FetchServiceRoleResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1ServiceServiceRole *shared.ConversationsV1ServiceServiceRole 
    
}

