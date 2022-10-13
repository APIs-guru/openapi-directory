package operations

import (
	"openapi/pkg/models/shared"
)

var ListBucketServers = []string{
	"https://verify.twilio.com",
}

type ListBucketPathParams struct {
	RateLimitSid string `pathParam:"style=simple,explode=false,name=RateLimitSid"`
	ServiceSid   string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListBucketQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListBucketSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListBucketRequest struct {
	ServerURL   *string
	PathParams  ListBucketPathParams
	QueryParams ListBucketQueryParams
	Security    ListBucketSecurity
}

type ListBucket200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListBucket200ApplicationJSONListBucketResponse struct {
	Buckets []shared.VerifyV2ServiceRateLimitBucket `json:"buckets"`
	Meta    *ListBucket200ApplicationJSONMeta       `json:"meta"`
}

type ListBucketResponse struct {
	ContentType        string
	ListBucketResponse *ListBucket200ApplicationJSONListBucketResponse
	StatusCode         int64
}
