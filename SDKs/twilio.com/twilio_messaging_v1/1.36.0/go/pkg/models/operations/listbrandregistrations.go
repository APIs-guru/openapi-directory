package operations

import (
	"openapi/pkg/models/shared"
)

var ListBrandRegistrationsServers = []string{
	"https://messaging.twilio.com",
}

type ListBrandRegistrationsQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListBrandRegistrationsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListBrandRegistrationsRequest struct {
	ServerURL   *string
	QueryParams ListBrandRegistrationsQueryParams
	Security    ListBrandRegistrationsSecurity
}

type ListBrandRegistrations200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListBrandRegistrations200ApplicationJSONListBrandRegistrationsResponse struct {
	Data []shared.MessagingV1BrandRegistrations        `json:"data"`
	Meta *ListBrandRegistrations200ApplicationJSONMeta `json:"meta"`
}

type ListBrandRegistrationsResponse struct {
	ContentType                    string
	ListBrandRegistrationsResponse *ListBrandRegistrations200ApplicationJSONListBrandRegistrationsResponse
	StatusCode                     int64
}
