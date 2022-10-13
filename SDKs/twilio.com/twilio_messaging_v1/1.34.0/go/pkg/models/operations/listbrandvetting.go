package operations

import (
	"openapi/pkg/models/shared"
)

var ListBrandVettingServers = []string{
	"https://messaging.twilio.com",
}

type ListBrandVettingPathParams struct {
	BrandSid string `pathParam:"style=simple,explode=false,name=BrandSid"`
}

type ListBrandVettingQueryParams struct {
	PageSize        *int64                                      `queryParam:"style=form,explode=true,name=PageSize"`
	VettingProvider *shared.BrandVettingEnumVettingProviderEnum `queryParam:"style=form,explode=true,name=VettingProvider"`
}

type ListBrandVettingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListBrandVettingRequest struct {
	ServerURL   *string
	PathParams  ListBrandVettingPathParams
	QueryParams ListBrandVettingQueryParams
	Security    ListBrandVettingSecurity
}

type ListBrandVetting200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListBrandVetting200ApplicationJSONListBrandVettingResponse struct {
	Data []shared.MessagingV1BrandRegistrationsBrandVetting `json:"data"`
	Meta *ListBrandVetting200ApplicationJSONMeta            `json:"meta"`
}

type ListBrandVettingResponse struct {
	ContentType              string
	ListBrandVettingResponse *ListBrandVetting200ApplicationJSONListBrandVettingResponse
	StatusCode               int64
}
