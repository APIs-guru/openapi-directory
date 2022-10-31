package operations

import (
"openapi/pkg/models/shared")
var FetchVoiceNumberServers = []string{
	"https://pricing.twilio.com",
}

type FetchVoiceNumberPathParams struct {
    Number string `pathParam:"style=simple,explode=false,name=Number"`
    
}

type FetchVoiceNumberSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchVoiceNumberRequest struct {
    ServerURL *string 
    PathParams FetchVoiceNumberPathParams 
    Security FetchVoiceNumberSecurity 
    
}

type FetchVoiceNumberResponse struct {
    ContentType string 
    StatusCode int64 
    PricingV1VoiceVoiceNumber *shared.PricingV1VoiceVoiceNumber 
    
}

