package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateBucketServers = []string{
	"https://verify.twilio.com",
}

type UpdateBucketPathParams struct {
	RateLimitSid string `pathParam:"style=simple,explode=false,name=RateLimitSid"`
	ServiceSid   string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateBucketUpdateBucketRequest struct {
	Interval *int64 `form:"name=Interval"`
	Max      *int64 `form:"name=Max"`
}

type UpdateBucketSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateBucketRequest struct {
	ServerURL  *string
	PathParams UpdateBucketPathParams
	Request    *UpdateBucketUpdateBucketRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateBucketSecurity
}

type UpdateBucketResponse struct {
	ContentType                    string
	StatusCode                     int64
	VerifyV2ServiceRateLimitBucket *shared.VerifyV2ServiceRateLimitBucket
}
