package operations

import (
	"openapi/pkg/models/shared"
)

var ListIncomingPhoneNumberAssignedAddOnServers = []string{
	"https://api.twilio.com",
}

type ListIncomingPhoneNumberAssignedAddOnPathParams struct {
	AccountSid  string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ResourceSid string `pathParam:"style=simple,explode=false,name=ResourceSid"`
}

type ListIncomingPhoneNumberAssignedAddOnQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListIncomingPhoneNumberAssignedAddOnSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListIncomingPhoneNumberAssignedAddOnRequest struct {
	ServerURL   *string
	PathParams  ListIncomingPhoneNumberAssignedAddOnPathParams
	QueryParams ListIncomingPhoneNumberAssignedAddOnQueryParams
	Security    ListIncomingPhoneNumberAssignedAddOnSecurity
}

type ListIncomingPhoneNumberAssignedAddOn200ApplicationJSONListIncomingPhoneNumberAssignedAddOnResponse struct {
	AssignedAddOns  []shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn `json:"assigned_add_ons,omitempty"`
	End             *int64                                                                      `json:"end,omitempty"`
	FirstPageURI    *string                                                                     `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                                                     `json:"next_page_uri,omitempty"`
	Page            *int64                                                                      `json:"page,omitempty"`
	PageSize        *int64                                                                      `json:"page_size,omitempty"`
	PreviousPageURI *string                                                                     `json:"previous_page_uri,omitempty"`
	Start           *int64                                                                      `json:"start,omitempty"`
	URI             *string                                                                     `json:"uri,omitempty"`
}

type ListIncomingPhoneNumberAssignedAddOnResponse struct {
	ContentType                                  string
	ListIncomingPhoneNumberAssignedAddOnResponse *ListIncomingPhoneNumberAssignedAddOn200ApplicationJSONListIncomingPhoneNumberAssignedAddOnResponse
	StatusCode                                   int64
}
