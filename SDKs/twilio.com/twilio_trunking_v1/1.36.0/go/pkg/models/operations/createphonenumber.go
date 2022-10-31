package operations

import (
"openapi/pkg/models/shared")
var CreatePhoneNumberServers = []string{
	"https://trunking.twilio.com",
}

type CreatePhoneNumberPathParams struct {
    TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
    
}

type CreatePhoneNumberCreatePhoneNumberRequest struct {
    PhoneNumberSid string `form:"name=PhoneNumberSid"`
    
}

type CreatePhoneNumberSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreatePhoneNumberRequest struct {
    ServerURL *string 
    PathParams CreatePhoneNumberPathParams 
    Request *CreatePhoneNumberCreatePhoneNumberRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreatePhoneNumberSecurity 
    
}

type CreatePhoneNumberResponse struct {
    ContentType string 
    StatusCode int64 
    TrunkingV1TrunkPhoneNumber *shared.TrunkingV1TrunkPhoneNumber 
    
}

