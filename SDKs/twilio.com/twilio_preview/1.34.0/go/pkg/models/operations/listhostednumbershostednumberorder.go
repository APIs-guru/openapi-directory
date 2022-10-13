package operations

import (
	"openapi/pkg/models/shared"
)

var ListHostedNumbersHostedNumberOrderServers = []string{
	"https://preview.twilio.com",
}

type ListHostedNumbersHostedNumberOrderQueryParams struct {
	FriendlyName           *string                                 `queryParam:"style=form,explode=true,name=FriendlyName"`
	IncomingPhoneNumberSid *string                                 `queryParam:"style=form,explode=true,name=IncomingPhoneNumberSid"`
	PageSize               *int64                                  `queryParam:"style=form,explode=true,name=PageSize"`
	PhoneNumber            *string                                 `queryParam:"style=form,explode=true,name=PhoneNumber"`
	Status                 *shared.HostedNumberOrderEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
	UniqueName             *string                                 `queryParam:"style=form,explode=true,name=UniqueName"`
}

type ListHostedNumbersHostedNumberOrderSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListHostedNumbersHostedNumberOrderRequest struct {
	ServerURL   *string
	QueryParams ListHostedNumbersHostedNumberOrderQueryParams
	Security    ListHostedNumbersHostedNumberOrderSecurity
}

type ListHostedNumbersHostedNumberOrder200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListHostedNumbersHostedNumberOrder200ApplicationJSONListHostedNumbersHostedNumberOrderResponse struct {
	Items []shared.PreviewHostedNumbersHostedNumberOrder            `json:"items"`
	Meta  *ListHostedNumbersHostedNumberOrder200ApplicationJSONMeta `json:"meta"`
}

type ListHostedNumbersHostedNumberOrderResponse struct {
	ContentType                                string
	ListHostedNumbersHostedNumberOrderResponse *ListHostedNumbersHostedNumberOrder200ApplicationJSONListHostedNumbersHostedNumberOrderResponse
	StatusCode                                 int64
}
