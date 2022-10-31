package operations

import (
"openapi/pkg/models/shared")
var FetchServiceUserServers = []string{
	"https://conversations.twilio.com",
}

type FetchServiceUserPathParams struct {
    ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchServiceUserSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchServiceUserRequest struct {
    ServerURL *string 
    PathParams FetchServiceUserPathParams 
    Security FetchServiceUserSecurity 
    
}

type FetchServiceUserResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1ServiceServiceUser *shared.ConversationsV1ServiceServiceUser 
    
}

