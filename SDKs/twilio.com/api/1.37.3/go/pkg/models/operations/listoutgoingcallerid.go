package operations

import (
	"openapi/pkg/models/shared"
)

var ListOutgoingCallerIDServerList = []string{
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

type ListOutgoingCallerIDListOutgoingCallerIDResponse struct {
	End               *int64                                   `json:"end,omitempty"`
	FirstPageURI      *string                                  `json:"first_page_uri,omitempty"`
	NextPageURI       *string                                  `json:"next_page_uri,omitempty"`
	OutgoingCallerIds []shared.APIV2010AccountOutgoingCallerID `json:"outgoing_caller_ids,omitempty"`
	Page              *int64                                   `json:"page,omitempty"`
	PageSize          *int64                                   `json:"page_size,omitempty"`
	PreviousPageURI   *string                                  `json:"previous_page_uri,omitempty"`
	Start             *int64                                   `json:"start,omitempty"`
	URI               *string                                  `json:"uri,omitempty"`
}

type ListOutgoingCallerIDRequest struct {
	ServerURL   *string
	PathParams  ListOutgoingCallerIDPathParams
	QueryParams ListOutgoingCallerIDQueryParams
	Security    ListOutgoingCallerIDSecurity
}

type ListOutgoingCallerIDResponse struct {
	ContentType                  string
	ListOutgoingCallerIDResponse *ListOutgoingCallerIDListOutgoingCallerIDResponse
	StatusCode                   int64
}
