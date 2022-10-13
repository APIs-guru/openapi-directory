package operations

import (
	"openapi/pkg/models/shared"
)

var ListSipAuthCallsIPAccessControlListMappingServers = []string{
	"https://api.twilio.com",
}

type ListSipAuthCallsIPAccessControlListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type ListSipAuthCallsIPAccessControlListMappingQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSipAuthCallsIPAccessControlListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSipAuthCallsIPAccessControlListMappingRequest struct {
	ServerURL   *string
	PathParams  ListSipAuthCallsIPAccessControlListMappingPathParams
	QueryParams ListSipAuthCallsIPAccessControlListMappingQueryParams
	Security    ListSipAuthCallsIPAccessControlListMappingSecurity
}

type ListSipAuthCallsIPAccessControlListMapping200ApplicationJSONListSipAuthCallsIPAccessControlListMappingResponse struct {
	Contents        []shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping `json:"contents"`
	End             *int64                                                                                        `json:"end"`
	FirstPageURI    *string                                                                                       `json:"first_page_uri"`
	NextPageURI     *string                                                                                       `json:"next_page_uri"`
	Page            *int64                                                                                        `json:"page"`
	PageSize        *int64                                                                                        `json:"page_size"`
	PreviousPageURI *string                                                                                       `json:"previous_page_uri"`
	Start           *int64                                                                                        `json:"start"`
	URI             *string                                                                                       `json:"uri"`
}

type ListSipAuthCallsIPAccessControlListMappingResponse struct {
	ContentType                                        string
	ListSipAuthCallsIPAccessControlListMappingResponse *ListSipAuthCallsIPAccessControlListMapping200ApplicationJSONListSipAuthCallsIPAccessControlListMappingResponse
	StatusCode                                         int64
}
