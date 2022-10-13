package operations

import (
	"openapi/pkg/models/shared"
)

var ListTrustProductServers = []string{
	"https://trusthub.twilio.com",
}

type ListTrustProductQueryParams struct {
	FriendlyName *string                            `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize     *int64                             `queryParam:"style=form,explode=true,name=PageSize"`
	PolicySid    *string                            `queryParam:"style=form,explode=true,name=PolicySid"`
	Status       *shared.TrustProductEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListTrustProductSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTrustProductRequest struct {
	ServerURL   *string
	QueryParams ListTrustProductQueryParams
	Security    ListTrustProductSecurity
}

type ListTrustProduct200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListTrustProduct200ApplicationJSONListTrustProductResponse struct {
	Meta    *ListTrustProduct200ApplicationJSONMeta `json:"meta"`
	Results []shared.TrusthubV1TrustProduct         `json:"results"`
}

type ListTrustProductResponse struct {
	ContentType              string
	ListTrustProductResponse *ListTrustProduct200ApplicationJSONListTrustProductResponse
	StatusCode               int64
}
