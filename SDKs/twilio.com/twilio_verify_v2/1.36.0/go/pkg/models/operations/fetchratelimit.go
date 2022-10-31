package operations

import (
"openapi/pkg/models/shared")
var FetchRateLimitServers = []string{
	"https://verify.twilio.com",
}

type FetchRateLimitPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchRateLimitSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchRateLimitRequest struct {
    ServerURL *string 
    PathParams FetchRateLimitPathParams 
    Security FetchRateLimitSecurity 
    
}

type FetchRateLimitResponse struct {
    ContentType string 
    StatusCode int64 
    VerifyV2ServiceRateLimit *shared.VerifyV2ServiceRateLimit 
    
}

