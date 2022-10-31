package operations

import (
"openapi/pkg/models/shared")
var DeleteSubscribedEventServers = []string{
	"https://events.twilio.com",
}

type DeleteSubscribedEventPathParams struct {
    SubscriptionSid string `pathParam:"style=simple,explode=false,name=SubscriptionSid"`
    Type string `pathParam:"style=simple,explode=false,name=Type"`
    
}

type DeleteSubscribedEventSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteSubscribedEventRequest struct {
    ServerURL *string 
    PathParams DeleteSubscribedEventPathParams 
    Security DeleteSubscribedEventSecurity 
    
}

type DeleteSubscribedEventResponse struct {
    ContentType string 
    StatusCode int64 
    
}

