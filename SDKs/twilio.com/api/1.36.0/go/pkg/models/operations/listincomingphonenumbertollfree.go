package operations

import (
	"openapi/pkg/models/shared"
)

var ListIncomingPhoneNumberTollFreeServers = []string{
	"https://api.twilio.com",
}

type ListIncomingPhoneNumberTollFreePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListIncomingPhoneNumberTollFreeQueryParams struct {
	Beta         *bool   `queryParam:"style=form,explode=true,name=Beta"`
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	Origin       *string `queryParam:"style=form,explode=true,name=Origin"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	PhoneNumber  *string `queryParam:"style=form,explode=true,name=PhoneNumber"`
}

type ListIncomingPhoneNumberTollFreeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListIncomingPhoneNumberTollFreeRequest struct {
	ServerURL   *string
	PathParams  ListIncomingPhoneNumberTollFreePathParams
	QueryParams ListIncomingPhoneNumberTollFreeQueryParams
	Security    ListIncomingPhoneNumberTollFreeSecurity
}

type ListIncomingPhoneNumberTollFree200ApplicationJSONListIncomingPhoneNumberTollFreeResponse struct {
	End                  *int64                                                                 `json:"end,omitempty"`
	FirstPageURI         *string                                                                `json:"first_page_uri,omitempty"`
	IncomingPhoneNumbers []shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree `json:"incoming_phone_numbers,omitempty"`
	NextPageURI          *string                                                                `json:"next_page_uri,omitempty"`
	Page                 *int64                                                                 `json:"page,omitempty"`
	PageSize             *int64                                                                 `json:"page_size,omitempty"`
	PreviousPageURI      *string                                                                `json:"previous_page_uri,omitempty"`
	Start                *int64                                                                 `json:"start,omitempty"`
	URI                  *string                                                                `json:"uri,omitempty"`
}

type ListIncomingPhoneNumberTollFreeResponse struct {
	ContentType                             string
	ListIncomingPhoneNumberTollFreeResponse *ListIncomingPhoneNumberTollFree200ApplicationJSONListIncomingPhoneNumberTollFreeResponse
	StatusCode                              int64
}
