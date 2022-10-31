package operations

import (
"openapi/pkg/models/shared")
var FetchUserServers = []string{
	"https://conversations.twilio.com",
}

type FetchUserPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchUserSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchUserRequest struct {
    ServerURL *string 
    PathParams FetchUserPathParams 
    Security FetchUserSecurity 
    
}

type FetchUserResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1User *shared.ConversationsV1User 
    
}

