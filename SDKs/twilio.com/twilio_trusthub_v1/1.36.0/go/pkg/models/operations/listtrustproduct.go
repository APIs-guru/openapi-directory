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

type ListTrustProductListTrustProductResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListTrustProductListTrustProductResponse struct {
	Meta    *ListTrustProductListTrustProductResponseMeta `json:"meta,omitempty"`
	Results []shared.TrusthubV1TrustProduct               `json:"results,omitempty"`
}

type ListTrustProductResponse struct {
	ContentType              string
	ListTrustProductResponse *ListTrustProductListTrustProductResponse
	StatusCode               int64
}
