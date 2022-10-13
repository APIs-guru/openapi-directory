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

type ListDependentPhoneNumber200ApplicationJSONListDependentPhoneNumberResponse struct {
	DependentPhoneNumbers []shared.APIV2010AccountAddressDependentPhoneNumber `json:"dependent_phone_numbers"`
	End                   *int64                                              `json:"end"`
	FirstPageURI          *string                                             `json:"first_page_uri"`
	NextPageURI           *string                                             `json:"next_page_uri"`
	Page                  *int64                                              `json:"page"`
	PageSize              *int64                                              `json:"page_size"`
	PreviousPageURI       *string                                             `json:"previous_page_uri"`
	Start                 *int64                                              `json:"start"`
	URI                   *string                                             `json:"uri"`
}

type ListDependentPhoneNumberResponse struct {
	ContentType                      string
	ListDependentPhoneNumberResponse *ListDependentPhoneNumber200ApplicationJSONListDependentPhoneNumberResponse
	StatusCode                       int64
}
