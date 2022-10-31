package operations

import (
	"openapi/pkg/models/shared"
)

var ListQueryServers = []string{
	"https://autopilot.twilio.com",
}

type ListQueryPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type ListQueryQueryParams struct {
	DialogueSid *string `queryParam:"style=form,explode=true,name=DialogueSid"`
	Language    *string `queryParam:"style=form,explode=true,name=Language"`
	ModelBuild  *string `queryParam:"style=form,explode=true,name=ModelBuild"`
	PageSize    *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	Status      *string `queryParam:"style=form,explode=true,name=Status"`
}

type ListQuerySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListQueryRequest struct {
	ServerURL   *string
	PathParams  ListQueryPathParams
	QueryParams ListQueryQueryParams
	Security    ListQuerySecurity
}

type ListQueryListQueryResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListQueryListQueryResponse struct {
	Meta    *ListQueryListQueryResponseMeta    `json:"meta,omitempty"`
	Queries []shared.AutopilotV1AssistantQuery `json:"queries,omitempty"`
}

type ListQueryResponse struct {
	ContentType       string
	ListQueryResponse *ListQueryListQueryResponse
	StatusCode        int64
}
