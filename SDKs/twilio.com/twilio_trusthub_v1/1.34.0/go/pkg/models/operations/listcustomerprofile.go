package operations

import (
	"openapi/pkg/models/shared"
)

var ListCustomerProfileServers = []string{
	"https://trusthub.twilio.com",
}

type ListCustomerProfileQueryParams struct {
	FriendlyName *string                               `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize     *int64                                `queryParam:"style=form,explode=true,name=PageSize"`
	PolicySid    *string                               `queryParam:"style=form,explode=true,name=PolicySid"`
	Status       *shared.CustomerProfileEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListCustomerProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCustomerProfileRequest struct {
	ServerURL   *string
	QueryParams ListCustomerProfileQueryParams
	Security    ListCustomerProfileSecurity
}

type ListCustomerProfile200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListCustomerProfile200ApplicationJSONListCustomerProfileResponse struct {
	Meta    *ListCustomerProfile200ApplicationJSONMeta `json:"meta"`
	Results []shared.TrusthubV1CustomerProfile         `json:"results"`
}

type ListCustomerProfileResponse struct {
	ContentType                 string
	ListCustomerProfileResponse *ListCustomerProfile200ApplicationJSONListCustomerProfileResponse
	StatusCode                  int64
}
