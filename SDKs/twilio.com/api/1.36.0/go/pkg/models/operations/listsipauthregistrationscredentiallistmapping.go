package operations

import (
	"openapi/pkg/models/shared"
)

var ListSipAuthRegistrationsCredentialListMappingServers = []string{
	"https://api.twilio.com",
}

type ListSipAuthRegistrationsCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type ListSipAuthRegistrationsCredentialListMappingQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSipAuthRegistrationsCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSipAuthRegistrationsCredentialListMappingRequest struct {
	ServerURL   *string
	PathParams  ListSipAuthRegistrationsCredentialListMappingPathParams
	QueryParams ListSipAuthRegistrationsCredentialListMappingQueryParams
	Security    ListSipAuthRegistrationsCredentialListMappingSecurity
}

type ListSipAuthRegistrationsCredentialListMapping200ApplicationJSONListSipAuthRegistrationsCredentialListMappingResponse struct {
	Contents        []shared.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping `json:"contents"`
	End             *int64                                                                                                   `json:"end"`
	FirstPageURI    *string                                                                                                  `json:"first_page_uri"`
	NextPageURI     *string                                                                                                  `json:"next_page_uri"`
	Page            *int64                                                                                                   `json:"page"`
	PageSize        *int64                                                                                                   `json:"page_size"`
	PreviousPageURI *string                                                                                                  `json:"previous_page_uri"`
	Start           *int64                                                                                                   `json:"start"`
	URI             *string                                                                                                  `json:"uri"`
}

type ListSipAuthRegistrationsCredentialListMappingResponse struct {
	ContentType                                           string
	ListSipAuthRegistrationsCredentialListMappingResponse *ListSipAuthRegistrationsCredentialListMapping200ApplicationJSONListSipAuthRegistrationsCredentialListMappingResponse
	StatusCode                                            int64
}
