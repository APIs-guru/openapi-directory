package operations

import (
	"openapi/pkg/models/shared"
)

var ListUnderstandQueryServers = []string{
	"https://preview.twilio.com",
}

type ListUnderstandQueryPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type ListUnderstandQueryQueryParams struct {
	Language   *string `queryParam:"style=form,explode=true,name=Language"`
	ModelBuild *string `queryParam:"style=form,explode=true,name=ModelBuild"`
	PageSize   *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	Status     *string `queryParam:"style=form,explode=true,name=Status"`
}

type ListUnderstandQuerySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUnderstandQueryRequest struct {
	ServerURL   *string
	PathParams  ListUnderstandQueryPathParams
	QueryParams ListUnderstandQueryQueryParams
	Security    ListUnderstandQuerySecurity
}

type ListUnderstandQuery200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListUnderstandQuery200ApplicationJSONListUnderstandQueryResponse struct {
	Meta    *ListUnderstandQuery200ApplicationJSONMeta `json:"meta"`
	Queries []shared.PreviewUnderstandAssistantQuery   `json:"queries"`
}

type ListUnderstandQueryResponse struct {
	ContentType                 string
	ListUnderstandQueryResponse *ListUnderstandQuery200ApplicationJSONListUnderstandQueryResponse
	StatusCode                  int64
}
