package operations

import (
"openapi/pkg/models/shared")
var DeletePhoneNumberServers = []string{
	"https://messaging.twilio.com",
}

type DeletePhoneNumberPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeletePhoneNumberSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeletePhoneNumberRequest struct {
    ServerURL *string 
    PathParams DeletePhoneNumberPathParams 
    Security DeletePhoneNumberSecurity 
    
}

type DeletePhoneNumberResponse struct {
    ContentType string 
    StatusCode int64 
    
}

