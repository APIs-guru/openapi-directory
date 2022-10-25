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

type ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse struct {
	Contents        []shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping `json:"contents,omitempty"`
	End             *int64                                                                                   `json:"end,omitempty"`
	FirstPageURI    *string                                                                                  `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                                                                  `json:"next_page_uri,omitempty"`
	Page            *int64                                                                                   `json:"page,omitempty"`
	PageSize        *int64                                                                                   `json:"page_size,omitempty"`
	PreviousPageURI *string                                                                                  `json:"previous_page_uri,omitempty"`
	Start           *int64                                                                                   `json:"start,omitempty"`
	URI             *string                                                                                  `json:"uri,omitempty"`
}

type ListSipAuthCallsCredentialListMappingResponse struct {
	ContentType                                   string
	ListSipAuthCallsCredentialListMappingResponse *ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse
	StatusCode                                    int64
}
