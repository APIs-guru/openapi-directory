package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteBucketServers = []string{
	"https://verify.twilio.com",
}

type DeleteBucketPathParams struct {
	RateLimitSid string `pathParam:"style=simple,explode=false,name=RateLimitSid"`
	ServiceSid   string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteBucketSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteBucketRequest struct {
	ServerURL  *string
	PathParams DeleteBucketPathParams
	Security   DeleteBucketSecurity
}

type DeleteBucketResponse struct {
	ContentType string
	StatusCode  int64
}
