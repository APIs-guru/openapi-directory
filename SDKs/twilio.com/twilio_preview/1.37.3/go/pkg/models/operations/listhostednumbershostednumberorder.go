package operations

import (
	"openapi/pkg/models/shared"
)

var ListHostedNumbersHostedNumberOrderServerList = []string{
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

type ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse struct {
	Items []shared.PreviewHostedNumbersHostedNumberOrder                                    `json:"items,omitempty"`
	Meta  *ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta `json:"meta,omitempty"`
}

type ListHostedNumbersHostedNumberOrderRequest struct {
	ServerURL   *string
	QueryParams ListHostedNumbersHostedNumberOrderQueryParams
	Security    ListHostedNumbersHostedNumberOrderSecurity
}

type ListHostedNumbersHostedNumberOrderResponse struct {
	ContentType                                string
	ListHostedNumbersHostedNumberOrderResponse *ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse
	StatusCode                                 int64
}
