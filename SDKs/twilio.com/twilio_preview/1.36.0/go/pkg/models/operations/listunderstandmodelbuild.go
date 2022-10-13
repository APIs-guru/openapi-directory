package operations

import (
	"openapi/pkg/models/shared"
)

var ListUnderstandModelBuildServers = []string{
	"https://preview.twilio.com",
}

type ListUnderstandModelBuildPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type ListUnderstandModelBuildQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUnderstandModelBuildSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUnderstandModelBuildRequest struct {
	ServerURL   *string
	PathParams  ListUnderstandModelBuildPathParams
	QueryParams ListUnderstandModelBuildQueryParams
	Security    ListUnderstandModelBuildSecurity
}

type ListUnderstandModelBuild200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListUnderstandModelBuild200ApplicationJSONListUnderstandModelBuildResponse struct {
	Meta        *ListUnderstandModelBuild200ApplicationJSONMeta `json:"meta"`
	ModelBuilds []shared.PreviewUnderstandAssistantModelBuild   `json:"model_builds"`
}

type ListUnderstandModelBuildResponse struct {
	ContentType                      string
	ListUnderstandModelBuildResponse *ListUnderstandModelBuild200ApplicationJSONListUnderstandModelBuildResponse
	StatusCode                       int64
}
