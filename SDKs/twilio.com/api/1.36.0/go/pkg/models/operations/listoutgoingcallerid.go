package operations

import (
	"openapi/pkg/models/shared"
)

var ListOutgoingCallerIDServers = []string{
	"https://api.twilio.com",
}

type ListOutgoingCallerIDPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListOutgoingCallerIDQueryParams struct {
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	PhoneNumber  *string `queryParam:"style=form,explode=true,name=PhoneNumber"`
}

type ListOutgoingCallerIDSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListOutgoingCallerIDRequest struct {
	ServerURL   *string
	PathParams  ListOutgoingCallerIDPathParams
	QueryParams ListOutgoingCallerIDQueryParams
	Security    ListOutgoingCallerIDSecurity
}

type ListOutgoingCallerID200ApplicationJSONListOutgoingCallerIDResponse struct {
	End               *int64                                   `json:"end"`
	FirstPageURI      *string                                  `json:"first_page_uri"`
	NextPageURI       *string                                  `json:"next_page_uri"`
	OutgoingCallerIds []shared.APIV2010AccountOutgoingCallerID `json:"outgoing_caller_ids"`
	Page              *int64                                   `json:"page"`
	PageSize          *int64                                   `json:"page_size"`
	PreviousPageURI   *string                                  `json:"previous_page_uri"`
	Start             *int64                                   `json:"start"`
	URI               *string                                  `json:"uri"`
}

type ListOutgoingCallerIDResponse struct {
	ContentType                  string
	ListOutgoingCallerIDResponse *ListOutgoingCallerID200ApplicationJSONListOutgoingCallerIDResponse
	StatusCode                   int64
}
