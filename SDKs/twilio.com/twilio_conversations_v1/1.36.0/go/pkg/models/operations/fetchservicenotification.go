package operations

import (
"openapi/pkg/models/shared")
var FetchServiceNotificationServers = []string{
	"https://conversations.twilio.com",
}

type FetchServiceNotificationPathParams struct {
    ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
    
}

type FetchServiceNotificationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchServiceNotificationRequest struct {
    ServerURL *string 
    PathParams FetchServiceNotificationPathParams 
    Security FetchServiceNotificationSecurity 
    
}

type FetchServiceNotificationResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1ServiceServiceConfigurationServiceNotification *shared.ConversationsV1ServiceServiceConfigurationServiceNotification 
    
}

