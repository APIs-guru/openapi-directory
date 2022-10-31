package operations

import (
	"openapi/pkg/models/shared"
)

var ListDependentPhoneNumberServers = []string{
	"https://api.twilio.com",
}

type ListDependentPhoneNumberPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	AddressSid string `pathParam:"style=simple,explode=false,name=AddressSid"`
}

type ListDependentPhoneNumberQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDependentPhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDependentPhoneNumberRequest struct {
	ServerURL   *string
	PathParams  ListDependentPhoneNumberPathParams
	QueryParams ListDependentPhoneNumberQueryParams
	Security    ListDependentPhoneNumberSecurity
}

type ListDependentPhoneNumberListDependentPhoneNumberResponse struct {
	DependentPhoneNumbers []shared.APIV2010AccountAddressDependentPhoneNumber `json:"dependent_phone_numbers,omitempty"`
	End                   *int64                                              `json:"end,omitempty"`
	FirstPageURI          *string                                             `json:"first_page_uri,omitempty"`
	NextPageURI           *string                                             `json:"next_page_uri,omitempty"`
	Page                  *int64                                              `json:"page,omitempty"`
	PageSize              *int64                                              `json:"page_size,omitempty"`
	PreviousPageURI       *string                                             `json:"previous_page_uri,omitempty"`
	Start                 *int64                                              `json:"start,omitempty"`
	URI                   *string                                             `json:"uri,omitempty"`
}

type ListDependentPhoneNumberResponse struct {
	ContentType                      string
	ListDependentPhoneNumberResponse *ListDependentPhoneNumberListDependentPhoneNumberResponse
	StatusCode                       int64
}
