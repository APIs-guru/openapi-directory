package operations

import (
	"openapi/pkg/models/shared"
)

var CreateBucketServers = []string{
	"https://verify.twilio.com",
}

type CreateBucketPathParams struct {
	RateLimitSid string `pathParam:"style=simple,explode=false,name=RateLimitSid"`
	ServiceSid   string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateBucketRequestBodyCreateBucketRequest struct {
	Interval int64 `form:"name=Interval"`
	Max      int64 `form:"name=Max"`
}

type CreateBucketSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateBucketRequest struct {
	ServerURL  *string
	PathParams CreateBucketPathParams
	Request    *CreateBucketRequestBodyCreateBucketRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateBucketSecurity
}

type CreateBucketResponse struct {
	ContentType                    string
	StatusCode                     int64
	VerifyV2ServiceRateLimitBucket *shared.VerifyV2ServiceRateLimitBucket
}
