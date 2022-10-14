package operations

import (
	"openapi/pkg/models/shared"
)

var ListIncomingPhoneNumberAssignedAddOnExtensionServers = []string{
	"https://api.twilio.com",
}

type ListIncomingPhoneNumberAssignedAddOnExtensionPathParams struct {
	AccountSid       string `pathParam:"style=simple,explode=false,name=AccountSid"`
	AssignedAddOnSid string `pathParam:"style=simple,explode=false,name=AssignedAddOnSid"`
	ResourceSid      string `pathParam:"style=simple,explode=false,name=ResourceSid"`
}

type ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListIncomingPhoneNumberAssignedAddOnExtensionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListIncomingPhoneNumberAssignedAddOnExtensionRequest struct {
	ServerURL   *string
	PathParams  ListIncomingPhoneNumberAssignedAddOnExtensionPathParams
	QueryParams ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams
	Security    ListIncomingPhoneNumberAssignedAddOnExtensionSecurity
}

type ListIncomingPhoneNumberAssignedAddOnExtension200ApplicationJSONListIncomingPhoneNumberAssignedAddOnExtensionResponse struct {
	End             *int64                                                                                                               `json:"end,omitempty"`
	Extensions      []shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension `json:"extensions,omitempty"`
	FirstPageURI    *string                                                                                                              `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                                                                                              `json:"next_page_uri,omitempty"`
	Page            *int64                                                                                                               `json:"page,omitempty"`
	PageSize        *int64                                                                                                               `json:"page_size,omitempty"`
	PreviousPageURI *string                                                                                                              `json:"previous_page_uri,omitempty"`
	Start           *int64                                                                                                               `json:"start,omitempty"`
	URI             *string                                                                                                              `json:"uri,omitempty"`
}

type ListIncomingPhoneNumberAssignedAddOnExtensionResponse struct {
	ContentType                                           string
	ListIncomingPhoneNumberAssignedAddOnExtensionResponse *ListIncomingPhoneNumberAssignedAddOnExtension200ApplicationJSONListIncomingPhoneNumberAssignedAddOnExtensionResponse
	StatusCode                                            int64
}
