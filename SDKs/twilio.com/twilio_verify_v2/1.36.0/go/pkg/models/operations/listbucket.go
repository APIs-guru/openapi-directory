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

type ListBucketListBucketResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListBucketListBucketResponse struct {
	Buckets []shared.VerifyV2ServiceRateLimitBucket `json:"buckets,omitempty"`
	Meta    *ListBucketListBucketResponseMeta       `json:"meta,omitempty"`
}

type ListBucketResponse struct {
	ContentType        string
	ListBucketResponse *ListBucketListBucketResponse
	StatusCode         int64
}
