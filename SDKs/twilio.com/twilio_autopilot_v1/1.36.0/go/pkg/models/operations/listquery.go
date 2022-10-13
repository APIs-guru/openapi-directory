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

type ListQuery200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListQuery200ApplicationJSONListQueryResponse struct {
	Meta    *ListQuery200ApplicationJSONMeta   `json:"meta"`
	Queries []shared.AutopilotV1AssistantQuery `json:"queries"`
}

type ListQueryResponse struct {
	ContentType       string
	ListQueryResponse *ListQuery200ApplicationJSONListQueryResponse
	StatusCode        int64
}
