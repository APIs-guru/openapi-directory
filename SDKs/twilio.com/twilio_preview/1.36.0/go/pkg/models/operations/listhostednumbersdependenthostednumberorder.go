package operations

import (
	"openapi/pkg/models/shared"
)

var ListHostedNumbersDependentHostedNumberOrderServers = []string{
	"https://preview.twilio.com",
}

type ListHostedNumbersDependentHostedNumberOrderPathParams struct {
	SigningDocumentSid string `pathParam:"style=simple,explode=false,name=SigningDocumentSid"`
}

type ListHostedNumbersDependentHostedNumberOrderQueryParams struct {
	FriendlyName           *string                                          `queryParam:"style=form,explode=true,name=FriendlyName"`
	IncomingPhoneNumberSid *string                                          `queryParam:"style=form,explode=true,name=IncomingPhoneNumberSid"`
	PageSize               *int64                                           `queryParam:"style=form,explode=true,name=PageSize"`
	PhoneNumber            *string                                          `queryParam:"style=form,explode=true,name=PhoneNumber"`
	Status                 *shared.DependentHostedNumberOrderEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
	UniqueName             *string                                          `queryParam:"style=form,explode=true,name=UniqueName"`
}

type ListHostedNumbersDependentHostedNumberOrderSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListHostedNumbersDependentHostedNumberOrderRequest struct {
	ServerURL   *string
	PathParams  ListHostedNumbersDependentHostedNumberOrderPathParams
	QueryParams ListHostedNumbersDependentHostedNumberOrderQueryParams
	Security    ListHostedNumbersDependentHostedNumberOrderSecurity
}

type ListHostedNumbersDependentHostedNumberOrder200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListHostedNumbersDependentHostedNumberOrder200ApplicationJSONListHostedNumbersDependentHostedNumberOrderResponse struct {
	Items []shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder `json:"items,omitempty"`
	Meta  *ListHostedNumbersDependentHostedNumberOrder200ApplicationJSONMeta           `json:"meta,omitempty"`
}

type ListHostedNumbersDependentHostedNumberOrderResponse struct {
	ContentType                                         string
	ListHostedNumbersDependentHostedNumberOrderResponse *ListHostedNumbersDependentHostedNumberOrder200ApplicationJSONListHostedNumbersDependentHostedNumberOrderResponse
	StatusCode                                          int64
}
