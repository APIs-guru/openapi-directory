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
	CredentialListMappings []shared.APIV2010AccountSipSipDomainSipCredentialListMapping `json:"credential_list_mappings"`
	End                    *int64                                                       `json:"end"`
	FirstPageURI           *string                                                      `json:"first_page_uri"`
	NextPageURI            *string                                                      `json:"next_page_uri"`
	Page                   *int64                                                       `json:"page"`
	PageSize               *int64                                                       `json:"page_size"`
	PreviousPageURI        *string                                                      `json:"previous_page_uri"`
	Start                  *int64                                                       `json:"start"`
	URI                    *string                                                      `json:"uri"`
}

type ListSipCredentialListMappingResponse struct {
	ContentType                          string
	ListSipCredentialListMappingResponse *ListSipCredentialListMapping200ApplicationJSONListSipCredentialListMappingResponse
	StatusCode                           int64
}
