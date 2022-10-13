package operations

import (
	"openapi/pkg/models/shared"
)

var ListSipAuthCallsCredentialListMappingServers = []string{
	"https://api.twilio.com",
}

type ListSipAuthCallsCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type ListSipAuthCallsCredentialListMappingQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSipAuthCallsCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSipAuthCallsCredentialListMappingRequest struct {
	ServerURL   *string
	PathParams  ListSipAuthCallsCredentialListMappingPathParams
	QueryParams ListSipAuthCallsCredentialListMappingQueryParams
	Security    ListSipAuthCallsCredentialListMappingSecurity
}

type ListSipAuthCallsCredentialListMapping200ApplicationJSONListSipAuthCallsCredentialListMappingResponse struct {
	Contents        []shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping `json:"contents"`
	End             *int64                                                                                   `json:"end"`
	FirstPageURI    *string                                                                                  `json:"first_page_uri"`
	NextPageURI     *string                                                                                  `json:"next_page_uri"`
	Page            *int64                                                                                   `json:"page"`
	PageSize        *int64                                                                                   `json:"page_size"`
	PreviousPageURI *string                                                                                  `json:"previous_page_uri"`
	Start           *int64                                                                                   `json:"start"`
	URI             *string                                                                                  `json:"uri"`
}

type ListSipAuthCallsCredentialListMappingResponse struct {
	ContentType                                   string
	ListSipAuthCallsCredentialListMappingResponse *ListSipAuthCallsCredentialListMapping200ApplicationJSONListSipAuthCallsCredentialListMappingResponse
	StatusCode                                    int64
}
