package operations

import (
	"openapi/pkg/models/shared"
)

var ListNetworkAccessProfileNetworkServers = []string{
	"https://supersim.twilio.com",
}

type ListNetworkAccessProfileNetworkPathParams struct {
	NetworkAccessProfileSid string `pathParam:"style=simple,explode=false,name=NetworkAccessProfileSid"`
}

type ListNetworkAccessProfileNetworkQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListNetworkAccessProfileNetworkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListNetworkAccessProfileNetworkRequest struct {
	ServerURL   *string
	PathParams  ListNetworkAccessProfileNetworkPathParams
	QueryParams ListNetworkAccessProfileNetworkQueryParams
	Security    ListNetworkAccessProfileNetworkSecurity
}

type ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse struct {
	Meta     *ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta `json:"meta,omitempty"`
	Networks []shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork          `json:"networks,omitempty"`
}

type ListNetworkAccessProfileNetworkResponse struct {
	ContentType                             string
	ListNetworkAccessProfileNetworkResponse *ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse
	StatusCode                              int64
}
