package operations

import (
"openapi/pkg/models/shared")
var FetchPhoneNumberServers = []string{
	"https://routes.twilio.com",
}

type FetchPhoneNumberPathParams struct {
    PhoneNumber string `pathParam:"style=simple,explode=false,name=PhoneNumber"`
    
}

type FetchPhoneNumberSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchPhoneNumberRequest struct {
    ServerURL *string 
    PathParams FetchPhoneNumberPathParams 
    Security FetchPhoneNumberSecurity 
    
}

type FetchPhoneNumberResponse struct {
    ContentType string 
    StatusCode int64 
    RoutesV2PhoneNumber *shared.RoutesV2PhoneNumber 
    
}

