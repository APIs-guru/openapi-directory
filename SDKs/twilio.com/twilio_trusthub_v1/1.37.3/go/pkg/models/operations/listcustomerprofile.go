package operations

import (
	"openapi/pkg/models/shared"
)

var ListCustomerProfileServerList = []string{
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

type ListCustomerProfileListCustomerProfileResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListCustomerProfileListCustomerProfileResponse struct {
	Meta    *ListCustomerProfileListCustomerProfileResponseMeta `json:"meta,omitempty"`
	Results []shared.TrusthubV1CustomerProfile                  `json:"results,omitempty"`
}

type ListCustomerProfileRequest struct {
	ServerURL   *string
	QueryParams ListCustomerProfileQueryParams
	Security    ListCustomerProfileSecurity
}

type ListCustomerProfileResponse struct {
	ContentType                 string
	ListCustomerProfileResponse *ListCustomerProfileListCustomerProfileResponse
	StatusCode                  int64
}
