package operations

import (
"openapi/pkg/models/shared")
var FetchBucketServers = []string{
	"https://verify.twilio.com",
}

type FetchBucketPathParams struct {
    RateLimitSid string `pathParam:"style=simple,explode=false,name=RateLimitSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchBucketSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchBucketRequest struct {
    ServerURL *string 
    PathParams FetchBucketPathParams 
    Security FetchBucketSecurity 
    
}

type FetchBucketResponse struct {
    ContentType string 
    StatusCode int64 
    VerifyV2ServiceRateLimitBucket *shared.VerifyV2ServiceRateLimitBucket 
    
}

