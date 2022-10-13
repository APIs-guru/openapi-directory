package operations

import (
	"openapi/pkg/models/shared"
)

var ListSipDomainServers = []string{
	"https://api.twilio.com",
}

type ListSipDomainPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListSipDomainQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSipDomainSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSipDomainRequest struct {
	ServerURL   *string
	PathParams  ListSipDomainPathParams
	QueryParams ListSipDomainQueryParams
	Security    ListSipDomainSecurity
}

type ListSipDomain200ApplicationJSONListSipDomainResponse struct {
	Domains         []shared.APIV2010AccountSipSipDomain `json:"domains"`
	End             *int64                               `json:"end"`
	FirstPageURI    *string                              `json:"first_page_uri"`
	NextPageURI     *string                              `json:"next_page_uri"`
	Page            *int64                               `json:"page"`
	PageSize        *int64                               `json:"page_size"`
	PreviousPageURI *string                              `json:"previous_page_uri"`
	Start           *int64                               `json:"start"`
	URI             *string                              `json:"uri"`
}

type ListSipDomainResponse struct {
	ContentType           string
	ListSipDomainResponse *ListSipDomain200ApplicationJSONListSipDomainResponse
	StatusCode            int64
}
