package operations

import (
"openapi/pkg/models/shared")
var FetchIncomingPhoneNumberServers = []string{
	"https://api.twilio.com",
}

type FetchIncomingPhoneNumberPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchIncomingPhoneNumberSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchIncomingPhoneNumberRequest struct {
    ServerURL *string 
    PathParams FetchIncomingPhoneNumberPathParams 
    Security FetchIncomingPhoneNumberSecurity 
    
}

type FetchIncomingPhoneNumberResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountIncomingPhoneNumber *shared.APIV2010AccountIncomingPhoneNumber 
    
}

