package operations

import (
	"openapi/pkg/models/shared"
)

var ListSipCredentialListMappingServers = []string{
	"https://api.twilio.com",
}

type ListSipCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type ListSipCredentialListMappingQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSipCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSipCredentialListMappingRequest struct {
	ServerURL   *string
	PathParams  ListSipCredentialListMappingPathParams
	QueryParams ListSipCredentialListMappingQueryParams
	Security    ListSipCredentialListMappingSecurity
}

type ListSipCredentialListMapping200ApplicationJSONListSipCredentialListMappingResponse struct {
	CredentialListMappings []shared.APIV2010AccountSipSipDomainSipCredentialListMapping `json:"credential_list_mappings,omitempty"`
	End                    *int64                                                       `json:"end,omitempty"`
	FirstPageURI           *string                                                      `json:"first_page_uri,omitempty"`
	NextPageURI            *string                                                      `json:"next_page_uri,omitempty"`
	Page                   *int64                                                       `json:"page,omitempty"`
	PageSize               *int64                                                       `json:"page_size,omitempty"`
	PreviousPageURI        *string                                                      `json:"previous_page_uri,omitempty"`
	Start                  *int64                                                       `json:"start,omitempty"`
	URI                    *string                                                      `json:"uri,omitempty"`
}

type ListSipCredentialListMappingResponse struct {
	ContentType                          string
	ListSipCredentialListMappingResponse *ListSipCredentialListMapping200ApplicationJSONListSipCredentialListMappingResponse
	StatusCode                           int64
}
