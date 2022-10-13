package operations

import (
	"openapi/pkg/models/shared"
)

var ListIncomingPhoneNumberMobileServers = []string{
	"https://api.twilio.com",
}

type ListIncomingPhoneNumberMobilePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListIncomingPhoneNumberMobileQueryParams struct {
	Beta         *bool   `queryParam:"style=form,explode=true,name=Beta"`
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	Origin       *string `queryParam:"style=form,explode=true,name=Origin"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	PhoneNumber  *string `queryParam:"style=form,explode=true,name=PhoneNumber"`
}

type ListIncomingPhoneNumberMobileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListIncomingPhoneNumberMobileRequest struct {
	ServerURL   *string
	PathParams  ListIncomingPhoneNumberMobilePathParams
	QueryParams ListIncomingPhoneNumberMobileQueryParams
	Security    ListIncomingPhoneNumberMobileSecurity
}

type ListIncomingPhoneNumberMobile200ApplicationJSONListIncomingPhoneNumberMobileResponse struct {
	End                  *int64                                                               `json:"end"`
	FirstPageURI         *string                                                              `json:"first_page_uri"`
	IncomingPhoneNumbers []shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile `json:"incoming_phone_numbers"`
	NextPageURI          *string                                                              `json:"next_page_uri"`
	Page                 *int64                                                               `json:"page"`
	PageSize             *int64                                                               `json:"page_size"`
	PreviousPageURI      *string                                                              `json:"previous_page_uri"`
	Start                *int64                                                               `json:"start"`
	URI                  *string                                                              `json:"uri"`
}

type ListIncomingPhoneNumberMobileResponse struct {
	ContentType                           string
	ListIncomingPhoneNumberMobileResponse *ListIncomingPhoneNumberMobile200ApplicationJSONListIncomingPhoneNumberMobileResponse
	StatusCode                            int64
}
