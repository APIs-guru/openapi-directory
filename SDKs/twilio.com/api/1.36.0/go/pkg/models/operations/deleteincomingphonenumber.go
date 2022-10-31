package operations

import (
"openapi/pkg/models/shared")
var DeleteIncomingPhoneNumberServers = []string{
	"https://api.twilio.com",
}

type DeleteIncomingPhoneNumberPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteIncomingPhoneNumberSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteIncomingPhoneNumberRequest struct {
    ServerURL *string 
    PathParams DeleteIncomingPhoneNumberPathParams 
    Security DeleteIncomingPhoneNumberSecurity 
    
}

type DeleteIncomingPhoneNumberResponse struct {
    ContentType string 
    StatusCode int64 
    
}

