package operations

import (
	"openapi/pkg/models/shared"
)

var ListBrandRegistrationsServerList = []string{
	"https://messaging.twilio.com",
}

type ListBrandRegistrationsQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListBrandRegistrationsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListBrandRegistrationsListBrandRegistrationsResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListBrandRegistrationsListBrandRegistrationsResponse struct {
	Data []shared.MessagingV1BrandRegistrations                    `json:"data,omitempty"`
	Meta *ListBrandRegistrationsListBrandRegistrationsResponseMeta `json:"meta,omitempty"`
}

type ListBrandRegistrationsRequest struct {
	ServerURL   *string
	QueryParams ListBrandRegistrationsQueryParams
	Security    ListBrandRegistrationsSecurity
}

type ListBrandRegistrationsResponse struct {
	ContentType                    string
	ListBrandRegistrationsResponse *ListBrandRegistrationsListBrandRegistrationsResponse
	StatusCode                     int64
}
